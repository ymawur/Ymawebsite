import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

interface WritingAssetRouteProps {
  params: {
    image: string;
  };
}

const CONTENT_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

const ASSET_DIRECTORIES = [
  path.join("app", "writings", "assets"),
  path.join("content", "writings", "assets"),
  path.join("public", "images", "writings"),
  path.join("public", "images"),
  "assets",
];

export async function GET(
  _request: Request,
  { params }: WritingAssetRouteProps,
) {
  const contentType =
    CONTENT_TYPES[path.extname(params.image).toLowerCase()] ??
    "application/octet-stream";

  for (const directory of ASSET_DIRECTORIES) {
    try {
      const file = await readFile(
        path.join(process.cwd(), directory, params.image),
      );

      return new NextResponse(file, {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
          "Content-Type": contentType,
        },
      });
    } catch {
      // Try the next supported writing-asset location.
    }
  }

  return new NextResponse("Not found", { status: 404 });
}

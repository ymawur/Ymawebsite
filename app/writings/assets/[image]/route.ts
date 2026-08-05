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

export async function GET(
  _request: Request,
  { params }: WritingAssetRouteProps,
) {
  try {
    const file = await readFile(
      path.join(process.cwd(), "app", "writings", "assets", params.image),
    );
    const contentType =
      CONTENT_TYPES[path.extname(params.image).toLowerCase()] ??
      "application/octet-stream";

    return new NextResponse(file, {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Type": contentType,
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}

import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const WRITING_IMAGES: Record<string, string> = {
  "ddos-cycle.png": "DDOs cycle.png",
  "ddos-cycle-mcf-example.png": "DDOs cycle MCF example.png",
  "fsdogma-restyled.png": "FSdogma-restyled.png",
  "phd-double-diamond.png": path.join(
    "original-drawio-diagrams",
    "01-complete-phd-double-diamond.png",
  ),
  "phd-perceived-research-process.png": path.join(
    "original-drawio-diagrams",
    "02-perceived-research-process.png",
  ),
  "phd-divergence-to-perfection.png": path.join(
    "original-drawio-diagrams",
    "03-divergence-to-perfection.png",
  ),
  "phd-fail-to-converge.png": path.join(
    "original-drawio-diagrams",
    "04-fail-to-converge.png",
  ),
};

interface WritingImageRouteProps {
  params: {
    image: string;
  };
}

export async function GET(
  _request: Request,
  { params }: WritingImageRouteProps,
) {
  const imagePath = WRITING_IMAGES[params.image];

  if (!imagePath) {
    return new NextResponse("Not found", { status: 404 });
  }

  const file = await readFile(
    path.join(process.cwd(), "app", "writings", imagePath),
  );

  return new NextResponse(file, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "image/png",
    },
  });
}

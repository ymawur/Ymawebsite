import { NextResponse } from "next/server";

async function renderPdfFromHtml(html: string): Promise<Uint8Array> {
  return new TextEncoder().encode(html);
}

export async function POST(request: Request): Promise<NextResponse> {
  const { html } = (await request.json()) as { html?: string };

  if (!html) {
    return NextResponse.json({ error: "Missing html in request body." }, { status: 400 });
  }

  const pdfBytes = await renderPdfFromHtml(html);
  const pdfBytesCopy = Uint8Array.from(pdfBytes);
  const pdfBlob = new Blob([pdfBytesCopy], { type: "application/pdf" });

  return new NextResponse(pdfBlob, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="export.pdf"',
    },
  });
}

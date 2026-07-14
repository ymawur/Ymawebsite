export type { Writing, WritingSection } from "@/data/writings";
export { getAllWritings, getWritingBySlug } from "@/data/writings";

import type { Writing } from "@/data/writings";

export function getWritingPath(writing: Writing) {
  return writing.path ?? `/writings/${writing.slug}`;
}

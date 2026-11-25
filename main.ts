import { writeFileSync, mkdirSync } from "node:fs";

const LINE = "You handed me the deadline at 9, a laptop, and one job: ship it. I installed the library twice, imported it once, and the build log just wrote: 'left-pad-2: not found, never existed, stop asking.'";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(LINE);

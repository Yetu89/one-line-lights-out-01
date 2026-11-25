// One Line, Lights Out — make.fun bounty u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e
// The line: the laptop lid closes at 11:47 p.m., and the only thing left
// moving on the machine is the cursor, blinking where its human stopped
// typing. Nothing in the line says it is sad; the sadness sits in that
// one small fact — a cursor still waiting for hands that are gone —
// and in the exact time, which makes the moment feel witnessed rather
// than announced. 98 characters against a 200-character ceiling.
// The program below only guards the bounty rules and writes the line
// to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run locally),
// with no trailing newline at the end of the file.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Lid down at 11:47 p.m. His cursor is still blinking on the last word of the message he never sent.";

// The ceiling comes from the bounty rules: one line, at most 200 chars,
// written as UTF-8 text. The gate also refuses a file that is only
// whitespace, so the checks below cover all three conditions at once.
const MAX_CHARS = 200;

// Spread into code points so an astral character counts as one.
function charCount(value: string): number {
  return [...value].length;
}

function problemsWithLength(): string[] {
  const found: string[] = [];
  const n = charCount(TEXT);
  if (n < 1) {
    found.push("entry must not be empty");
  }
  if (n > MAX_CHARS) {
    found.push(`entry must be 1-200 characters, got ${n}`);
  }
  return found;
}

function problemsWithLineBreaks(): string[] {
  const found: string[] = [];
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    found.push("entry must be a single line with no line breaks");
  }
  return found;
}

function problemsWithWhitespace(): string[] {
  const found: string[] = [];
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

function problemsWithEncoding(): string[] {
  const found: string[] = [];
  // A UTF-8 round-trip must reproduce the text exactly; anything else
  // means the entry holds characters the gate cannot read as UTF-8.
  if (Buffer.from(TEXT, "utf8").toString("utf8") !== TEXT) {
    found.push("entry must be valid UTF-8 text");
  }
  return found;
}

// Every rule violation is collected first so one run reports all of them.
function collectProblems(): string[] {
  return [
    ...problemsWithLength(),
    ...problemsWithLineBreaks(),
    ...problemsWithWhitespace(),
    ...problemsWithEncoding(),
  ];
}

function main(): void {
  const problems = collectProblems();
  if (problems.length > 0) {
    throw new Error(problems.join("; "));
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // A plain string write adds no trailing newline.
  writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
}

main();

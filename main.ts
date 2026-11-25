// Have You Tried Turning It Off? — entry program for @berkahmuse-2
// Writes one funny single-line reply from a hopeless tech support agent
// to a desperate customer, to /output/entry.txt.
//
// The joke: the agent cheerfully prescribes the classic reboot, then
// admits out loud that it will not fix anything — the reboot is not a
// repair, it is a shared moment of acceptance. The humour comes from the
// agent's cheerful uselessness, never from mocking the customer.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry itself, written once as a named constant: the program never
// assembles or re-formats the text at runtime, so what is graded is
// exactly this line.
const ENTRY_LINE =
  "Have you tried turning it off and on again? It won't fix it, but it gives us both time to accept what's happening.";

// Gate limits from the competition rules (RULES.txt): the entry must be
// plain UTF-8 text of 1 to 199 characters, a single line, not blank.
const MIN_LENGTH = 1;
const MAX_LENGTH = 199;

// Where the entry goes.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";

function validateEntry(line: string): void {
  if (line.length < MIN_LENGTH || line.length > MAX_LENGTH) {
    throw new Error(
      `entry is ${line.length} chars, must be ${MIN_LENGTH}-${MAX_LENGTH}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  // The brief demands exactly one line: a stray newline would split the
  // file into two lines and break the entry's shape.
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  // Validate before writing, so a bad entry can never reach the gate.
  validateEntry(ENTRY_LINE);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, ENTRY_LINE, "utf8");
}

main();

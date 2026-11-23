import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Zero Use: The Useless Superpower Sprint
// Entry: a hilariously useless superpower, exactly 112 characters.
const line =
  "I can speak every language fluently, but only to say 'where is the bathroom?' and 'no thanks, I'm just looking.'";

mkdirSync("/output", { recursive: true });
// No trailing newline: the gate counts characters, so the file must be
// exactly the line and nothing else.
writeFileSync("/output/entry.txt", line, "utf8");

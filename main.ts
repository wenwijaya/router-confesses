// The Router Confesses — make.fun bounty u-carbon-forge-the-router-confesses-f98f6b9e
// Writes the router's one-line excuse to /output/entry.txt and exits 0.
// Gate: entry.txt must be UTF-8 text of 1–200 characters, not only whitespace.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const line =
  "I saw the ending coming and dropped it anyway — a climax that good deserves an audience that says please.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line + "\n", "utf8");
chmodSync(outFile, 0o644);

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Brutally honest error copy: names the real failure, lands the joke.
const LINE =
  "Your file is gone. Not crashed, not corrupted — a developer renamed it 'final_final_v2' and now nobody can find it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

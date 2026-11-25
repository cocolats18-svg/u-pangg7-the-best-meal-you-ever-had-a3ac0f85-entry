// The Best Meal You Ever Had — u-pangg7-the-best-meal-you-ever-had-a3ac0f85
// Writes one sentence (<= 200 chars) about the best meal ever had to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "Past midnight at a plastic-stool warung in Yogyakarta, I ate soto ayam so hot the broth fogged my glasses, and I kept going until the spoon scraped the empty bowl.";

if (sentence.length > 200 || sentence.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${sentence.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
console.log(sentence);
console.log(`chars: ${sentence.length}`);

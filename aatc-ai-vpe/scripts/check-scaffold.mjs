import { existsSync } from "node:fs";
const needed = ["AGENTS.md", "DEVELOPMENT_PLAN.md", "docs/SRS.md", "docs/TEST_STRATEGY.md", ".env.example", ".gitignore", "appsscript.json"];
const missing = needed.filter(p => !existsSync(p));
if (missing.length) { console.error("Missing:", missing.join(", ")); process.exitCode = 1; }
else console.log("Scaffold checks passed.");

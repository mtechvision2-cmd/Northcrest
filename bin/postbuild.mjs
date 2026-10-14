// Assembles the standalone server bundle after `next build`.
// Only the z.ai sandbox (and self-hosted servers) use output: "standalone".
// On Netlify the standalone folder does not exist, so this is a no-op.
import { existsSync, cpSync } from "node:fs";

const standalone = ".next/standalone";

if (existsSync(standalone)) {
  cpSync(".next/static", `${standalone}/.next/static`, { recursive: true });
  cpSync("public", `${standalone}/public`, { recursive: true });
  console.log("[postbuild] standalone bundle assembled");
} else {
  console.log("[postbuild] no standalone output detected, skipping");
}

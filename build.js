import esbuild from "esbuild";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function buildPackage(entryPoint, outfile) {
  esbuild
    .build({
      entryPoints: [entryPoint],
      bundle: true,
      outfile: outfile,
      platform: "browser",
      target: "es2015",
      sourcemap: false,
      format: "esm",
    })
    .catch(() => process.exit(1));
}

buildPackage(
  path.resolve(__dirname, "src/index.js"),
  path.resolve(__dirname, "dist/index.js")
);

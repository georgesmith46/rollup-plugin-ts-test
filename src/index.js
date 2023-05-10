import { rollup } from "rollup";
import ts from "rollup-plugin-ts";

export const build = async () => {
  await rollup({
    input: "src/index.js",
    plugins: [
      ts({
        transpiler: "babel",
      }),
    ],
  });
};

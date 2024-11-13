import { createRequire } from "module";
const require = createRequire(import.meta.url);

import("ignore-styles");

import("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
  extensions: [".js", ".jsx", ".mjs"],
});

import "./server.js";

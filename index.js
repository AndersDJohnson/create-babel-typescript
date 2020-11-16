#!/usr/bin/env node

const create = require("base-create");

create({
  dependencies: ["@babel/runtime"],
  devDependencies: [
    "@babel/core",
    "@babel/cli",
    "@babel/node",
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/plugin-transform-runtime",
    "typescript",
    "@andersdjohnson/tsconfig",
  ],
  package: {
    main: "dist/index.js",
    files: ["dist"],
    types: "dist/index.d.ts",
    keywords: ["create-babel-typescript"],
    scripts: {
      start: "node .",
      build: "babel -x .ts,.tsx src --out-dir dist",
      "build:watch": "npm run build -- --watch",
      "build:types": "tsc --emitDeclarationOnly",
      "build:types:watch": "npm run build:types -- --watch",
    },
  },
  files: [
    {
      path: "babel.config.json",
      contents: {
        presets: ["@babel/preset-env", "@babel/preset-typescript"],
        plugins: ["@babel/plugin-transform-runtime"],
        sourceMap: true,
      },
    },
    {
      path: "tsconfig.json",
      contents: {
        extends: "@andersdjohnson/tsconfig",
        include: ["src"],
        compilerOptions: {
          outDir: "dist",
          target: "esnext",
        },
      },
    },
    "src/index.ts",
  ],
});

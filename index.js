#!/usr/bin/env node

const create = require("base-create");

create("babel-typescript", {
  dependencies: ["@babel/runtime"],
  devDependencies: [
    "@babel/core",
    "@babel/cli",
    "@babel/node",
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/plugin-transform-runtime",
    "typescript"
  ],
  package: {
    main: "dist/index.js",
    keywords: ["create-babel-typescript"],
    scripts: {
      start: "node .",
      build: "babel -x .ts,.tsx src --out-dir dist",
      "build:watch": "npm run build -- --watch",
    },
  },
  files: [
    {
      path: "babel.config.json",
      contents: {
        "presets": ["@babel/preset-env", "@babel/preset-typescript"],
        "plugins": ["@babel/plugin-transform-runtime"]
      }
    },
    "src/index.ts"
  ]
});

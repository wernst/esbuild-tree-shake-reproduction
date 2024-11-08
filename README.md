# Esbuild Tree Shake Reproduction

This repository contains a small test of Esbuild's tree shake and bundling functionality. A dependent library contains code that is incomaptible with the esbuild target `es2015` (notably bigint). Although no bigint code is ever imported (importing only `doNothing`), the build step fails because bigint is being added to the bundle. Info on esbuild treeshaking here: https://esbuild.github.io/api/#tree-shaking

To reproduce, run: `node ./build.js`

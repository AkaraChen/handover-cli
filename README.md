# handover-cli

[简体中文](./README-zh-CN.md)

What? You don't want to hand over the code to the client? Use this tool!

## Features

handover-cli provides a solution to reduce the quality of your code without breaking the robustness of the project itself, so that you can hand over the code better.

First of all, because of the existence of excellent open source ecosystems such as prettier/ast-grep, this tool may support all languages used in your project, whether it is backend, frontend (including frameworks), and now it can do:

1. Format all source code with random rules
2. Delete all comments
3. Delete all console.log
4. Delete all tool configurations related to code quality
5. Delete the lockfile of the package manager
6. Delete test code
7. Delete all git records
8. Provide codemod tips to help you "better" hand over

## TODO

LSP may be introduced later to complete certain refactoring using LSP, such as:

1. Change English variable names to Chinese Pinyin

## Install

```bash
# currently not available
npm install -g handover-cli
```

## Usage

```bash
handover -y
```

If you want to dry run, you can:

```bash
handover
```

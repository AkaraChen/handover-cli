import { type File, FileType } from "./interface";

export const files: File[] = [
	{
		label: "lefthook",
		glob: [".lefthook.{yml,yaml,toml,json}", "lefthook.{yml,yaml,toml,json}"],
		type: FileType.githook,
	},
	{
		label: "eslint",
		glob: [
			".eslintrc.{json,js,cjs,yaml,yml,json}",
			"eslint.config.{js,mjs,cjs}",
			".eslintignore",
		],
		type: FileType.lint,
	},
	{
		label: "prettier",
		glob: [
			".prettierrc",
			".prettierrc.{json,yaml,yml,json5,js,mjs,cjs,toml}",
			"prettier.config.{js,mjs,cjs}",
			".prettierignore",
		],
		type: FileType.formatter,
	},
	{
		label: "nodejs lock file",
		glob: ["yarn.lock", "pnpm-lock.yaml", "package-lock.json"],
		type: FileType.lockfile,
	},
	{
		label: "cargo lock file",
		glob: ["Cargo.lock"],
		type: FileType.lockfile,
	},
	{
		label: "go mod",
		glob: ["go.mod"],
		type: FileType.lockfile,
	},
	{
		label: "docker",
		glob: ["Dockerfile", "docker-compose.yml"],
		type: FileType.deployment,
	},
	{
		label: "php composer",
		glob: ["composer.lock"],
		type: FileType.lockfile,
	},
	{
		label: "ruby gem",
		glob: ["Gemfile.lock"],
		type: FileType.lockfile,
	},
	{
		label: "python pip",
		glob: ["requirements.txt"],
		type: FileType.lockfile,
	},
	{
		label: "makefile",
		glob: ["Makefile"],
		type: FileType.taskrunner,
	},
	{
		label: "justfile",
		glob: ["justfile"],
		type: FileType.taskrunner,
	},
	{
		label: "husky",
		glob: [".husky"],
		type: FileType.githook,
	},
	{
		label: "lint-staged",
		glob: ["lint-staged.config.{js,cjs,mjs}"],
		type: FileType.githook,
	},
	{
		label: "commitlint",
		glob: ["commitlint.config.{js,cjs,mjs}"],
		type: FileType.githook,
	},
	{
		label: "editorconfig",
		glob: [".editorconfig"],
		type: FileType.formatter,
	},
	{
		label: "biome",
		glob: ["biome.json"],
		type: FileType.deployment,
	},
	{
		label: "clippy",
		glob: ["clippy.toml"],
		type: FileType.lint,
	},
	{
		label: "rustfmt",
		glob: ["rustfmt.toml"],
		type: FileType.formatter,
	},
	{
		label: "markdownlint",
		glob: [".markdownlint.{json,yaml,yml}"],
		type: FileType.lint,
	},
	{
		label: "remark",
		glob: [".remarkrc.{js,cjs,mjs}"],
		type: FileType.lint,
	},
	{
		label: "stylelint",
		glob: ["stylelint.config.{js,cjs,mjs}"],
		type: FileType.lint,
	},
];

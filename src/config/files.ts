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
		],
		type: FileType.lint,
	},
	{
		label: "prettier",
		glob: [
			".prettierrc",
			".prettierrc.{json,yaml,yml,json5,js,mjs,cjs,toml}",
			"prettier.config.{js,mjs,cjs}",
		],
		type: FileType.formatter,
	},
	{
		label: "nodejs lock file",
		glob: ["yarn.lock", "pnpm-lock.yaml", "package-lock.json"],
		type: FileType.lockfile,
	},
];

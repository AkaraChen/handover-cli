import type { IAstRule, ILanguage } from "../../interface";

const console: IAstRule = {
	label: "Remove all console",
	pattern: "console.$F($$$ARGS)",
	rewrite: "",
};

export const js: ILanguage = {
	label: "javascript",
	glob: "**/*.js",
	rules: [console],
};

export const ts: ILanguage = {
	label: "typescript",
	glob: "**/*.ts",
	rules: [console],
};

export const jsx: ILanguage = {
	label: "jsx",
	glob: "**/*.jsx",
	rules: [console],
};

export const tsx: ILanguage = {
	label: "tsx",
	glob: "**/*.tsx",
	rules: [console],
};

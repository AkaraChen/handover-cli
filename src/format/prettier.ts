import consola from "consola";
import { type Config, format } from "prettier";
import type { IFormatter } from "./interface";

export const base: IFormatter = {
	extension: [
		".js",
		".jsx",
		".ts",
		".tsx",
		".css",
		".scss",
		".json",
		".md",
		".html",
		".vue",
		".yaml",
		".yml",
		".graphql",
		".mdx",
		".svelte",
	],
	format(file, config) {
		return format(file, config);
	},
};

function createLanguageFormatter(options: {
	extension: string[];
	config: Config;
}): IFormatter {
	return {
		extension: options.extension,
		async format(file: string, config: Config) {
			return await format(file, {
				...config,
				...options.config,
			});
		},
	};
}

export const java = createLanguageFormatter({
	extension: [".java"],
	config: {
		plugins: ["prettier-plugin-java"],
	},
});

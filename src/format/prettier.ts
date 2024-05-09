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
	config: (() => Promise<Config>) | Config;
}): IFormatter {
	let languageConfig: Config;
	return {
		extension: options.extension,
		async format(file: string, config: Config) {
			if (!languageConfig) {
				languageConfig =
					typeof options.config === "function"
						? await options.config()
						: options.config;
			}
			return await format(file, {
				...config,
				...languageConfig,
			});
		},
	};
}

export const java = createLanguageFormatter({
	extension: [".java"],
	config: {
		plugins: [
			// @ts-expect-error
			await import("prettier-plugin-java"),
		],
	},
});

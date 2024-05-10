import { type Config, format } from "prettier";
import type { IFormatter } from "./interface";
import { apply } from "./models/apply";
import type { ITextModel } from "./models/interface";
import * as models from "./models/spec";

function createLanguageFormatter(options: {
	extension: string[];
	config?: Config;
	models?: ITextModel[];
}): IFormatter {
	return {
		extension: options.extension,
		async format(file: string, config: Config) {
			return await format(file, {
				...config,
				...options.config,
			}).then((result) => apply(result, options.models ?? []));
		},
	};
}

export const javascript = createLanguageFormatter({
	extension: [".js", ".jsx", ".ts", ".tsx"],
	models: [models.randomEmptyLine, models.randomSpace],
});

export const css = createLanguageFormatter({
	extension: [".css", ".scss", ".less"],
	models: [models.randomEmptyLine, models.randomSpace],
});

export const sass = createLanguageFormatter({
	extension: [".scss"],
	models: [models.randomEmptyLine],
});

export const html = createLanguageFormatter({
	extension: [".html"],
	models: [models.randomEmptyLine, models.randomSpace],
});

export const json = createLanguageFormatter({
	extension: [".json"],
	models: [models.randomEmptyLine, models.randomSpace],
});

export const markdown = createLanguageFormatter({
	extension: [".md", ".mdx"],
	models: [models.randomEmptyLine, models.randomSpace],
});

export const vue = createLanguageFormatter({
	extension: [".vue"],
	models: [models.randomEmptyLine, models.randomSpace],
});

export const graphql = createLanguageFormatter({
	extension: [".graphql"],
	models: [models.randomEmptyLine, models.randomSpace],
});

export const yaml = createLanguageFormatter({
	extension: [".yaml", ".yml"],
	models: [models.randomEmptyLine],
});

export const svelte = createLanguageFormatter({
	extension: [".svelte"],
	models: [models.randomEmptyLine, models.randomSpace],
});

export const java = createLanguageFormatter({
	extension: [".java"],
	config: {
		plugins: ["prettier-plugin-java"],
	},
	models: [models.randomEmptyLine, models.randomSpace],
});

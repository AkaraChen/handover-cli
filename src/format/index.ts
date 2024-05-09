import fs from "node:fs/promises";
import type { Command } from "@/command";
import consola from "consola";
import { glob } from "~/glob";
import type { IFormatter } from "./interface";
import * as prettier from "./prettier";
import { getRandomConfig } from "./random";

const formatters = [...Object.values(prettier)];

const supportedExtensions: string[] = [];
const formatterMap = new Map<string, IFormatter>();

for (const formatter of formatters) {
	supportedExtensions.push(...formatter.extension);
	for (const extension of formatter.extension) {
		formatterMap.set(extension, formatter);
	}
}

function getFormatter(extension: string) {
	return formatterMap.get(extension);
}

export const format: Command = async (ctx) => {
	for (const extension of supportedExtensions) {
		const pattern = `**/*${extension}`;
		const entries = await glob({
			patterns: pattern,
			options: {
				cwd: ctx.cwd,
			},
			ignore: ctx.ignore,
		});
		if (entries.length > 0) {
			consola.info(`${extension} detected, formatting...`);
			const formatter = getFormatter(extension);
			if (ctx.dryRun) {
				consola.info(`Dry run: detected ${entries.length} files`);
			} else {
				for (const entry of entries.filter(ctx.ignore.createFilter())) {
					const content = await formatter?.format(
						await fs.readFile(entry, "utf-8"),
						{
							...getRandomConfig(),
							filepath: entry,
						},
					);
					await fs.writeFile(entry, content as string);
				}
				consola.success(`Formatted ${entries.length} files!`);
			}
		}
	}
};

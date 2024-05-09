import type { Command } from "@/command";
import consola from "consola";
import { rimraf } from "rimraf";
import { glob } from "~/glob";
import { files } from "./files";

export const config: Command = async (ctx) => {
	for (const file of files) {
		const entries = await glob({
			patterns: file.glob,
			ignore: ctx.ignore,
			options: {
				cwd: ctx.cwd,
			},
		});
		if (entries.length > 0) {
			const prompt = await consola.prompt(
				`${file.label} detected, remove it?`,
				{
					type: "confirm",
				},
			);
			if (prompt) {
				if (ctx.dryRun) {
					consola.info(`Dry run: remove ${entries}`);
				} else {
					await rimraf(entries);
					if (file.removeFromGit) {
						// TODO: use `git rm`
					}
				}
			}
		}
	}
};

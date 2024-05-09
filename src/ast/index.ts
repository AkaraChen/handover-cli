import type { Command } from "@/command";
import consola from "consola";
import { glob } from "~/glob";
import { ensureAstGrep, exec } from "./exec";
import * as langs from "./languages";

export const ast: Command = async (ctx) => {
	if (!(await ensureAstGrep())) {
		consola.log("ast-grep not found, please install it first.");
		return;
	}
	for (const lang of Object.values(langs)) {
		const entries = await glob({
			patterns: lang.glob,
			ignore: ctx.ignore,
			options: {
				cwd: ctx.cwd,
			},
		});
		if (entries.length > 0) {
			consola.info(`Running ${lang.label} rule`);
			for (const rule of lang.rules) {
				if (ctx.dryRun) {
					consola.info(`Would run rule: ${rule.label}`);
					continue;
				}
				try {
					await exec(rule, lang.label);
					consola.info(`Ran rule: ${rule.label}`);
				} catch (error) {
					consola.error(`Error running rule: ${rule.label}`);
					consola.error(error);
				}
			}
		}
	}
};

import consola from "consola";
import { execa, execaCommand } from "execa";
import type { IAstRule } from "./interface";

const $ = execa({
	shell: process.platform === "darwin" ? "/bin/zsh" : true,
});

export async function ensureAstGrep() {
	async function which() {
		try {
			await $`which sg`;
			return true;
		} catch (error) {
			return false;
		}
	}
	const hasAstGrep = await which();
	if (hasAstGrep) return true;
	const install = consola.prompt(
		"ast-grep not found, would you want to install it?",
	);
	if (!install) return false;
	const command = await consola.prompt(
		"Which install method do you want to use?",
		{
			type: "select",
			options: [
				{
					label: "brew",
					value: "brew install ast-grep",
				},
				{
					label: "macports",
					value: "sudo port install ast-grep",
				},
				{
					label: "cargo",
					value: "cargo install ast-grep --locked",
				},
				{
					label: "npm",
					value: "npm i @ast-grep/cli -g",
				},
				{
					label: "yarn",
					value: "yarn add @ast-grep/cli -g",
				},
				{
					label: "pnpm",
					value: "pnpm i @ast-grep/cli -g",
				},
				{
					label: "pip",
					value: "pip install ast-grep-cli",
				},
				// TODO: fix this type when consola is fixed
			] as unknown as string[],
		},
	);
	try {
		await $`${command}`;
		return true;
	} catch (error) {
		consola.error(error);
		return false;
	}
}

export async function exec(rule: IAstRule, lang: string) {
	try {
		// await $`sg run --pattern ${rule.pattern} --rewrite ${rule.rewrite} --lang ${lang}`;
		await execaCommand(
			`sg run --pattern ${rule.pattern} --rewrite ${
				rule.rewrite || "' '"
			} --lang ${lang}`,
		);
	} catch (error) {
		consola.error(error);
	}
}

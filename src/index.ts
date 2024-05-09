import fs from "node:fs/promises";
import path from "node:path";
import consola from "consola";
import ignore from "ignore";
import { ast } from "./ast";
import type { Command, IContext } from "./command";
import { config } from "./config";
import { format } from "./format";

async function getContext(): Promise<IContext> {
	const cwd = process.cwd();
	const gitignore = await fs.readFile(path.join(cwd, ".gitignore"), "utf-8");
	return {
		cwd,
		dryRun: process.argv[2] !== "-y",
		ignore: ignore().add(gitignore.split("\n")),
	};
}

function throwWithConsola(e: unknown) {
	consola.error(e);
	process.exit(0);
}

const context: IContext = await getContext();

async function tryWithStep(desc: string, command: Command) {
	try {
		const result = await consola.prompt(`${desc}?`, {
			type: "confirm",
		});
		if (result) await command(context);
	} catch (e) {
		throwWithConsola(e);
	}
}

await tryWithStep("Change file format", format);
await tryWithStep("Remove config file", config);
await tryWithStep("Transform AST", ast);

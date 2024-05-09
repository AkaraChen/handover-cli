import type { Ignore } from "ignore";

export interface IContext {
	cwd: string;
	dryRun: boolean;
	ignore: Ignore;
}

export type Command = (ctx: IContext) => Promise<void>;

import fg, { type Options } from "fast-glob";
import type { Ignore } from "ignore";

export interface GlobOptions {
	ignore: Ignore;
	patterns: string | string[];
	options: Options;
}

export async function glob(opts: GlobOptions) {
	const entries = await fg(opts.patterns, opts.options);
	return entries.filter(opts.ignore.createFilter());
}

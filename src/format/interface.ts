import type { Config as IFormatterConfig } from "prettier";

export interface IFormatter {
	extension: string[];
	format(file: string, config: IFormatterConfig): Promise<unknown>;
}

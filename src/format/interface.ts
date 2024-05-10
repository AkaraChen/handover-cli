import type { Config as IFormatterConfig } from "prettier";
import type { ITextModel } from "./models/interface";

export interface IFormatter {
	extension: string[];
	format(file: string, config: IFormatterConfig): Promise<unknown>;
	models?: ITextModel[];
}

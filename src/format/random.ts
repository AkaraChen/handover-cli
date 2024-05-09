import type { Config } from "prettier";
import { range } from "radash";

function pick<T>(array: Array<T>) {
	return array[Math.floor(Math.random() * array.length)] as T;
}

const booleans = [true, false];
const printWidths = [...range(50, 200)];
const tabWidths = [...range(2, 4)];
const quoteProps = ["as-needed", "consistent", "preserve"] as Array<
	Config["quoteProps"]
>;
const trallingCommas = ["all", "es5", "none"] as Array<Config["trailingComma"]>;
const arrowParens = ["always", "avoid"] as Array<Config["arrowParens"]>;
const proseWraps = ["always", "never", "preserve"] as Array<
	Config["proseWrap"]
>;
const htmlWhitespaceSensitivity = ["css", "ignore", "strict"] as Array<
	Config["htmlWhitespaceSensitivity"]
>;
const endofLines = ["auto", "cr", "crlf", "lf"] as Array<Config["endOfLine"]>;
const embeddedLanguageFormattings = ["auto", "off"] as Array<
	Config["embeddedLanguageFormatting"]
>;

export function getRandomConfig(): Config {
	return {
		printWidth: pick(printWidths),
		tabWidth: pick(tabWidths),
		useTabs: pick(booleans),
		semi: pick(booleans),
		singleQuote: pick(booleans),
		quoteProps: pick(quoteProps),
		jsxSingleQuote: pick(booleans),
		trailingComma: pick(trallingCommas),
		bracketSpacing: pick(booleans),
		bracketSameLine: pick(booleans),
		arrowParens: pick(arrowParens),
		proseWrap: pick(proseWraps),
		htmlWhitespaceSensitivity: pick(htmlWhitespaceSensitivity),
		vueIndentScriptAndStyle: pick(booleans),
		endOfLine: pick(endofLines),
		embeddedLanguageFormatting: pick(embeddedLanguageFormattings),
		singleAttributePerLine: pick(booleans),
	};
}

import type { ITextModel } from "./interface";

const removeSpace = (text: string) => text.trim();

export const randomSpace: ITextModel = {
	label: "Random Space",
	transform: (text) => {
		console.log("randomSpace");
		const chars = ["{", "}", "[", "]", "(", ")", "<", ">"];
		const lines = text.split("\n");
		const res = lines.map((line) => {
			const trimed = removeSpace(line);
			if (chars.includes(trimed)) {
				const indent = Math.floor(Math.random() * 4);
				return " ".repeat(indent) + trimed;
			}
			return line; // Return the original line if condition is not met
		});
		return res.join("\n");
	},
};

export const randomEmptyLine: ITextModel = {
	label: "Random Empty Line",
	transform: (text) => {
		console.log("randomEmptyLine");
		const lines = text.split("\n");
		const res = lines
			.reduce((acc, line) => {
				const trimmed = removeSpace(line);
				if (trimmed !== "") {
					acc.push(line);
				}
				return acc;
			}, [] as string[])
			.reduce((acc, line) => {
				if (Math.random() < 1 / 3) {
					console.log("randomEmptyLine new line");
					return acc.concat(`\n${line}`);
				}
				return acc.concat(line); // Return the original line if condition is not met
			}, [] as string[]);
		return res.join("\n");
	},
};

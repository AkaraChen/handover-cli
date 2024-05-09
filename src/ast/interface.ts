export interface IAstRule {
	label: string;
	pattern: string;
	rewrite: string;
}

export interface ILanguage {
	label: string;
	rules: IAstRule[];
	glob: string;
}

export interface ITextModel {
	label: string;
	transform: (text: string) => string;
}

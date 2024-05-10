import type { ITextModel } from "./interface";

export const apply = (text: string, models: ITextModel[]): string => {
	return models.reduce((acc, model) => {
		return model.transform(acc);
	}, text);
};

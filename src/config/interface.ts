export enum FileType {
	githook = 0,
	lint = 1,
	formatter = 2,
	lockfile = 3,
	deployment = 4,
	taskrunner = 5,
}

export interface File {
	label: string;
	glob: string | string[];
	removeFromGit?: boolean;
	type: FileType;
}

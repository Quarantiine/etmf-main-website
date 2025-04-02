export interface ProgramListTypes {
	id: string;
	title: string;
	subTitle: string;
	createdBy: string;
	description: {
		text: string;
	}[];
	image: string;
	statementSection: {
		title: string;
		paragraphs: {
			textHeader: string;
			text: string;
		}[];
	}[];
}

export interface StatementTypes {
	title: string;
	paragraphs: {
		textHeader: string;
		text: string;
	}[];
}

export interface ParagraphsTypes {
	textHeader: string;
	text: string;
}

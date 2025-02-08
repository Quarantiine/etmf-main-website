export interface ResourcesTypes {
	title: string;
	subTitle: string;
	link: string;
	enableBg: boolean;
	content: {
		title: string;
		image: string;
		imageCollage: {
			src: string;
		}[];
		link: string;
		mediaType: string;
		important: boolean;
	}[];
}

export interface ContentTypes {
	title: string;
	image: string;
	imageCollage: {
		src: string;
	}[];
	link: string;
	mediaType: string;
	important: boolean;
}

export interface BlogResourcesTypes {
	title: string;
	subTitle: string;
	link: string;
	enableBg: boolean;
	content: {
		title: string;
		image: string;
		imageCollage: {
			src: string;
		}[];
		link: string;
		mediaType: string;
	}[];
}

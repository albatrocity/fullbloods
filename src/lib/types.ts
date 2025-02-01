import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';

export type Show = {
	summary?: string;
	start: Date;
	end?: Date;
	description?: string;
	location?: string;
	url: {
		val?: string;
	};
	formatted_start: string;
	uid: string;
};

export type ImageData = {
	default: EnhancedImgAttributes['src'];
};

export type Release = {
	title: string;
	artist: string;
	date: string;
	slug: string;
	published: boolean;
	image: string;
	release_date: string;
	spotify: string;
	buy: string;
	apm: string;
	youtube: string;
	bandcamp: string;
	highdive: string;
	soundcloud_embed: string;
	imageData: ImageData | null;
};

export type Track = {
	title: string;
	album: string;
	track: number;
	credits: { name: string; role: string }[];
};

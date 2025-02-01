import type { Release, ImageData } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const paths = import.meta.glob(`/src/releases/*.md`, { eager: true });

	const imageModules: Record<string, ImageData> = import.meta.glob(
		'$lib/assets/releases/*.{jpeg,jpg,webp}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);

	let releases = [];

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Release, 'slug'>;
			const imgKey = Object.keys(imageModules).find((key) => key.includes(slug));
			const imageData = imgKey ? imageModules[imgKey] : null;

			const release = { ...metadata, slug, imageData } satisfies Release;
			if (release.published) releases.push(release);
		}
	}

	releases = releases.sort(
		(first, second) =>
			new Date(second.release_date).getTime() - new Date(first.release_date).getTime()
	);

	return { releases };
};

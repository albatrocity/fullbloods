import type { Config } from '@netlify/functions'

export default async (req: Request) => {
	const { next_run } = await req.json()
	const URL = Netlify.env.get('BUILD_HOOK_URL')
	if (!URL) {
		throw new Error('BUILD_HOOK_URL is not set')
	}

	await fetch(URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	})

	console.log('Triggered build hook. Next invocation at:', next_run)
}

export const config: Config = {
	schedule: '0 12 * * *',
}

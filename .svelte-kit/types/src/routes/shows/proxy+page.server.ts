// @ts-nocheck
import ical from 'ical';
import { isAfter, isSameDay, isBefore, format } from 'date-fns';

import type { PageServerLoad } from './$types';

import { PUBLIC_CAL_URI } from '$env/static/public';
import type { Show } from '$lib/types';

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => {
	const events: Show[] = [];
	if (!PUBLIC_CAL_URI) {
		return { events };
	}

	const icsRes = await fetch(PUBLIC_CAL_URI, {
		mode: 'cors',
		method: 'GET',
		headers: {
			'User-Agent': 'Mozilla/5.0',
			Origin: 'localhost'
		}
	});
	const icsData = await icsRes.text();

	const data: ical.FullCalendar = ical.parseICS(icsData);

	for (const k in data) {
		if (data[k]) {
			const ev = data[k];
			if (ev.type == 'VEVENT' && ev.start) {
				if (isAfter(ev.start, new Date()) || isSameDay(ev.start, new Date())) {
					ev.formatted_start = format(ev.start, 'M/d h:mm a');
					events.push({
						summary: ev.summary,
						description: ev.description,
						location: ev.location,
						start: ev.start,
						formatted_start: ev.formatted_start,
						end: ev.end,
						url: {
							val: ev.url
						},
						uid: ev.uid!
					});
				}
			}
		}
	}
	const sorted = events.sort(function (a, b) {
		if (a.start && b.start) return isBefore(a.start, b.start) ? -1 : 1;
		return 0;
	});

	return {
		events: sorted
	};
};

export const prerender = false;

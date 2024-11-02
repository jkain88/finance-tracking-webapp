import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, cookies }) => {
	const token = url.searchParams.get('token');
	if (token !== null) {
		console.log('token');
		cookies.set('token', token, { path: '/' });
	}

	const tokenCookie = cookies.get('token');
	if (tokenCookie === undefined && url.pathname !== '/login') {
		// redirect to login page
		throw redirect(302, 'login');
	}

	if (tokenCookie && url.pathname !== '/dashboard') {
		// redirect to home page
		throw redirect(302, 'dashboard');
	}
	return {};
};

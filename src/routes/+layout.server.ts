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

	if (tokenCookie) {
		// redirect to home page
		const response = await fetch('http://localhost:8080/api/v1/user/me', {
			headers: {
				Authorization: tokenCookie
			}
		});
		const userData = await response.json();
		return {
			user: userData
		};
	}
	console.log('TOKEN COOKIE', cookies.get('token'));
	return {};
};

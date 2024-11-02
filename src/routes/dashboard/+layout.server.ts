import type { LayoutServerLoad } from '../$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const tokenCookie = cookies.get('token');
	if (tokenCookie) {
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
};

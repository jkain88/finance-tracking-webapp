import type { Actions } from './$types';
export const actions: Actions = {
	logout: async ({ cookies }) => {
		cookies.delete('token', { path: '/' });
		return {
			status: 302,
			headers: {
				location: '/login'
			}
		};
	}
} satisfies Actions;

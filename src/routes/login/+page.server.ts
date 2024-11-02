import type { Actions } from './$types';

export const actions = {
	default: async () => {
		const response = await fetch('http://localhost:8080/api/v1/auth/google');
		console.log(response);
		return {
			status: 200,
			body: {
				message: 'Form submitted'
			}
		};
	}
} satisfies Actions;

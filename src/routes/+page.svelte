<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Button>Login</Button>
<Button>Logout</Button>
<p>{data.user.email}</p>

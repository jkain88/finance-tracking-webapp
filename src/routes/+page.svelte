<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { PageData } from './$types';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Button>Login</Button>
<form method="POST" action="?/logout">
	<Button type="submit">Logout</Button>
</form>

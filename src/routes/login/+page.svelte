<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function handleSubmit() {
		window.location.href = 'http://localhost:8080/api/v1/auth/google';
	}
</script>

<h1>{data.data.title}</h1>

<Button type="submit" onclick={handleSubmit}>Login</Button>

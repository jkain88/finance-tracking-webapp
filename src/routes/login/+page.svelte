<script lang="ts">
	import { Icons } from '$lib/components/docs/icons/index.js';
	import Google from '$lib/components/docs/icons/google.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import Label from '$lib/components/ui/label/label.svelte';
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function handleSubmit(provider: string) {
		window.location.href = `http://localhost:8080/api/v1/auth/${provider}`;
	}
</script>

<div class="flex h-screen items-center justify-center">
	<div class="w-full max-w-xl">
		<h1 class="mb-10 text-center text-3xl font-semibold">Finance Tracking App</h1>
		<Card.Root class=" bg-black text-white">
			<Card.Header class="space-y-1">
				<Card.Title class="text-2xl">Login</Card.Title>
				<Card.Description>Choose the account you wish to login with.</Card.Description>
			</Card.Header>
			<Card.Content class="grid gap-4">
				<Button class="text-black" variant="outline">
					<Icons.gitHub class="mr-2 h-4 w-4" />
					GitHub
				</Button>
				<Button class="text-black" variant="outline" onclick={() => handleSubmit('google')}>
					<Icons.google class="mr-2 h-4 w-4 text-black" />
					Google
				</Button>
			</Card.Content>
		</Card.Root>
	</div>
</div>

import type { SvelteComponent } from 'svelte';
import Google from './google.svelte';
import Github from './github.svelte';

export type Icon = SvelteComponent;

export const Icons = {
	google: Google,
	gitHub: Github
};

import { SvelteComponent } from "svelte";
import { Writable, writable } from "svelte/store";

const app_store = {
    selected_lang: writable('en'),
    menu_open: writable(false),
    active_navigation: writable('home'),
    content_presenter: writable() as Writable<{ display_content(comp: typeof SvelteComponent): void}>
}

export { app_store };
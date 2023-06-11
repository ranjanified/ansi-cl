import { writable } from "svelte/store";

const app_store = {
    menu_open: writable(false)
}

export { app_store };
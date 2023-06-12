<script lang="ts" context="module">
</script>

<script lang="ts">
  import Paper from "@smui/paper";
  import type { SvelteComponent } from "svelte";
  import { app_store } from "$lib/store/app_store";
  
  export const display_content = (comp: typeof SvelteComponent) => {
    const menu_open = app_store.menu_open;
    menu_open.set(false);
    
    instance = comp;
  };
  
  let instance: typeof SvelteComponent;
</script>

<Paper elevation={5} class="content-presenter">
  <svelte:component this={instance} />
</Paper>

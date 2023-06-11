<script lang="ts">
    import Button from "@smui/button";
  import { app_store } from "$lib/store/app_store";
  import Drawer, { Header, Content, Title, Scrim } from "@smui/drawer";

  const menu_open = app_store.menu_open;
</script>

<Drawer variant="modal" fixed={false} bind:open={$menu_open}>
    <Header>
        <Title>Table of Contents</Title>
        <Button>Close</Button>
    </Header>
    <Content />
</Drawer>
<Scrim fixed={false} />

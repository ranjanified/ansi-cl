<script lang="ts">
  import Paper from "@smui/paper";
  import IconButton, { Icon } from "@smui/icon-button";
  import TopAppBar, { Row, Section } from "@smui/top-app-bar";
  import { app_store } from "$lib/store/app_store";

  const menu_open = app_store.menu_open;
  // let initialOff = false;
</script>

<header>
  <Paper elevation={5}>
    <TopAppBar variant="static">
      <Row>
        <Section>
          <IconButton
            class="material-icons"
            on:click={() => ($menu_open = !$menu_open)}
            toggle
            bind:pressed={$menu_open}
          >
            <Icon class="material-icons" on>close</Icon>
            <Icon class="material-icons">menu</Icon>
          </IconButton>
          <!-- {#if !$menu_open}
          {:else}
            <IconButton class="material-icons" on:click={() => $menu_open = !$menu_open}>close</IconButton>
          {/if} -->
        </Section>
        <Section>
          <slot name="header" />
        </Section>
      </Row>
    </TopAppBar>
  </Paper>
</header>

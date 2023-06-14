<script lang="ts">
  import Paper from "@smui/paper";
  import { app_store } from "$lib/store/app_store";
  import IconButton, { Icon } from "@smui/icon-button";
  import TopAppBar, { Row, Section } from "@smui/top-app-bar";
  import LanguageSwitcher from "$lib/lang-selector/LanguageSwitcher.svelte";

  const menu_open = app_store.menu_open;
  const active_navigation = app_store.active_navigation;
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
          <IconButton class="material-icons" on:click={() => $active_navigation = 'home'}>home</IconButton>
        </Section>
        <Section>
          <slot name="header" />
        </Section>
        <Section align="end">
          <LanguageSwitcher />
        </Section>
      </Row>
    </TopAppBar>
  </Paper>
</header>

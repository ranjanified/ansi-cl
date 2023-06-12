<script lang="ts">
  import { getContext, onMount } from "svelte";
  import Separator from "@smui/list";
  import List, { Item, Text } from "@smui/list";
  import { app_store } from "$lib/store/app_store";
  import Introduction from "$lib/pages/intro/Introduction.svelte";
  import Drawer, { Header, Content, Title, Scrim } from "@smui/drawer";
  import ContentPresenter from "$lib/presenter/ContentPresenter.svelte";
  import Syntax from "$lib/pages/syntax/Syntax.svelte";
  import type { Writable } from "svelte/store";
  import { component_map } from "$lib/store/comp_map";

  export let active_navigation = app_store.active_navigation;

  const menu_open = app_store.menu_open;
  let content_presenter = app_store.content_presenter;

  onMount(() => {
    if (!$active_navigation) {
      $active_navigation = "intro";
    }
  });

  content_presenter.subscribe((presenter) => {
    if(presenter && $active_navigation) {
        presenter.display_content(component_map[$active_navigation]);
    }
  })
</script>

<Drawer variant="modal" fixed={false} bind:open={$menu_open}>
  <Header>
    <Title>Table of Contents</Title>
  </Header>
  <Separator />
  <Content>
    <List>
      <Item
        activated={$active_navigation === "intro"}
        on:click={() => (
          ($active_navigation = "intro"),
          $content_presenter?.display_content(Introduction)
        )}
      >
        <Text>Introduction</Text>
      </Item>

      <Item
        activated={$active_navigation === "syntax"}
        on:click={() => (
          ($active_navigation = "syntax"),
          $content_presenter?.display_content(Syntax)
        )}
      >
        <Text>Syntax</Text>
      </Item>

      <Item
        activated={$active_navigation === "eval&compile"}
        on:click={() => ($active_navigation = "eval&compile")}
      >
        <Text>Evaluation and Compilation</Text>
      </Item>

      <Item
        activated={$active_navigation === "types&classes"}
        on:click={() => ($active_navigation = "types&classes")}
      >
        <Text>Types and Classes</Text>
      </Item>

      <Item
        activated={$active_navigation === "d&cflow"}
        on:click={() => ($active_navigation = "d&cflow")}
      >
        <Text>Data and Control Flow</Text>
      </Item>

      <Item
        activated={$active_navigation === "iteration"}
        on:click={() => ($active_navigation = "iteration")}
      >
        <Text>Iteration</Text>
      </Item>

      <Item
        activated={$active_navigation === "objects"}
        on:click={() => ($active_navigation = "objects")}
      >
        <Text>Objects</Text>
      </Item>

      <Item
        activated={$active_navigation === "structures"}
        on:click={() => ($active_navigation = "structures")}
      >
        <Text>Structures</Text>
      </Item>

      <Item
        activated={$active_navigation === "conditions"}
        on:click={() => ($active_navigation = "conditions")}
      >
        <Text>Conditions</Text>
      </Item>

      <Item
        activated={$active_navigation === "symbols"}
        on:click={() => ($active_navigation = "symbols")}
      >
        <Text>Symbols</Text>
      </Item>

      <Item
        activated={$active_navigation === "packages"}
        on:click={() => ($active_navigation = "packages")}
      >
        <Text>Packages</Text>
      </Item>

      <Item
        activated={$active_navigation === "numbers"}
        on:click={() => ($active_navigation = "numbers")}
      >
        <Text>Numbers</Text>
      </Item>

      <Item
        activated={$active_navigation === "characters"}
        on:click={() => ($active_navigation = "characters")}
      >
        <Text>Characters</Text>
      </Item>

      <Item
        activated={$active_navigation === "conses"}
        on:click={() => ($active_navigation = "conses")}
      >
        <Text>Conses</Text>
      </Item>

      <Item
        activated={$active_navigation === "arrays"}
        on:click={() => ($active_navigation = "arrays")}
      >
        <Text>Arrays</Text>
      </Item>

      <Item
        activated={$active_navigation === "strings"}
        on:click={() => ($active_navigation = "strings")}
      >
        <Text>Strings</Text>
      </Item>

      <Item
        activated={$active_navigation === "sequences"}
        on:click={() => ($active_navigation = "sequences")}
      >
        <Text>Sequences</Text>
      </Item>

      <Item
        activated={$active_navigation === "hash-tables"}
        on:click={() => ($active_navigation = "hash-tables")}
      >
        <Text>Hash Tables</Text>
      </Item>

      <Item
        activated={$active_navigation === "file-names"}
        on:click={() => ($active_navigation = "file-names")}
      >
        <Text>Filenames</Text>
      </Item>

      <Item
        activated={$active_navigation === "files"}
        on:click={() => ($active_navigation = "files")}
      >
        <Text>Files</Text>
      </Item>

      <Item
        activated={$active_navigation === "streams"}
        on:click={() => ($active_navigation = "streams")}
      >
        <Text>Streams</Text>
      </Item>

      <Item
        activated={$active_navigation === "printer"}
        on:click={() => ($active_navigation = "printer")}
      >
        <Text>Printer</Text>
      </Item>

      <Item
        activated={$active_navigation === "reader"}
        on:click={() => ($active_navigation = "reader")}
      >
        <Text>Reader</Text>
      </Item>

      <Item
        activated={$active_navigation === "sys-construction"}
        on:click={() => ($active_navigation = "sys-construction")}
      >
        <Text>System Construction</Text>
      </Item>

      <Item
        activated={$active_navigation === "env"}
        on:click={() => ($active_navigation = "env")}
      >
        <Text>Environment</Text>
      </Item>

      <Item
        activated={$active_navigation === "glossary"}
        on:click={() => ($active_navigation = "glossary")}
      >
        <Text>Glossary</Text>
      </Item>

      <Separator />

      <Item
        activated={$active_navigation === "appendix"}
        on:click={() => ($active_navigation = "appendix")}
      >
        <Text>Appendix</Text>
      </Item>

      <Item
        activated={$active_navigation === "master-index"}
        on:click={() => ($active_navigation = "master-index")}
      >
        <Text>Master Index</Text>
      </Item>
    </List>
  </Content>
</Drawer>
<Scrim fixed={false} />

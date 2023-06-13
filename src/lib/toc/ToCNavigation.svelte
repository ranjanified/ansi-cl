<script lang="ts">
  // import { onMount } from "svelte";
  import Separator from "@smui/list";
  import List, { Item, Text } from "@smui/list";
  import { app_store } from "$lib/store/app_store";
  import { component_consts } from "$lib/store/comp_map";
  import Syntax from "$lib/pages/syntax/SyntaxContent.svelte";
  import Introduction from "$lib/pages/intro/IntroductionContent.svelte";
  import Drawer, { Header, Content, Title, Scrim } from "@smui/drawer";

  export let active_navigation = app_store.active_navigation;

  const menu_open = app_store.menu_open;
  let content_presenter = app_store.content_presenter;
</script>

<Drawer variant="modal" fixed={false} bind:open={$menu_open}>
  <Header>
    <Title>Table of Contents</Title>
  </Header>
  <Separator />
  <Content>
    <List>
      <Item
        activated={$active_navigation === component_consts.intro}
        on:click={() => (
          ($active_navigation = component_consts.intro),
          $content_presenter?.display_content(Introduction)
        )}
      >
        <Text>Introduction</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.syntax}
        on:click={() => (
          ($active_navigation = component_consts.syntax),
          $content_presenter?.display_content(Syntax)
        )}
      >
        <Text>Syntax</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.eval_and_compile}
        on:click={() => ($active_navigation = component_consts.eval_and_compile)}
      >
        <Text>Evaluation and Compilation</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.types_and_classes}
        on:click={() => ($active_navigation = component_consts.types_and_classes)}
      >
        <Text>Types and Classes</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.data_and_control_flow}
        on:click={() => ($active_navigation = component_consts.data_and_control_flow)}
      >
        <Text>Data and Control Flow</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.iteration}
        on:click={() => ($active_navigation = component_consts.iteration)}
      >
        <Text>Iteration</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.objects}
        on:click={() => ($active_navigation = component_consts.objects)}
      >
        <Text>Objects</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.structures}
        on:click={() => ($active_navigation = component_consts.structures)}
      >
        <Text>Structures</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.conditions}
        on:click={() => ($active_navigation = component_consts.conditions)}
      >
        <Text>Conditions</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.symbols}
        on:click={() => ($active_navigation = component_consts.symbols)}
      >
        <Text>Symbols</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.packages}
        on:click={() => ($active_navigation = component_consts.packages)}
      >
        <Text>Packages</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.numbers}
        on:click={() => ($active_navigation = component_consts.numbers)}
      >
        <Text>Numbers</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.characters}
        on:click={() => ($active_navigation = component_consts.characters)}
      >
        <Text>Characters</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.conses}
        on:click={() => ($active_navigation = component_consts.conses)}
      >
        <Text>Conses</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.arrays}
        on:click={() => ($active_navigation = component_consts.arrays)}
      >
        <Text>Arrays</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.strings}
        on:click={() => ($active_navigation = component_consts.strings)}
      >
        <Text>Strings</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.sequences}
        on:click={() => ($active_navigation = component_consts.sequences)}
      >
        <Text>Sequences</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.hash_tables}
        on:click={() => ($active_navigation = component_consts.hash_tables)}
      >
        <Text>Hash Tables</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.file_names}
        on:click={() => ($active_navigation = component_consts.file_names)}
      >
        <Text>Filenames</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.files}
        on:click={() => ($active_navigation = component_consts.files)}
      >
        <Text>Files</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.streams}
        on:click={() => ($active_navigation = component_consts.streams)}
      >
        <Text>Streams</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.printer}
        on:click={() => ($active_navigation = component_consts.printer)}
      >
        <Text>Printer</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.reader}
        on:click={() => ($active_navigation = component_consts.reader)}
      >
        <Text>Reader</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.sys_construction}
        on:click={() => ($active_navigation = component_consts.sys_construction)}
      >
        <Text>System Construction</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.environment}
        on:click={() => ($active_navigation = component_consts.environment)}
      >
        <Text>Environment</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.glossary}
        on:click={() => ($active_navigation = component_consts.glossary)}
      >
        <Text>Glossary</Text>
      </Item>

      <Separator />

      <Item
        activated={$active_navigation === component_consts.appendix}
        on:click={() => ($active_navigation = component_consts.appendix)}
      >
        <Text>Appendix</Text>
      </Item>

      <Item
        activated={$active_navigation === component_consts.master_index}
        on:click={() => ($active_navigation = component_consts.master_index)}
      >
        <Text>Master Index</Text>
      </Item>
    </List>
  </Content>
</Drawer>
<Scrim fixed={false} />

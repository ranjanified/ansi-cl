<script lang="ts">
  import Button from "@smui/button";
  import { app_store } from "$lib/store/app_store";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import { component_consts } from "$lib/store/comp_map";

  const active_navigation = app_store.active_navigation;
</script>

<LayoutGrid>
  <Cell>
    <Button variant="unelevated" on:click={() => ($active_navigation = component_consts.intro)}
      >Introduction</Button
    >
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.syntax)}>Syntax</Button
    >
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.eval_and_compile)}
      >Evaluation And Compilation</Button
    >
  </Cell>
  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.types_and_classes)}
      >Types And Classes</Button
    >
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.data_and_control_flow)}
    >
      Data And Control Flow
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.iteration)}
    >
      Iteration
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.objects)}
    >
      Objects
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.structures)}
    >
      Structures
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.conditions)}
    >
      Conditions
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.symbols)}
    >
      Symbols
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.packages)}
    >
      Packages
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.numbers)}
    >
      Numbers
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.characters)}
    >
      Characters
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.conses)}
    >
      Conses
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.arrays)}
    >
      Arrays
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.strings)}
    >
      Strings
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.sequences)}
    >
      Sequences
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.hash_tables)}
    >
      Hash Tables
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.file_names)}
    >
      Filenames
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.files)}
    >
      Files
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.streams)}
    >
      Streams
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.printer)}
    >
      Printer
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.reader)}
    >
      Reader
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.sys_construction)}
    >
      System Construction
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.environment)}
    >
      Environment
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.glossary)}
    >
      Glossary
    </Button>
  </Cell>
</LayoutGrid>

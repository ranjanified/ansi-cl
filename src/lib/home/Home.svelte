<script lang="ts">
  import Button from "@smui/button";
  import { app_store } from "$lib/store/app_store";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import { component_consts } from "$lib/store/comp_map";
  import { get_replacement_text } from "$lib/store/text_dictionary";

  const active_navigation = app_store.active_navigation;
  const selected_lang = app_store.selected_lang;
</script>

<LayoutGrid>
  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.intro)}
    >
      {get_replacement_text("introduction", $selected_lang)}
      <!-- {#if $selected_lang === "en"}
        Introduction
      {:else}
        भूमिका
      {/if} -->
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.syntax)}
    >
      {get_replacement_text("syntax", $selected_lang)}
      <!-- {#if $selected_lang === "en"}
        Syntax
      {:else}
        वाक्य - विन्यास
      {/if} -->
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.eval_and_compile)}
    >
      {get_replacement_text("evaluation", $selected_lang)}

      {get_replacement_text("and", $selected_lang)}

      {get_replacement_text("compilation", $selected_lang)}
    </Button>
  </Cell>
  <!-- Evaluation And Compilation -->
  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.types_and_classes)}
    >
      {get_replacement_text("types", $selected_lang)}

      {get_replacement_text("and", $selected_lang)}

      {get_replacement_text("classes", $selected_lang)}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() =>
        ($active_navigation = component_consts.data_and_control_flow)}
    >
      {get_replacement_text("data", $selected_lang)}

      {get_replacement_text("and", $selected_lang)}

      {get_replacement_text("control", $selected_lang)}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.iteration)}
    >
      {#if $selected_lang === "en"}
        Iteration
      {:else}
        आवर्तन
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.objects)}
    >
      {#if $selected_lang === "en"}
        Objects
      {:else}
        वस्तु
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.structures)}
    >
      {#if $selected_lang === "en"}
        Structures
      {:else}
        संरचनाएं
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.conditions)}
    >
      {#if $selected_lang === "en"}
        Conditions
      {:else}
        परिस्थितियाँ
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.symbols)}
    >
      {#if $selected_lang === "en"}
        Symbols
      {:else}
        प्रतीकें
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.packages)}
    >
      {#if $selected_lang === "en"}
        Packages
      {:else}
        संकुल
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.numbers)}
    >
      {#if $selected_lang === "en"}
        Numbers
      {:else}
        संख्याऐं
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.characters)}
    >
      {#if $selected_lang === "en"}
        Characters
      {:else}
        अक्षर
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.conses)}
    >
      {#if $selected_lang === "en"}
        Conses
      {:else}
        पूर्वयोजन
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.arrays)}
    >
      {#if $selected_lang === "en"}
        Arrays
      {:else}
        त्रम
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.strings)}
    >
      {#if $selected_lang === "en"}
        Strings
      {:else}
        अक्षर अनुक्रम
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.sequences)}
    >
      {#if $selected_lang === "en"}
        Sequences
      {:else}
        अनुक्रम
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.hash_tables)}
    >
      {#if $selected_lang === "en"}
        Hash Tables
      {:else}
        हैश तालिका
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.file_names)}
    >
      {#if $selected_lang === "en"}
        Filenames
      {:else}
        फ़ाइल उपनाम
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.files)}
    >
      {#if $selected_lang === "en"}
        Files
      {:else}
        फ़ाइल
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.streams)}
    >
      {#if $selected_lang === "en"}
        Streams
      {:else}
        प्रवाह
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.printer)}
    >
      {#if $selected_lang === "en"}
        Printer
      {:else}
        मुद्रक
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.reader)}
    >
      {#if $selected_lang === "en"}
        Reader
      {:else}
        पाठक
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.sys_construction)}
    >
      {#if $selected_lang === "en"}
        System Construction
      {:else}
        तंत्र गठन
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.environment)}
    >
      {#if $selected_lang === "en"}
        Environment
      {:else}
        परिवेश
      {/if}
    </Button>
  </Cell>

  <Cell>
    <Button
      variant="unelevated"
      on:click={() => ($active_navigation = component_consts.glossary)}
    >
      {#if $selected_lang === "en"}
        Glossary
      {:else}
        शब्दकोष
      {/if}
    </Button>
  </Cell>
</LayoutGrid>

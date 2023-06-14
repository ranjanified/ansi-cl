<script lang="ts">
  import Switch from "@smui/switch";
  import FormField from "@smui/form-field";
  import { app_store } from "$lib/store/app_store";

  const selected_lang = app_store.selected_lang;
  let checked = $selected_lang === "en";

  const set_selected_language = (selected: boolean) => {
    if (selected) {
      app_store.selected_lang.set("en");
    } else {
      app_store.selected_lang.set("hi");
    }
  };
</script>

<div class="lang-switcher">
  <FormField>
    <Switch
      class="lang-switch-action"
      icons={false}
      bind:checked
      on:SMUISwitch:change={(e) => set_selected_language(e.detail.selected)}
    />
    <span slot="label">
      <div
        class="{$selected_lang === 'hi'
          ? 'highlight-selected'
          : ''} mdc-typography--body2"
      >
        हिंदी
      </div>
      <div
        class="{$selected_lang === 'en'
          ? 'highlight-selected'
          : ''} mdc-typography--body2"
      >
        English
      </div>
    </span>
  </FormField>
</div>

<style lang="scss">
  .highlight-selected {
    font-weight: bolder;
  }

  .lang-switcher {
    background-color: var(--mdc-theme-surface, #fff);
    padding: 4px;
  }
</style>

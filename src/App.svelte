<script lang="ts">
  import { onMount } from "svelte";
  import Layout from "$lib/layout/Layout.svelte";
  import { app_store } from "$lib/store/app_store";
  import FooterContent from "$lib/footer/FooterContent.svelte";
  import ContentPresenter from "$lib/presenter/ContentPresenter.svelte";
  import { component_map } from "$lib/store/comp_map";

  let content_presenter = app_store.content_presenter;
  const active_navigation = app_store.active_navigation;

  // onMount(() => {
  //   app_store.content_presenter.set($content_presenter);
  // });

  active_navigation.subscribe((active) => {
    if ($content_presenter && active) {
      $content_presenter.display_content(
        component_map[active] || component_map["404"]
      );
    }
  });

  content_presenter.subscribe((presenter) => {
    if (presenter && $active_navigation) {
      presenter.display_content(component_map[$active_navigation]);
    }
  });
</script>

<Layout>
  <FooterContent slot="footer" />
  <ContentPresenter bind:this={$content_presenter} />
</Layout>

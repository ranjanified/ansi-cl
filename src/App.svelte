<script lang="ts">
  import { onMount } from "svelte";
  import Layout from "$lib/layout/Layout.svelte";
  import { app_store } from "$lib/store/app_store";
  import FooterContent from "$lib/footer/FooterContent.svelte";
  import ContentPresenter from "$lib/presenter/ContentPresenter.svelte";

  let content_presenter: ContentPresenter;

  onMount(() => {
    app_store.content_presenter.set(content_presenter);
  });
</script>

<Layout>
  <FooterContent slot="footer" />
  <ContentPresenter bind:this={content_presenter} />
</Layout>

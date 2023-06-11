<script lang="ts">
  import Paper from "@smui/paper";
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import Navigation from "$lib/navigation/Navigation.svelte";
</script>

<Paper class="full-page col-flexed">
  <Header />
  <Paper class="main-content" elevation={5}>
    <Navigation />
    <Paper elevation={5} class="content-container">
      <main class="container-main">
        <slot />
      </main>
    </Paper>
  </Paper>
  <Footer />
</Paper>

<style lang="scss">
  .container-main {
    flex: 1;
    display: flex;
  }
</style>

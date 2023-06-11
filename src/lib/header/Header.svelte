<script lang="ts">
  import Paper from "@smui/paper";
  import TopAppBar, { Row } from "@smui/top-app-bar";
</script>

<header>
  <Paper elevation={5}>
    <TopAppBar variant="static">
      <Row>
        <slot name="header" />
      </Row>
    </TopAppBar>
  </Paper>
</header>

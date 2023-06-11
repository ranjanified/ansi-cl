<script lang="ts">
    import Paper from "@smui/paper";
    import BottomAppBar, { Section } from "@smui-extra/bottom-app-bar";
</script>
<footer>
    <Paper elevation={5}>
        <BottomAppBar variant="static">
            <Section>
                <slot name="footer" />
            </Section>
        </BottomAppBar>
    </Paper>
</footer>
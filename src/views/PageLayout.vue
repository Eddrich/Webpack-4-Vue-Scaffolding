<template>
    <div>
        <page-header/>
        <router-view/>
        <page-footer/>
    </div>
</template>

<script>
    import PageHeader from "../components/layout/PageHeader.vue";
    import PageFooter from "../components/layout/PageFooter.vue";

    export default {
        name: "PageLayout",
        components: {PageFooter, PageHeader}
    }
</script>

<style scoped>

</style>

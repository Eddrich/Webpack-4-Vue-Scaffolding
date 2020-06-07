<template>
    <div>
        <page-header/>
        <router-view/>
        <page-footer/>
    </div>
</template>

<script>
    import PageHeader from "./PageHeader.vue";
    import PageFooter from "./PageFooter.vue";

    export default {
        name: "PageLayout",
        components: {PageFooter, PageHeader}
    }
</script>

<style scoped>

</style>

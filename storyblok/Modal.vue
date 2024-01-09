<template>
    <div v-editable="blok">
        <StoryBlokComponent 
            v-for="blok in blok.columns"
            :key="blok._uid"
            :blok="blok"
        />
    </div>
</template>

<script setup>
    defineProps({ blok: Object})
</script>

<style lang="scss" scoped>

</style>
<template>
    <div v-editable="blok" class="container-lg d-flex justify-content-center">
        <div class="row">
            <StoryblokComponent
                v-for="blok in blok.GridContent"
                :key="blok._uid"
                :blok="blok"
            />
        </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<template>
    <div class="col-lg-6 gx-2 ms-lg-4 me-lg-1" v-editable="blok">
        <StoryblokComponent 
            v-for="blok in blok.Content"
            :key="blok._uid"
            :blok="blok"
            class="slide-down"
        />
    </div>
</template>

<script setup>
    defineProps({ blok: Object})
</script>

<style lang="scss" scoped>
    @keyframes slideDown {
    from { transform: scale(0%); opacity: 0; }
    to { transform: scake(1); opacity: 1; }
    }

    .slide-down {
    animation: slideDown 1s ease-out;
    }

</style>
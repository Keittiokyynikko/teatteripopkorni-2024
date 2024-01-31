<template>
    <div class="profile-card m-3 col d-flex flex-column justify-content-start align-items-center" v-editable="blok">
            <img class="profile mb-5" :src="blok.ProfileImage.filename">
            <h5 class="text-center">{{ blok.Name }}</h5>
            <p class="text-center">{{ blok.Description }}</p>
    </div>
</template>

<script setup>
    defineProps({ blok: Object})
</script>

<style lang="scss" scoped>

    .profile {
        min-width: 200px;
        min-height: 200px;
        border-radius: 100px;
        background-color: white;
    }

</style>
<template>
  <div v-editable="blok" class="m-4 d-flex flex-column justify-content-lg-around flex-lg-row">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok"
    :class="{ 'hidden': !isVisible }" />

  </div>
</template>
 
<script setup>

  import { ref, onMounted, nextTick } from 'vue';

  const isVisible = ref(false); // Tallennetaan näkyvyystila

  defineProps({ blok: Object })

  onMounted(async () => {
    await nextTick();
    isVisible.value = true;
});

</script>

<style>
body {
  background-image: url('/bg.jpg') !important;
  background-repeat: none;
  background-size: cover;
  background-position: center;
  background-position-y: -10rem;
  background-color: #C7F2F1;
}

.bg {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: auto;
}

.hidden {
  opacity: 0;
  transition: 0.5s;
}

a {
  text-decoration: none !important;
  font-family: 'Open Sans Semibold', sans-serif !important;
}

div .h2 {
  font-family: 'Ultra', serif !important;
}

div p {
  font-family: 'Open Sans', sans-serif;
}
</style>
<template>
    <div v-editable="blok" class="m-4 d-flex flex-column justify-content-lg-around flex-lg-row">
      <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
    </div>
  </template>
   
  <script setup>
  defineProps({ blok: Object })
  </script>

  <style>
  body {
    background-image: url('/bg.jpg') !important;
    background-repeat: none;
    background-size: cover;
    background-position: center;
    background-position-y: -10rem;
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
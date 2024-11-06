<script setup>
const { slug } = useRoute().params
 
const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  { version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',}
)
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
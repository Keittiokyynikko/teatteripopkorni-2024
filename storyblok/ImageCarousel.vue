<template>
    <div v-editable="blok">
        <div id="carouselExampleIndicators" class="carousel slide">
            <ol class="carousel-indicators">
                <li v-for="(image, index) in props.blok.Images" :key="image.id" :data-bs-target="'#carouselExampleIndicators'" :data-bs-slide-to="index" :class="{ active: index === 0 }"></li>
            </ol>
            <div class="carousel-inner">
                <div v-for="(image, index) in props.blok.Images" :key="image.id" class="carousel-item" :class="{ active: index === 0 }">
                    <img :src="image.filename" class="d-block w-100" :alt="image.alt">
                </div>
            </div>
            <a class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';

const props = defineProps({
  blok: Object
});

onMounted(() => {
  var myCarousel = document.querySelector('#carouselExampleIndicators')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: true
  })
});
</script>

<style lang="scss" scoped>

.carousel-indicators li {
 list-style-type: none;
}
</style>
<template>
	<div v-editable="blok">
		<h2 class="mb-3">Galleria</h2>
		<div :id="uuid" class="carousel slide" data-bs-ride="carousel">
			<ol class="carousel-indicators">
				<li
					v-for="(image, index) in props.blok.Images"
					:key="image.id"
					:data-bs-target="'#carouselIndicators'"
					:data-bs-slide-to="index"
					:class="{ active: index === 0 }"
				></li>
			</ol>
			<div class="carousel-inner">
				<div
					v-for="(image, index) in props.blok.Images"
					:key="index"
					class="carousel-item"
					:class="{ active: index === 0 }"
				>
					<img :src="image.filename" class="d-block w-100" :alt="image.alt" />
				</div>
			</div>
			<a
				class="carousel-control-prev"
				type="button"
				:data-bs-target="'#' + uuid"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			</a>
			<a
				class="carousel-control-next"
				type="button"
				:data-bs-target="'#' + uuid"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
			</a>
		</div>
	</div>
</template>

<script setup>
	import { defineProps, onMounted } from "vue";
	const { $bootstrap } = useNuxtApp();

	const props = defineProps({
		blok: Object,
	});

	const uuid = `carousel-${props.blok._uid}`;
</script>

<style lang="scss" scoped>
	.carousel-indicators li {
		list-style-type: none;
	}
</style>

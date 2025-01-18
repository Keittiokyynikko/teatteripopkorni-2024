<template>
	<div class="d-flex flex-column justify-content-center align-items-center text-center">
		<h2>Ups! Jokin meni pieleen...</h2>
		<button @click="handleError">Palaa takaisin</button>
	</div>
</template>

<script setup lang="ts">
	import type { NuxtError } from "#app";
	defineProps({ error: Object as () => NuxtError });
	const handleError = () => clearError({ redirect: "/" });
</script>

<style lang="scss" scoped>
	body {
		background-image: url("/bg.jpg") !important;
		background-repeat: none;
		background-size: cover;
		background-position: center;
		background-position-y: -10rem;
		background-color: #c7f2f1;
	}
</style>

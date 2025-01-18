<template>
	<div
		class="profile-card m-3 col d-flex flex-column justify-content-start align-items-center"
		v-editable="blok"
	>
		<div class="profile mb-5">
			<img class="profile-image" :src="blok.ProfileImage.filename" />
		</div>
		<h5 class="text-center">{{ blok.Name }}</h5>
		<p class="text-center">{{ blok.Description }}</p>
	</div>
</template>

<script setup>
	defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
	.profile {
		aspect-ratio: 1/1;
		position: relative;
		min-width: 200px;
		min-height: 200px;
		max-width: 200px;
		max-height: 200px;
		border-radius: 100%;
		background-color: white;
		overflow: hidden;
	}

	.profile-image {
		width: 100%;
		height: auto;
	}
</style>

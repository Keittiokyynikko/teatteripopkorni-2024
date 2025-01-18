<template>
	<div class="col col-lg-4 gx-2 ms-lg-2" v-editable="blok">
		<StoryblokComponent
			v-for="blok in blok.ColumnContent"
			:key="blok._uid"
			:blok="blok"
			class="slide-down"
		/>
	</div>
</template>

<script setup>
	defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
	@keyframes slideDown {
		from {
			transform: scale(0%);
			opacity: 0;
		}
		to {
			transform: scake(1);
			opacity: 1;
		}
	}

	.slide-down {
		animation: slideDown 1s ease-out;
	}
</style>

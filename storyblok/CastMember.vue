<template>
	<div v-editable="blok" class="col-md-3 col-12 text-left mb-4">
		<div class="label">
			<b>{{ blok.Title }}</b>
		</div>
		<div class="name">{{ blok.Name }}</div>
	</div>
</template>

<script setup>
	defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
	.label,
	.name {
		text-align: left;
	}
</style>

<template>
	<div v-editable="blok">
		<div
			class="modal fade"
			:id="uuid"
			tabindex="-1"
			role="dialog"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button
							type="button"
							class="close"
							@click="hideModal()"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<StoryblokComponent
							v-for="blok in blok.ModalContent"
							:key="blok._uid"
							:blok="blok"
						/>
					</div>
				</div>
			</div>
		</div>

		<div
			class="d-flex flex-column justify-content-between align-items-center align-items-md-start mt-5"
		>
			<div
				class="me-0 me-md-4 d-flex flex-column flex-sm-row flex-lg-column w-100 w-md-50 justify-content-between justify-content-lg-center"
			>
				<h5 class="head">{{ props.blok.Headline }}</h5>
				<h5 class="mb-3">{{ props.blok.Year }}</h5>
			</div>
			<button
				type="button"
				class="w-100 w-md-40 ms-10 btn btn-primary"
				data-toggle="modal"
				data-target="#ProjectModal"
				@click="showModal()"
			>
				{{ blok.ButtonText }}
			</button>
		</div>
	</div>
</template>

<script setup>
	const { $bootstrap } = useNuxtApp();
	let blockModal;
	import { defineProps } from "vue";
	const props = defineProps({ blok: Object });

	// Access the UUID of the component
	const uuid = computed(() => props.blok._uid);

	function showModal() {
		blockModal = new $bootstrap.Modal(document.getElementById(uuid.value));
		blockModal.show();
	}

	function hideModal() {
		blockModal.hide();
	}
</script>

<style lang="scss" scoped>
	.main {
		background-color: #c7f2f1;
		width: 90%;
	}

	h2,
	.head {
		font-family: "Ultra";
	}

	h5 {
		font-family: "Open Sans";
	}

	.holder {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.content {
		width: 100%;
		display: flex;
		margin: 5%;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.headline-info {
		width: 100%;
		background-color: #c7f2f1;
		padding: 5%;
	}

	.modal {
		--bs-modal-width: 1000px;
	}

	.modal-content {
		background-color: #c7f2f1;
		padding: 2%;
	}

	.modal-header {
		background-color: #c7f2f1 !important;
		border: none;
	}

	.modal-body {
		background-color: #c7f2f1 !important;
		border-radius: 0 0 0.5rem 0.5rem;
	}

	.btn {
		text-decoration: none;
		color: white !important;
		background-color: #33210b !important;
		padding: 2% 5%;
		float: right;
	}

	.close {
		border: 0 !important;
		background-color: transparent;
		font-size: 2rem;
		padding: 0;
	}

	div Image {
		border-radius: 100px;
	}

	a {
		text-decoration: none !important;
		font-family: "Open Sans Semibold", sans-serif !important;
		color: black;
	}

	@media (max-width: 600px) {
		.btn {
			float: none;
			width: 100%;
			padding: 3% 5%;
		}
	}
</style>

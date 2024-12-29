<template>
    <div v-editable="blok">
        <div
            class="modal fade"
            :id="blok._uid"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div
                        class="modal-header d-flex flex-column justify-content-start align-items-start"
                    >
                        <button
                            type="button"
                            class="close"
                            @click="hideModal()"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h2 class="modal-title" id="exampleModalLabel">
                            {{ props.blok.Headline }}
                        </h2>
                    </div>
                    <div class="modal-body">
                        <p class="mb-5">{{ props.blok.TextContent }}</p>
                        <StoryblokComponent
                            v-for="blok in blok.ModalContent"
                            :key="blok._uid"
                            :blok="blok"
                        />
                    </div>
                </div>
            </div>
        </div>

        <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            @click="showModal()"
        >
            {{ blok.ButtonText }}
        </button>
    </div>
</template>

<script setup>
const { $bootstrap } = useNuxtApp();
const props = defineProps({ blok: Object });
let blockModal;

const uuid = props.blok._uid;

function showModal() {
    blockModal = new $bootstrap.Modal(document.getElementById(uuid));
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

h2 {
    font-family: "Ultra";
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

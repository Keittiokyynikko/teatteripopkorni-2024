<template>
    <div v-editable="blok">
        <div class="modal fade" :id="blok._uid" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" @click="hideModal()" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <div class="modal-body">
                    <StoryblokComponent v-for="blok in blok.ModalContent" :key="blok._uid" :blok="blok" />
                </div>
                </div>
            </div>
            </div>

            <div class="d-flex flex-lg-row justify-content-between align-items-center mb-3">
                <div class="d-flex flex-column w-50">
                    <h6 class="head">{{ props.blok.Headline }}</h6>
                    <h6 >{{ props.blok.Year }}</h6>
                </div>
                <button type="button" class="w-40 ms-10 btn btn-primary" data-toggle="modal" data-target="#exampleModal" @click="showModal()">
                    {{ blok.ButtonText }}
                </button>
            </div>
    </div>
</template>

<script setup>
    const { $bootstrap } = useNuxtApp()
    let blockModal
    import { defineProps } from 'vue'
    const props = defineProps({ blok: Object })

    // Access the UUID of the component
    const uuid = props.blok._uid

    function showModal() {
        blockModal = new $bootstrap.Modal(document.getElementById(uuid))
        blockModal.show()
    }

    function hideModal() {
        blockModal.hide();
    }
</script>

<style lang="scss" scoped>
    .main {
        background-color: #C7F2F1;
        width: 90%;
    }

    h2, .head {
        font-family: 'Ultra';
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
    background-color: #C7F2F1;
    padding: 5%;
}

.modal {
    --bs-modal-width: 1000px;
}

.modal-content {
    background-color: #C7F2F1;
    padding: 2%;
}

.modal-header {
    background-color: #C7F2F1 !important;
    border: none;
}

.modal-body {
    background-color: #C7F2F1 !important;
    border-radius: 0 0 0.5rem 0.5rem;
}

.btn {
    text-decoration: none;
    color: white !important;
    background-color: #33210B !important;
    padding: 2% 5%;
    float: right;
}

.close {
    border: 0 !important;
    background-color: transparent;
    font-size: 2rem;
}

div Image {
    border-radius: 100px;
}

a {
    text-decoration: none !important;
    font-family: 'Open Sans Semibold', sans-serif !important;
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
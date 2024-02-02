<template>
    <div v-editable="blok" class="d-flex justify-content-center">
            <div class="d-flex flex-column justify-content-center">
                <div class="h2 headline-info">{{ props.blok.ProjectName }}</div>
                <p class="mb-5"><i>{{ props.blok.ProjectOneLiner }}</i></p>
                <img class="w-100 mb-5" :src="blok.HeaderImageDesktop.filename">
                <div class="mb-4 d-flex justify-content-center flex-column align-items-center">
                    <div class="mb-4" v-html="richtext(props.blok.Description)"></div>
                    <div class="row p-0">
                        <StoryblokComponent v-for="blok in props.blok.Cast" 
                        :key="blok._uid" 
                        :is="blok.component"
                        :blok="blok" />
                    </div>
                    <p class="h5 mt-4 text-left"><b>{{ props.blok.BookingText }}</b></p>
                </div>
            </div>
        </div>
</template>

<script setup>
    const props = defineProps({ blok: Object })

</script>

<script>
const storyblokApi = useStoryblokApi()
export default {
    methods: {
        richtext(text) {
            return storyblokApi.richTextResolver.render(text)
        },
    },
}
</script>

<style lang="scss" scoped>

    h3 {
        font-family: 'Open Sans SemiBold';
    }

    body {
        background-image: url('../../public/assets/bg.jpg') !important;
        background-repeat: none;
        background-size: cover;
        background-position: center;
        background-position-y: -10rem;
    }

    .main {
        background-color: #EFEBB4;
        width: 90%;
    }

    .holder {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .content {
        width: 90%;
        display: flex;
        margin: 5%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .headline-info {
        width: 100%;
        
    }

    .linkbtn {
        position: absolute;
        float: right;
        margin: 5% 0;
        text-decoration: none;
        color: white !important;
        background-color: brown !important;
        padding: 5%;
    }

    div Image {
        border-radius: 100px;
    }

    a {
        text-decoration: none !important;
        font-family: 'Open Sans Semibold', sans-serif !important;
        color: black;
    }
</style>
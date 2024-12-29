<template>
    <div
        class="main mb-4"
        :style="{ '--background-color-2': blok.BackgroundColor2 }"
        v-editable="blok"
    >
        <h1
            class="h2 p-4 headline-info"
            :style="{ '--background-color': blok.BackgroundColor }"
        >
            {{ blok.Headline }}
        </h1>
        <div
            class="main d-flex flex-column justify-content-start"
            :style="{ '--background-color': blok.BackgroundColor }"
        >
            <div class="m-4 d-flex justify-content-center flex-column">
                <div class="mb-4" v-html="richtext(blok.TextContent)"></div>
                <StoryblokComponent
                    v-for="blok in blok.Content"
                    :key="blok._uid"
                    :blok="blok"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>

<script>
const storyblokApi = useStoryblokApi();
export default {
    methods: {
        richtext(text) {
            return storyblokApi.richTextResolver.render(text);
        },
    },
};
</script>

<style lang="scss" scoped>
h6,
.h6,
h5,
.h5,
h4,
.h4,
h3,
.h3,
h2,
.h2,
h1,
.h1 {
    margin-bottom: 0rem !important;
}

.main {
    background-color: var(--background-color-2);
}

h1 {
    font-family: "Ultra";
}

p {
    font-family: "Open Sans", sans-serif;
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
    background-color: var(--background-color);
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
</style>

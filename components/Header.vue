<template>
    <div class="main">
        <div class="holder">
            <img
              src="/poppari-neon_01.png"
              alt="Teatteri Popkorni Logo"             
              priority
            />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

    img {
        width: 100%;
        height: auto;
    }

    .main {
        background-color: transparent;
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .holder {
        width: 30%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 992px) {
        .holder {
            width: 50%;
        }
    }

    @media (max-width: 600px) {
        .holder {
            width: 80%;
        }
    }

</style>
<template>
    <div class="main">
        <div className="holder">
            <img
              src="/poppari-neon_01.png"
              alt="Teatteri Popkorni Logo"
              className={styles.vercelLogo}
              width={30}
              height={60}
              priority
            />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .main {
        background-color: transparent;
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .holder {
        width: 50%;
        height: auto;
    }

</style>
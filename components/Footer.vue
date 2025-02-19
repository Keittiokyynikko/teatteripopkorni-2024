<template>
	<div class="main">
		<div class="holder p-4 px-5">
			<p>© Teatteri Popkorni 2025-</p>
			<div class="some-icons">
				<a class="icon" href='https://www.facebook.com/teatteripopkorni' target="_blank"
				rel="noopener noreferrer">
                        <img :src="'/facebook.svg'">
				</a>
					<a class="icon" href='https://www.instagram.com/teatteripopkorni/' target="_blank"
					rel="noopener noreferrer">
                        <img :src="'/instagram.svg'">
					</a>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	.main {
		background-color: transparent;
		width: 100%;
		height: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.holder {
		background-color: #c7f2f1;
	}

	.some-icons {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon {
			width: 50px;
			margin: 0 10px;

			img {
				width: 100%;
			}
	}
</style>

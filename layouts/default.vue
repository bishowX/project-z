<template>
	<div class="default">
		<NavbarHeader />
		<div class="wrapper">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.default {
	background-color: #f5f5f5;
	min-height: 100vh;
}

.wrapper {
	padding: 0 128px;
	max-width: 1512px;
	margin-inline: auto;
}
</style>

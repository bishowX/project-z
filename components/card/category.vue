<template>
	<NuxtLink
		class="relative isolate flex h-[240px] basis-[32%] flex-col items-start justify-end gap-2 rounded-lg border-2 border-brand-50 bg-[url(/bg-image.png)] p-6"
		:to="link"
	>
		<div class="absolute top-0 left-0 bottom-0 w-full rounded-lg bg-brand-700 bg-opacity-50 mix-blend-normal" />
		<span class="text-shadow z-[1] order-2 self-stretch text-[26px] font-bold leading-[31px] text-white">
			{{ name }}</span
		>
	</NuxtLink>
</template>

<script setup lang="ts">
type CategoryProps = {
	name: string;
	link: string;
};
defineProps<CategoryProps>();
</script>

<style scoped>
.text-shadow {
	text-shadow: 0 2px 2px #00000047;
}
</style>

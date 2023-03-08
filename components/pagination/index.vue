<template>
	<div class="flex items-center">
		<button
			class="rounded-tl-[6px] rounded-bl-[6px] border border-[#d2d5da] px-4 py-2 text-gray-500 hover:bg-[#ddd]"
		>
			<ChevronLeftIcon />
		</button>
		<button class="border border-[#d2d5da] px-4 py-2 text-gray-500 hover:bg-[#ddd]">1</button>
		<button
			class="border border-[#d2d5da] px-4 py-2 text-gray-500 hover:bg-[#ddd]"
			:class="active ? 'border-brand-50 bg-brand-50 text-blue-600 hover:bg-brand-50' : ''"
		>
			2
		</button>
		<button class="border border-[#d2d5da] px-4 py-2 text-gray-500 hover:bg-[#ddd]">3</button>
		<button class="border border-[#d2d5da] px-4 py-2 text-gray-500 hover:bg-[#ddd]">4</button>
		<button class="border border-[#d2d5da] px-4 py-2 text-gray-500 hover:bg-[#ddd]">5</button>
		<button class="border border-[#d2d5da] px-4 py-2 text-gray-500">6</button>
		<button
			class="rounded-tr-[6px] rounded-br-[6px] border border-[#d2d5da] px-4 py-2 text-gray-500 hover:bg-[#ddd]"
		>
			<ChevronRightIcon />
		</button>
	</div>
</template>
<script setup lang="ts">
const active = ref(true);
</script>

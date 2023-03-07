<template>
	<div class="flex flex-col items-start gap-2 self-stretch">
		<label
			:class="`text-base leading-[19px] text-black ${required ? `after:text-red-500 after:content-['*']` : ``}`"
			:for="label"
			>{{ label }}</label
		><input
			:id="label"
			:type="type"
			:class="
				varient === 'outlined'
					? 'h-[40px] gap-8 self-stretch border-b-2 bg-transparent py-3 px-2 transition duration-100 focus:border-b-2 focus:border-black focus:bg-transparent focus:outline-none'
					: 'h-[40px] gap-8 self-stretch rounded-md bg-gray-200 py-3 px-2 transition duration-100 focus:bg-transparent focus:outline-gray-200'
			"
			:required="required"
			:placeholder="placeholder"
		/>
	</div>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		label?: string;
		type?: string;
		varient?: string;
		required?: boolean;
		placeholder?: string;
	}>(),
	{ label: "", type: "text", varient: "solid", required: false, placeholder: "" }
);
</script>

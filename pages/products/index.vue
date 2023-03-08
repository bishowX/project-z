<template>
	<!-- filter sidebar -->
	<div class="flex w-60 flex-col gap-8 pr-8">
		<h1>Category: {{ category }}</h1>
		<div v-for="categoryAttributes in mappedAttributesValues" :key="categoryAttributes.name">
			<h4 class="text-lg text-brand-500">{{ categoryAttributes.name }}</h4>
			<div class="mt-2 flex flex-col gap-3">
				<div
					v-for="categoryAttributesValue in categoryAttributes.values"
					:key="categoryAttributesValue.name"
					class="flex items-center gap-2"
				>
					<input
						:id="categoryAttributesValue.name + categoryAttributesValue.value"
						type="checkbox"
						:checked="categoryAttributesValue.checked"
						class="text-gray-300 h-6 w-6"
					/>
					<label :for="categoryAttributesValue.name + categoryAttributesValue.value" class="text-sm">{{
						categoryAttributesValue.name
					}}</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { categoryAttributesValues } from "@/data/category";

const route = useRoute();
const category = ref(route.query.category);

const mappedAttributesValues = computed(() =>
	categoryAttributesValues.map(item => ({
		...item,
		values: item.values.map(value => ({ ...value, checked: false })),
	}))
);
</script>

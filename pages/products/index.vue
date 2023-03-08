<template>
	<div class="order-1 mt-[86px] flex items-start gap-8 self-stretch pb-[64px]">
		<!-- filter sidebar -->
		<div class="flex w-60 flex-col gap-8 pr-8">
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
		<!-- product row table item -->
		<div class="order-1 flex grow flex-col items-start gap-4">
			<div v-for="item in tableRowItemValues" :key="item.id" class="w-full">
				<TablerowItem :item="item" />
			</div>
			<div class="flex w-full items-center justify-between">
				<div class="text-sm leading-[20px] text-gray-700">Showing 1 to 5 of 197 results</div>
				<Pagination />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { categoryAttributesValues } from "@/data/category";
import { tableRowItemData } from "@/data/tablerowItem";

const mappedAttributesValues = computed(() =>
	categoryAttributesValues.map(item => ({
		...item,
		values: item.values.map(value => ({ ...value, checked: false })),
	}))
);

const tableRowItemValues = tableRowItemData;
</script>

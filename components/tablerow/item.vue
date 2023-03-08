<template>
	<div class="flex items-start gap-8 self-stretch rounded-lg border-b-8 border-brand-500 bg-white py-8 px-6">
		<img class="aspect-square" :src="props.item.image" alt="product" width="192" height="178" />
		<div class="flex grow flex-col items-start justify-center gap-2">
			<div class="flex flex-col items-start gap-2 self-stretch">
				<img class="aspect-auto" :src="props.item.manufacturarLogo" alt="logo" width="75px" height="32px" />
				<h3 class="self-stretch text-3xl font-medium leading-[39px] text-black">{{ props.item.title }}</h3>
				<span class="text-sm leading-[17px] text-gray-500">{{ props.item.subTitle }}</span>
				<ul
					v-for="(shortDescription, index) in props.item.shortDescription"
					:key="index"
					class="ml-5 list-disc self-stretch text-sm leading-[17px] text-gray-500"
				>
					<li>{{ shortDescription }}</li>
				</ul>
			</div>
		</div>
		<div class="order-2 flex flex-col items-start gap-6">
			<div class="flex flex-col items-start gap-1 self-stretch">
				<div class="flex gap-1">
					<h4 class="text-[32px] font-medium leading-[39px]">
						${{ props.item.price.toString().split(".")[0] }}.<sup class="text-2xl font-medium">{{
							props.item.price.toString().split(".")[1]
						}}</sup>
					</h4>
					<div class="text-center text-sm text-gray-400 line-through">$2345.67</div>
				</div>
			</div>
			<div class="flex flex-col items-start gap-2">
				<div class="flex gap-2">
					<label class="font-sm font-bold leading-[17px] text-gray-600">Lease:</label>
					<ul
						v-for="(price, index) in props.item.leasePrice"
						:key="index"
						class="flex flex-col text-sm leading-[17px] text-gray-600"
					>
						<li>{{ price }}</li>
					</ul>
				</div>
				<div class="flex gap-2">
					<label class="font-sm font-bold leading-[17px] text-gray-600">DaaS:</label>
					<ul class="flex flex-col text-sm leading-[17px] text-gray-600">
						<li>{{ props.item.daasPrice }}</li>
					</ul>
				</div>
			</div>
			<div class="text-sm font-medium leading-[17px] text-black">In Stock</div>
			<div class="flex items-center gap-4 self-stretch">
				<div class="box-border flex">
					<div
						class="border-gray-300 flex items-center justify-center gap-2 rounded-l-md border py-[9px] px-[17px]"
					>
						<span class="text-[14px] font-medium leading-[20px] text-[#374151]"> 1 </span>
					</div>
					<div
						class="border-gray-300 flex items-center justify-center rounded-r-md border py-[9px] px-[17px] text-[14px] font-medium leading-[20px] text-[#374151]"
					>
						<DropdownArrowIcon />
					</div>
				</div>
				<Button color="blue" variant="default">Add to Quote</Button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { TableRowItemValue } from "~~/types/tablerowItem";

type ItemProps = {
	item: TableRowItemValue;
};
const props = defineProps<ItemProps>();
</script>

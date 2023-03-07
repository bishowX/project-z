<template>
	<!-- filter sidebar -->
	<div class="flex w-60 flex-col gap-8 bg-green-600 pr-8">
		<div>
			<h4 class="text-lg text-brand-500">Price Range</h4>
			<div class="flex flex-col gap-3">
				<div v-for="item in items" :key="item.id" class="flex items-center gap-2">
					<input :checked="item.checked" type="checkbox" />
					<span class="text-sm">{{ item.title }}</span>
				</div>
			</div>
		</div>

		<div>
			<h4>Brand</h4>
			<div class="flex flex-col gap-3">
				<div v-for="item in items" :key="item.id" class="flex items-center gap-2">
					<input :checked="item.checked" type="checkbox" />
					<span class="text-sm">{{ item.title }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const items = [{ id: 1, checked: true, title: "uihuohu" }];
</script>

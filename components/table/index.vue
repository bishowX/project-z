<script setup lang="ts">
import { FlexRender, getCoreRowModel, useVueTable, type ColumnDef } from "@tanstack/vue-table";

interface TableProps {
	data: unknown[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	columns: ColumnDef<any, any>[];
}

const props = defineProps<TableProps>();

const table = useVueTable({
	get data() {
		return props.data;
	},
	columns: props.columns,
	getCoreRowModel: getCoreRowModel(),
});
</script>

<template>
	<table aria-describedby="d" class="w-full border-separate border-spacing-y-[2px] border-none text-left">
		<thead class="bg-white">
			<tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
				<th
					v-for="header in headerGroup.headers"
					:key="header.id"
					scope="col"
					class="border-none px-6 py-2 text-sm font-bold leading-8 text-black"
					:colSpan="header.colSpan"
				>
					<FlexRender
						v-if="!header.isPlaceholder"
						:render="header.column.columnDef.header"
						:props="header.getContext()"
					/>
				</th>
			</tr>
		</thead>
		<tbody class="">
			<tr v-for="row in table.getRowModel().rows" :key="row.id" class="dark:bg-gray-800 space-y-1 bg-white">
				<td
					v-for="cell in row.getVisibleCells()"
					:key="cell.id"
					class="font px-6 py-2 text-sm font-normal leading-8 text-black"
				>
					<FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
				</td>
			</tr>
		</tbody>
	</table>
	<div class="h-4" />
</template>

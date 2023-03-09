<template>
	<div class="py-5">
		<div class="flex w-full items-center justify-between">
			<!-- breadcumb -->
			<div class="w-4"></div>
			<div class="flex items-center gap-6">
				<p class="flex cursor-pointer items-center gap-2 text-sm font-bold text-gray-700">
					Status:
					<select value="all" class="flex items-center gap-1 font-normal">
						<option value="all">All</option>
						<option value="none">None</option>
						<ChevronDownIcon class="text-current inline h-4 w-4 pt-1" />
					</select>
				</p>
				<p class="flex cursor-pointer items-center gap-2 text-sm font-bold text-gray-700">
					Customer:
					<select value="all" class="flex items-center gap-1 font-normal">
						<option value="all">All</option>
						<option value="none">None</option>
						<ChevronDownIcon class="text-current inline h-4 w-4 pt-1" />
					</select>
				</p>
				<p class="flex cursor-pointer items-center gap-2 text-sm font-bold text-gray-700">
					Sort By:
					<select value="date.desc" class="flex items-center gap-1 font-normal">
						<option value="date.desc">Date Desc</option>
						<option value="date.asc">Date Asc</option>
						<option value="order.desc">Order Desc</option>
						<option value="order.asc">Order Asc</option>
						<ChevronDownIcon class="text-current inline h-4 w-4 pt-1" />
					</select>
				</p>
			</div>
			<Button color="blue" variant="default">New Quote</Button>
		</div>
		<div class="h-2"></div>
		<Table :data="quotes" :columns="columns" />
		<div class="flex w-full items-center justify-between">
			<p class="text-sm font-medium text-gray-700">Showing 1 to 20 of 197 results</p>
			<Pagination />
		</div>
	</div>
</template>

<script setup lang="tsx">
import { createColumnHelper } from "@tanstack/table-core";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";

interface Quote {
	order: string;
	customer: string;
	company: string;
	name: string;
	reference: string;
	status: string;
	closeDate: string;
}

const createData = (count: number): Quote[] =>
	new Array(count).fill(
		{
			order: "zo00427",
			customer: "zc00234",
			company: "Ajax Global",
			name: "Jan Doe",
			reference: "Georgia Office Opportunity",
			status: "Saved",
			closeDate: "10/31/2002",
			total: "$1320.47",
		},
		0,
		count
	);

const quotes: Quote[] = createData(20);

const columnHelper = createColumnHelper<Quote>();

const columns = [
	columnHelper.accessor(a => a.order, {
		cell: params => <span class="underline">{params.getValue()}</span>,
		header: "Order #",
		id: "order",
	}),
	columnHelper.accessor(a => a.customer, {
		cell: params => <span class="underline">{params.getValue()}</span>,
		header: "Customer #",
		id: "customer",
	}),
	columnHelper.accessor(a => a.company, {
		cell: params => params.getValue(),
		header: "Company",
		id: "company",
	}),
	columnHelper.accessor(a => a.name, {
		cell: params => params.getValue(),
		header: "Name",
		id: "name",
	}),
	columnHelper.accessor(a => a.reference, {
		cell: params => params.getValue(),
		header: "Reference",
		id: "reference",
	}),
	columnHelper.accessor(a => a.status, {
		cell: params => params.getValue(),
		header: "Status",
		id: "status",
	}),
	columnHelper.accessor(a => a.closeDate, {
		cell: params => params.getValue(),
		header: "Close Date",
		id: "closeDate",
	}),
	columnHelper.accessor(a => a.total, {
		cell: params => params.getValue(),
		header: "Total",
		id: "total",
	}),
];
</script>

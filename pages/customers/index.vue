<template>
	<div class="py-5">
		<div class="flex w-full items-center justify-between">
			<div class="w-4"></div>
			<p class="flex cursor-pointer items-center gap-2 text-sm font-bold text-gray-700">
				Sort By:
				<span class="flex items-center gap-1 font-normal"
					>Date Created Desc <ChevronDownIcon class="text-current inline h-4 w-4 pt-1"
				/></span>
			</p>
			<Button color="blue" variant="default">New Customer</Button>
		</div>
		<div class="h-2"></div>
		<Table :data="customersData" :columns="columns" />
		<div class="flex w-full items-center justify-between">
			<p class="text-sm font-medium text-gray-700">Showing 1 to 20 of 197 results</p>
			<Pagination />
		</div>
	</div>
</template>

<script setup lang="tsx">
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

import { createColumnHelper } from "@tanstack/table-core";

interface Customer {
	partnerCust: string;
	cust: string;
	company: string;
	name: string;
	email: string;
	dateCreated: string;
	dateLastPurchased: string;
	sales: string;
}
const createCustomersData = (count: number): Customer[] =>
	new Array(count).fill({
		partnerCust: "zc00234",
		cust: "zc00234",
		company: "Ajax Global",
		name: "Bishow Pandey",
		email: "jan@tanstack.com",
		dateCreated: "2017/01/01",
		dateLastPurchased: "2017/01/01",
		sales: "$1,000,000",
	});

const customersColumnHelper = createColumnHelper<Customer>();

const customersData = createCustomersData(50);

const columns = [
	customersColumnHelper.accessor(a => a.partnerCust, {
		cell: params => params.getValue(),
		header: "Partner Cust #",
		id: "zc00234",
	}),
	customersColumnHelper.accessor(a => a.cust, {
		cell: params => params.getValue(),
		header: "Cust #",
		id: "zc00234",
	}),
	customersColumnHelper.accessor(a => a.company, {
		cell: params => params.getValue(),
		header: "Company",
		id: "company",
	}),
	customersColumnHelper.accessor(a => a.name, {
		cell: params => params.getValue(),
		header: "Name",
		id: "name",
	}),
	customersColumnHelper.accessor(a => a.email, {
		cell: params => (
			<a class="underline" href={`mailto:${params.getValue()}`}>
				{params.getValue()}
			</a>
		),
		header: "Email",
		id: "email",
	}),
	customersColumnHelper.accessor(a => a.dateCreated, {
		cell: params => params.getValue(),
		header: "Date Created",
		id: "dateCreated",
	}),
	customersColumnHelper.accessor(a => a.dateLastPurchased, {
		cell: params => params.getValue(),
		header: "Date Last Purchased",
		id: "dateLastPurchased",
	}),
	customersColumnHelper.accessor(a => a.sales, {
		cell: params => params.getValue(),
		header: "Sales",
		id: "sales",
	}),
];
</script>

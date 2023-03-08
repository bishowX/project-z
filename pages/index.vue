<template>
	<div>
		<div class="h-10"></div>
		<div class="flex w-full items-center justify-between">
			<div class="flex items-center gap-4">
				<Button variant="inverse" color="blue">View Customers</Button>
				<Button variant="inverse" color="blue">View Quotes & Orders</Button>
			</div>
			<div class="flex items-center gap-4">
				<Button color="blue">New Customer</Button>
				<Button color="gray">Get UC Specialist Support</Button>
			</div>
		</div>
		<div class="h-6"></div>
		<Tab :tab-list="tabList" variant="vertical">
			<template #tabPanel-1> <Table :data="quotes" :columns="quotesColumns" /> </template>
			<template #tabPanel-2> <Table :data="customers" :columns="customersColumns" /> </template>
		</Tab>
		<div class="flex flex-col justify-center gap-8 px-2 py-2">
			<div class="flex flex-col items-start gap-4 self-stretch">
				<div
					class="box-border flex items-center justify-between gap-2 self-stretch border-b border-gray-200 py-2"
				>
					<h1 class="text-[24px] leading-[32px] text-blue-600">Product Categories</h1>
				</div>
				<div class="flex w-full flex-wrap items-start justify-center gap-4 self-stretch">
					<cardCategory name="Wireless Headsets" link="/products?category=wireless-headsets" />
					<cardCategory name="Wireless Headsets" link="/products?category=wireless-headsets" />
					<cardCategory name="Wireless Headsets" link="/products?category=wireless-headsets" />
					<cardCategory name="Wireless Headsets" link="/products?category=wireless-headsets" />
					<cardCategory name="Wireless Headsets" link="/products?category=wireless-headsets" />
					<cardCategory name="Wireless Headsets" link="/products?category=wireless-headsets" />
					<cardCategory name="Wireless Headsets" link="/products?category=wireless-headsets" />
					<cardCategory name="Wireless Headsets" link="/products?category=wireless-headsets" />
				</div>
			</div>
			<div class="flex flex-col items-start gap-4 self-stretch">
				<div
					class="box-border flex items-center justify-between gap-2 self-stretch border-b border-gray-200 py-2"
				>
					<h1 class="text-[24px] leading-[32px] text-blue-600">Featured Products</h1>
					<Button color="blue" variant="inverse">View All</Button>
				</div>
				<div class="flex w-full items-start justify-center gap-4 self-stretch">
					<cardProduct />
					<cardProduct />
					<cardProduct />
				</div>
			</div>
			<div class="bg-white p-2">
				<inputTextField label="First Name" type="text" varient="outlined" />
			</div>
		</div>
		<div class="flex flex-wrap items-center gap-4 p-20">
			<h1 class="text-4xl text-blue-700">This is index page</h1>
			<Button color="yellow" variant="default">Click Please</Button>
			<Button color="yellow" variant="inverse">Click Please</Button>
			<Button color="blue" variant="default">Click Please</Button>
			<Button color="blue" variant="inverse">Click Please</Button>

			<Button color="yellow" variant="default" disabled>Click Please</Button>
			<Button color="yellow" variant="inverse" disabled>Click Please</Button>
			<Button color="blue" variant="default" disabled>Click Please</Button>
			<Button color="blue" variant="inverse" disabled>Click Please</Button>

			<Button color="green" variant="default">Click Please</Button>
			<Button color="green" variant="inverse">Click Please</Button>
			<Button color="green" variant="default" disabled>Click Please</Button>
			<Button color="green" variant="inverse" disabled>Click Please</Button>

			<Button color="red" variant="default">Click Please</Button>
			<Button color="red" variant="default">Click Please</Button>
			<Button color="red" variant="inverse" disabled>Click Please</Button>
			<Button color="red" variant="inverse" disabled>Click Please</Button>

			<Button color="gray" variant="default">Click Please</Button>
			<Button color="gray" variant="default" disabled>Click Please</Button>
			<Button color="gray" variant="inverse">Click Please</Button>
			<Button color="gray" variant="inverse" disabled>Click Please</Button>
		</div>
	</div>
</template>

<script setup lang="tsx">
import { createColumnHelper } from "@tanstack/table-core";
import UsersIcon from "~~/icons/users-icon.vue";
import DocumentTextIcon from "~~/icons/document-text-icon.vue";
import QuoteReadinessGoIcon from "~~/icons/quote-readiness-go-icon.vue";
import QuoteReadinessPauseIcon from "~~/icons/quote-readiness-pause-icon.vue";

interface Quote {
	order: string;
	customer: string;
	company: string;
	name: string;
	reference: string;
	status: string;
	closeDate: string;
	total: string;
	readiness: string;
}

interface Customer {
	uc: string;
	company: string;
	name: string;
	email: string;
	dateCreated: string;
	dateLastPurchased: string;
	sales: string;
}

const createCustomersData = (count: number) =>
	new Array(count).fill({
		uc: "zc00234",
		company: "Ajax Global",
		name: "Bishow Pandey",
		email: "jan@tanstack.com",
		dateCreated: "2017/01/01",
		dateLastPurchased: "2017/01/01",
		sales: "$1,000,000",
	});

const createQuotesData = (count: number) =>
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
			readiness: Math.random() <= 0.1 ? "go" : "pause",
		},
		0,
		count
	);

const quotes: Quote[] = createQuotesData(5);
const customers: Customer[] = createCustomersData(5);

const quotesColumnHelper = createColumnHelper<Quote>();
const customersColumnHelper = createColumnHelper<Customer>();

const quotesColumns = [
	quotesColumnHelper.accessor(a => a.order, {
		cell: params => <span class="underline">{params.getValue()}</span>,
		header: "Order",
		id: "order",
	}),
	quotesColumnHelper.accessor(a => a.customer, {
		cell: params => <span class="underline">{params.getValue()}</span>,
		header: "Customer",
		id: "customer",
	}),
	quotesColumnHelper.accessor(a => a.readiness, {
		cell: params =>
			params.getValue() === "go" ? (
				<QuoteReadinessPauseIcon />
			) : params.getValue() === "pause" ? (
				<QuoteReadinessGoIcon />
			) : (
				"nothing"
			),
		header: "🤟",
		id: "readiness",
	}),
	quotesColumnHelper.accessor(a => a.company, {
		cell: params => params.getValue(),
		header: "Company",
		id: "company",
	}),
	quotesColumnHelper.accessor(a => a.name, {
		cell: params => params.getValue(),
		header: "Name",
		id: "name",
	}),
	quotesColumnHelper.accessor(a => a.reference, {
		cell: params => params.getValue(),
		header: "Reference",
		id: "refernece",
	}),
	quotesColumnHelper.accessor(a => a.status, {
		cell: params => params.getValue(),
		header: "Status",
		id: "status",
	}),
	quotesColumnHelper.accessor(a => a.closeDate, {
		cell: params => params.getValue(),
		header: "Close Date",
		id: "closeDate",
	}),
	quotesColumnHelper.accessor(a => a.total, {
		cell: params => params.getValue(),
		header: "Total",
		id: "total",
	}),
];

const customersColumns = [
	customersColumnHelper.accessor(a => a.uc, {
		cell: params => params.getValue(),
		header: "Uc #",
		id: "uc",
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
		cell: params => params.getValue(),
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

const tabList = [
	{
		label: "Recent Customers",
		icon: DocumentTextIcon,
	},
	{
		label: "Recent Customers",
		icon: UsersIcon,
	},
];
</script>

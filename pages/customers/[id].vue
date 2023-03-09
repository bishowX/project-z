<template>
	<div class="py-12">
		<div class="grid grid-cols-12 gap-4">
			<div class="col-span-6">
				<InputTextField label="Refernce Account ID" />
			</div>
			<div class="col-span-6">
				<InputTextField label="Extension Data 1" />
			</div>
			<div class="col-span-6">
				<InputTextField label="Email Address" />
			</div>
			<div class="col-span-6">
				<InputTextField label="Phone" />
			</div>

			<div class="col-span-4">
				<InputTextField label="Company" />
			</div>
			<div class="col-span-4">
				<InputTextField label="First Name" />
			</div>
			<div class="col-span-4">
				<InputTextField label="Last Name" />
			</div>

			<div class="col-span-12 mt-7 grid grid-cols-12 gap-x-20 gap-y-4">
				<div class="col-span-6 space-y-4">
					<div class="flex items-center gap-1 border-b border-b-gray-100 py-2">
						<BillToIcon />
						<h2 class="text-lg font-medium leading-8 text-gray-500">Billing Information</h2>
					</div>
					<div class="col-span-12">
						<InputTextField label="Address 1" />
					</div>
					<div class="col-span-12">
						<InputTextField label="Address 2" />
					</div>

					<div class="col-span-12 grid grid-cols-12 gap-4">
						<div class="col-span-3">
							<InputTextField label="Country" />
						</div>
						<div class="col-span-3">
							<InputTextField label="City" />
						</div>
						<div class="col-span-3">
							<InputTextField label="State" />
						</div>
						<div class="col-span-3">
							<InputTextField label="Zip" />
						</div>
					</div>
				</div>
				<div class="col-span-6 space-y-4">
					<div class="flex items-center justify-between gap-1 border-b border-b-gray-100 py-2">
						<div class="flex items-center gap-1">
							<TruckIcon />
							<h2 class="text-lg font-medium leading-8 text-gray-500">Shipping Information</h2>
							<div class="rounded-md bg-gray-200 py-1 px-2 text-xs text-gray-800">5</div>
						</div>
						<div class="flex items-center gap-2">
							<button><EyeIcon class="h-6 w-6 text-gray-400 hover:text-gray-500" /></button>
							<button><PlusCircleIcon class="h-6 w-6 text-gray-400 hover:text-gray-500" /></button>
						</div>
					</div>
					<div class="col-span-12">
						<InputTextField v-model="billingAddress1" label="Address 1" />
					</div>
					<div class="col-span-12">
						<InputTextField label="Address 2" />
					</div>

					<div class="col-span-12 grid grid-cols-12 gap-4">
						<div class="col-span-3">
							<InputTextField label="Country" />
						</div>
						<div class="col-span-3">
							<InputTextField label="City" />
						</div>
						<div class="col-span-3">
							<InputTextField label="State" />
						</div>
						<div class="col-span-3">
							<InputTextField label="Zip" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-6 w-full">
			<div class="w-full border-b border-b-gray-200">
				<div class="flex items-center gap-2">
					<h2 class="text-2xl text-blue-600">Internal Notes</h2>
					<div class="rounded-md bg-gray-200 py-1 px-2 text-xs text-gray-800">5</div>
				</div>
			</div>

			<div class="mt-2 flex min-h-[168px] w-full flex-col gap-3 rounded-md bg-white px-6 py-4">
				<div
					v-for="item in [1, 2]"
					:key="item"
					class="flex w-full items-start gap-2 border-b border-b-gray-200 pb-2"
				>
					<h3 class="text-sm font-bold leading-6 text-gray-500">UC AE:</h3>
					<div>
						<h6 class="text-sm font-normal leading-6 text-gray-500">
							Jan is interested in piloting this equipment, if it works out it could be a 800 device
							deployment.
						</h6>
						<button class="flex items-center gap-1 text-xs font-normal text-gray-400">
							12/01/2022 6:30AM <TrashIcon class="h-4 w-[14px]" />
						</button>
					</div>
				</div>

				<div class="flex w-full items-center justify-center">
					<button><PlusCircleIcon class="h-6 w-6 text-gray-400 hover:text-gray-500" /></button>
				</div>
			</div>
		</div>

		<!-- Documents -->
		<div class="mt-6 w-full">
			<div class="mb-2 w-full border-b border-b-gray-200">
				<h2 class="text-2xl text-brand-500">Documents</h2>
			</div>
			<Table :data="documentsData" :columns="columns" />
			<div class="flex w-full items-center justify-between">
				<p class="text-sm font-medium text-gray-700">
					Showing <span class="font-medium">1</span> to
					<span class="font-medium">{{ documentsData.length }}</span> of
					<span class="font-medium">197</span> results
				</p>
				<Pagination />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { createColumnHelper } from "@tanstack/table-core";
import { PlusCircleIcon, EyeIcon } from "@heroicons/vue/24/solid";

interface Document {
	type: string;
	document: string;
	reference: string;
	status: string;
	lastSaved: string;
	expectedSale: string;
	total: string;
}
const createDocumentsData = (count: number): Document[] =>
	new Array(count).fill({
		type: "Quote",
		document: "zc00234",
		reference: "Georgia Office Opportunity",
		status: "Sent",
		lastSaved: "12/01/2022",
		expectedSale: "12/01/2022",
		total: "$1320.47",
	});

const documentsColumnHelper = createColumnHelper<Document>();

const documentsData = createDocumentsData(10);

const columns = [
	documentsColumnHelper.accessor(a => a.type, {
		cell: params => params.getValue(),
		header: "Type",
		id: "type",
	}),
	documentsColumnHelper.accessor(a => a.document, {
		cell: params => params.getValue(),
		header: "Document #",
		id: "document",
	}),
	documentsColumnHelper.accessor(a => a.reference, {
		cell: params => params.getValue(),
		header: "Reference",
		id: "reference",
	}),
	documentsColumnHelper.accessor(a => a.status, {
		cell: params => params.getValue(),

		header: "Status",
		id: "status",
	}),
	documentsColumnHelper.accessor(a => a.lastSaved, {
		cell: params => params.getValue(),
		header: "Last Saved",
		id: "lastSaved",
	}),
	documentsColumnHelper.accessor(a => a.expectedSale, {
		cell: params => params.getValue(),
		header: "Expected Sale",
		id: "expectedSale",
	}),
	documentsColumnHelper.accessor(a => a.total, {
		cell: params => params.getValue(),
		header: "Total",
		id: "total",
	}),
];

const billingAddress1 = "1234 Mockingbird Lane";
</script>

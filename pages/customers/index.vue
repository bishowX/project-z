<template>
	<Table :data="data" :columns="columns" />
</template>

<script setup lang="ts">
import { createColumnHelper } from "@tanstack/table-core";

type Person = {
	firstName: string;
	lastName: string;
	age: number;
	visits: number;
	status: string;
	progress: number;
};

const columnHelper = createColumnHelper<Person>();

const defaultData: Person[] = [
	{
		firstName: "tanner",
		lastName: "linsley",
		age: 24,
		visits: 100,
		status: "In Relationship",
		progress: 50,
	},
	{
		firstName: "tandy",
		lastName: "miller",
		age: 40,
		visits: 40,
		status: "Single",
		progress: 80,
	},
	{
		firstName: "joe",
		lastName: "dirte",
		age: 45,
		visits: 20,
		status: "Complicated",
		progress: 10,
	},
];

const columns = [
	columnHelper.accessor(a => a.firstName, {
		cell: params => params.getValue(),
		header: "First Name",
		id: "firstName",
	}),
	columnHelper.accessor(a => a.firstName, {
		cell: params => params.getValue(),
		header: "First Name",
		id: "firstName",
	}),
	columnHelper.accessor(a => a.firstName, {
		cell: params => params.getValue(),
		header: "First Name",
		id: "firstName",
	}),
	columnHelper.accessor(a => a.firstName, {
		cell: params => params.getValue(),
		header: "First Name",
		id: "firstName",
	}),
	columnHelper.accessor(a => a.firstName, {
		cell: params => params.getValue(),
		header: "First Name",
		id: "firstName",
	}),
	columnHelper.accessor(a => a.firstName, {
		cell: params => params.getValue(),
		header: "First Name",
		id: "firstName",
	}),
	columnHelper.accessor(a => a.firstName, {
		cell: params => params.getValue(),
		header: "First Name",
		id: "firstName",
	}),
];

const data = ref(defaultData);
</script>

import { CategoryAttributesValue, CategoryManufacturer } from "~~/types/category";

export const categoryAttributesValues: CategoryAttributesValue[] = [
	{
		name: "Price Range",
		values: [
			{
				name: "Under $100",
				value: 100,
			},
			{
				name: "$100 - $250",
				value: 200,
			},
			{
				name: "$250 and up",
				value: 528,
			},
		],
	},
	{
		name: "Brand",
		values: [
			{
				name: "Poly",
				value: 1,
			},
			{
				name: "Logitech",
				value: 2,
			},
			{
				name: "Logitech",
				value: 3,
			},
		],
	},
];

export const categoryManufacturerList: CategoryManufacturer[] = [
	{
		id: 3,
		name: "Jabra",
	},
	{
		id: 33,
		name: "Polycom",
	},
	{
		id: 124,
		name: "AudioCodes",
	},
	{
		id: 126,
		name: "Logitech",
	},
	{
		id: 131,
		name: "HP",
	},
	{
		id: 136,
		name: "Luidia",
	},
	{
		id: 141,
		name: "Extron Electronics",
	},
	{
		id: 197,
		name: "Biamp",
	},
	{
		id: 198,
		name: "Evoko",
	},
	{
		id: 215,
		name: "Bose",
	},
	{
		id: 223,
		name: "Aver",
	},
];

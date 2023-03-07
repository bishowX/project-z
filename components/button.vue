<template>
	<button :class="button({ color, size, variant, className })">
		<slot />
	</button>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
	[
		"inline-flex",
		"gap-2",
		"items-center",
		"cursor-pointer",
		"disabled:cursor-not-allowed",
		"disabled:opacity-70",
		"rounded-md",
		"text-base",
		"font-medium",
		"leading-6",
	],
	{
		variants: {
			color: {
				yellow: [],
				blue: [],
				green: [],
				red: [],
				gray: [],
			},
			variant: {
				default: [],
				inverse: [],
			},
			size: {
				small: ["small"],
				medium: ["px-4", "py-3"],
			},
		},
		compoundVariants: [
			{
				color: "yellow",
				variant: "default",
				class: [
					"bg-yellow-300",
					"text-yellow-900",
					"hover:bg-yellow-400",
					"hover:disabled:bg-300",
					"disabled:bg-yellow-300",
					"disabled:text-yellow-900",
				],
			},
			{
				color: "yellow",
				variant: "inverse",
				class: [
					"bg-white",
					"text-yellow-600",
					"hover:bg-yellow-50",
					"disabled:bg-yellow-300",
					"disabled:text-yellow-900",
				],
			},

			{
				color: "blue",
				variant: "default",
				class: [
					"bg-blue-600",
					"text-blue-50",
					"hover:bg-blue-700",
					"hover:disabled:bg-blue-600",
					"disabled:bg-blue-600",
				],
			},
			{
				color: "blue",
				variant: "inverse",
				class: [
					"bg-white",
					"text-blue-600",
					"hover:bg-blue-50",
					"disabled:text-blue-600",
					"hover:disabled:!bg-white",
					"disabled:bg-white",
				],
			},

			{
				color: "green",
				variant: "default",
				class: [
					"bg-green-600",
					"text-green-50",
					"hover:bg-green-700",
					"hover:disabled:bg-green-600",
					"disabled:bg-green-600",
				],
			},
			{
				color: "green",
				variant: "inverse",
				class: [
					"bg-white",
					"text-green-600",
					"hover:bg-green-50",
					"disabled:text-green-600",
					"hover:disabled:!bg-white",
					"disabled:bg-white",
				],
			},

			{
				color: "red",
				variant: "default",
				class: [
					"bg-red-600",
					"text-red-50",
					"hover:bg-red-700",
					"hover:disabled:bg-red-600",
					"disabled:bg-red-600",
				],
			},
			{
				color: "red",
				variant: "inverse",
				class: [
					"bg-white",
					"text-red-600",
					"hover:bg-red-50",
					"disabled:text-red-600",
					"hover:disabled:!bg-white",
					"disabled:bg-white",
				],
			},

			{
				color: "gray",
				variant: "default",
				class: [
					"bg-gray-600",
					"text-gray-50",
					"hover:bg-gray-700",
					"hover:disabled:bg-gray-600",
					"disabled:bg-gray-600",
				],
			},
			{
				color: "gray",
				variant: "inverse",
				class: [
					"bg-white",
					"text-gray-600",
					"hover:bg-gray-50",
					"disabled:text-gray-600",
					"hover:disabled:!bg-white",
					"disabled:bg-white",
				],
			},
		],
		defaultVariants: {
			color: "blue",
			variant: "default",
			size: "medium",
		},
	}
);

type ButtonProps = VariantProps<typeof button>;

defineProps<{
	color?: ButtonProps["color"];
	size?: ButtonProps["size"];
	variant?: ButtonProps["variant"];
	className?: string;
}>();
</script>

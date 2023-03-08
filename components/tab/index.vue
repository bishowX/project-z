<template>
	<div class="flex w-full items-center justify-between">
		<ul
			class="w-fit list-none gap-6 overflow-auto whitespace-nowrap text-center"
			:class="{
				'flex items-center': variant === 'vertical',
			}"
		>
			<li
				v-for="(tab, index) in tabList"
				:key="index"
				class="flex w-full items-center gap-2 border-b-2 border-b-[rgba(0,0,0,0)] px-1 py-3 text-2xl text-blue-600"
				:class="{ '!border-b-blue-600 ': activeTab === index + 1 }"
			>
				<component :is="tab.icon" />
				<label :for="index.toString()" class="block cursor-pointer">{{ tab.label }}</label>
				<input
					:id="index.toString()"
					v-model="activeTab"
					type="radio"
					:name="`-tab`"
					:value="index + 1"
					class="hidden"
				/>
			</li>
		</ul>
		<NuxtLink :to="viewAllLink"><Button variant="inverse" color="blue">View all</Button></NuxtLink>
	</div>
	<template v-for="(_, index) in tabList">
		<div v-if="index + 1 === activeTab" :key="index" class="flex-grow">
			<slot :name="`tabPanel-${index + 1}`" />
		</div>
	</template>
</template>

<script setup lang="ts">
type TabVariant = "vertical" | "horizontal";

interface TabProps {
	tabList: {
		label: string;
		icon: Component;
	}[];
	variant: TabVariant;
	viewAllLink: string;
	onChange: (value: number) => void;
}

const props = defineProps<TabProps>();

const activeTab = ref(1);

watch([activeTab], value => {
	props.onChange(value[0]);
});
</script>

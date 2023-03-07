<template>
	<div>
		<div class="flex flex-col justify-center gap-8 px-2 py-2">
			<div class="flex flex-col items-start gap-4 self-stretch">
				<div
					class="box-border flex items-center justify-between gap-2 self-stretch border-b border-gray-200 py-2"
				>
					<h1 class="text-[24px] leading-[32px] text-blue-600">Product Categories</h1>
				</div>
				<div class="flex w-full items-start justify-center gap-4 self-stretch">
					<cardCategory />
					<cardCategory />
					<cardCategory />
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

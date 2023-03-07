<template>
	<div class="nav-box-shadow flex justify-center bg-white">
		<div class="flex w-full max-w-[1512px] items-center justify-between gap-8 px-8 py-6 lg:h-[116px]">
			<a href="/">
				<img
					style="max-width: 240px"
					class="hidden lg:block"
					src="https://www.unifiedcommunications.com/skins/Skin_1/img/logo.png"
				/>
				<img
					style="max-width: 180px"
					class="lg:hidden"
					src="https://www.unifiedcommunications.com/skins/Skin_1/img/logo.png"
				/>
				<h3 class="text-[14px] font-bold uppercase leading-[20px]">ZOOM AE PORTAL</h3>
			</a>
			<NavbarSearchbar />
			<NavbarUser />
			<navbarChat />
			<NavbarWithStat />
		</div>
	</div>
</template>

<style scoped>
.nav-box-shadow {
	box-shadow: 1px 1px 5px #0005;
}
</style>

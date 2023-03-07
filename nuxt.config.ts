// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	typescript: {
		shim: false,
	},

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: [
		{ path: "~/components", extensions: ["vue"] },
		{ path: "~/icons", extensions: ["vue"] },
	],

	modules: ["@nuxtjs/tailwindcss"],
});

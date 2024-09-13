// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-04-03',
//   devtools: { enabled: true }
// })

export default {
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },

	// Подключение глобального CSS
	css: [
		'@/public/css/main.css', // Замените на путь к вашему файлу CSS
	],

	// Настройка head для подключения JavaScript
	head: {
		script: [
			{ src: '/js/main.js', body: true }, // Замените на путь к вашему файлу JS
		],
		// link: [
		// 	{ rel: 'stylesheet', href: '/css/another-style.css' }, // Пример подключения CSS через link
		// ],
	},

	modules: ['@nuxt/image'],
};

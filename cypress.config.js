const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {},
	},
	appUrl: "https://www.saucedemo.com/",
	standardUser: "standard_user",
	password: "secret_sauce",
	chromeWebSecurity: false,
	retries: 1,
	trashAssetsBeforeRuns: true,
});

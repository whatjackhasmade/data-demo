const path = require("path");

const buildPath = (stringDirectory) =>
	path.resolve(__dirname + `/` + stringDirectory);

module.exports = {
	webpack: (config) => {
		config.resolve.alias["data-interchange"] = buildPath("src");
		config.resolve.alias["atoms"] = buildPath("src/atoms");
		config.resolve.alias["particles"] = buildPath("src/particles");

		return config;
	},
};

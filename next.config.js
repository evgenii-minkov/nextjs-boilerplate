module.exports = {
	env: {
		
	},

	reactStrictMode: true,

	module: {
		rules: [

			{ test: /\.tsx?$/, loader: "ts-loader" }, 

			{ test: /\.scss$/, use: [ 
				{ loader: "style-loader" },
				{ loader: "css-modules-typescript-loader"}, 
				{ loader: "css-loader", options: { modules: true } }, 
				{ loader: "sass-loader" },
			] }, 

		]
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: { svgProps: { "aria-hidden": "true" } }
				},
				{
					loader: "svgo-loader",
					options: {
						multipass: true,
						plugins: [
							{
								name: "preset-default",
								params: {
									overrides: {
										convertPathData: { floatPrecision: 2 },
										removeViewBox: false
									}
								}
							},
							"removeDimensions",
							"prefixIds",
							"removeXMLNS",
							{
								name: "removeAttributesBySelector",
								params: {
									selector: "svg",
									attributes: ["class", "style", "xml:space"]
								}
							}
						]
					}
				}
			]
		});

		config.mode = process.env.NODE_ENV;

		return config;
	}
};

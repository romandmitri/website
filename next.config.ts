import type { NextConfig } from "next";

const { version } = require("./package.json");

const nextConfig: NextConfig = {
	allowedDevOrigins: ["*", "*.*.*.*"],
	env: {
		APP_VERSION: version,
	},
};

export default nextConfig;

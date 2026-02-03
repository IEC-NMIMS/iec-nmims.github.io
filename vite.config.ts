import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					// Split vendor libraries into a separate chunk
					if (id.includes("node_modules")) {
						if (
							id.includes("@mui") ||
							id.includes("emotion") ||
							id.includes("@use-gesture")
						) {
							return "ui-vendor";
						}
						if (
							id.includes("framer-motion") ||
							id.includes("ogl") ||
							id.includes("motion") ||
							id.includes("react-material-ui-carousel")
						) {
							return "animation-vendor";
						}
						return "vendor";
					}
					// Split components by section for better caching
					if (id.includes("Components")) {
						if (
							id.includes("Events") ||
							id.includes("Inceptio") ||
							id.includes("Unplanned")
						) {
							return "events";
						}
						if (
							id.includes("Speaker") ||
							id.includes("Sponsors") ||
							id.includes("InnoVision")
						) {
							return "features";
						}
						if (id.includes("WhoAreWe") || id.includes("OurTeam")) {
							return "about";
						}
					}
				},
			},
		},
		chunkSizeWarningLimit: 1000, // Increase warning threshold since chunks will be smaller
	},
});

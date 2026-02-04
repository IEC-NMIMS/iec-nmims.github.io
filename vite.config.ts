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
				},
			},
		},
		chunkSizeWarningLimit: 1000, // Increase warning threshold since chunks will be smaller
	},
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	root: "src",
	base: "",
	build: {
		minify: true,
		outDir: "../dist",
		rollupOptions: {
			input: {
				main: "src/index.html",
				admin: "src/admin/index.html",
			},
		},
	},
	css: {
		modules: {
			scopeBehaviour: "global",
		},
	},
});

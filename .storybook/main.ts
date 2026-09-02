import type { StorybookConfig } from "@storybook/svelte-vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { fileURLToPath } from "node:url";

const srcDir = fileURLToPath(new URL("../src", import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts|svelte)"],
  addons: [
    "@storybook/addon-svelte-csf",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/svelte-vite",
    options: {
      // The docgen plugin tries to statically parse every `.svelte` file
      // (including `.stories.svelte`) as TS, which fails on Svelte template
      // markup. We disable it and define `argTypes` manually per story.
      docgen: false,
    },
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    // Resolve path aliases exactly like tsconfig.json (relative to ./src)
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": srcDir,
      "@assets": fileURLToPath(new URL("../src/assets", import.meta.url)),
      "@components": fileURLToPath(
        new URL("../src/components", import.meta.url),
      ),
      "@config": fileURLToPath(new URL("../src/config", import.meta.url)),
      "@core": fileURLToPath(new URL("../src/core", import.meta.url)),
      "@layouts": fileURLToPath(new URL("../src/layouts", import.meta.url)),
      "@data": fileURLToPath(new URL("../src/core/data", import.meta.url)),
      "@i18n": fileURLToPath(new URL("../src/i18n", import.meta.url)),
      "@interfaces": fileURLToPath(
        new URL("../src/core/interfaces", import.meta.url),
      ),
      "@stores": fileURLToPath(new URL("../src/stores", import.meta.url)),
      "@utils": fileURLToPath(new URL("../src/core/utils", import.meta.url)),
      "@validators": fileURLToPath(
        new URL("../src/core/validators", import.meta.url),
      ),
    };

    // Compile `.svelte` files (components and `.stories.svelte`). The
    // `@storybook/svelte-vite` framework declares `@sveltejs/vite-plugin-svelte`
    // as a peer dependency but does not register it, so Storybook's Vite config
    // never runs the Svelte compiler. Without it, `.stories.svelte` sources
    // reach the addon-svelte-csf transform un-compiled and Rollup fails to
    // parse the Svelte template markup ("Expression expected"). The Svelte
    // plugins are unshifted to the front so their compile hook runs before the
    // addon's transform plugin (which expects the compiled JS output).
    config.plugins = config.plugins ?? [];
    config.plugins.unshift(...svelte());

    // Enable Tailwind (v4) for Storybook builds
    const tailwindCss = await import("@tailwindcss/vite");
    config.plugins = config.plugins ?? [];
    config.plugins.push(tailwindCss.default());

    return config;
  },
};

export default config;

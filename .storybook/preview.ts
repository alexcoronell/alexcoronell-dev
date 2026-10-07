import type { Preview } from "@storybook/svelte-vite";
import "../src/styles/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#050508" }],
    },
  },
};

export default preview;

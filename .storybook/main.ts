import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // Add story files deliberately to control billed snapshot usage.
  stories: ["../src/StatusCard.stories.tsx"],
  framework: "@storybook/react-vite",
};

export default config;

import type { Preview } from "@storybook/react-vite";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraProvider value={defaultSystem}>
        <Story />
      </ChakraProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default preview;

import { Box, ChakraProvider, Heading, Text, defaultSystem } from "@chakra-ui/react";
import { StatusCard } from "./StatusCard";

export default function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box minHeight="100vh" background="gray.50" padding="8">
        <Heading size="lg" marginBottom="2">
          Storybook + Chromatic POC
        </Heading>
        <Text color="gray.600" marginBottom="8">
          A small Chakra UI component with visual states to review.
        </Text>
        <StatusCard
          title="Your workspace is ready"
          description="Everything is connected and ready for your next step."
          status="ready"
        />
      </Box>
    </ChakraProvider>
  );
}

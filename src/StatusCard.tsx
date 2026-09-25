import { Badge, Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

export type StatusCardProps = {
  title: string;
  description: string;
  status: "ready" | "attention";
  actionLabel?: string;
};

export function StatusCard({
  title,
  description,
  status,
  actionLabel = "View details",
}: StatusCardProps) {
  const isReady = status === "ready";

  return (
    <Box
      width="100%"
      maxWidth="420px"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="xl"
      background="white"
      boxShadow="sm"
      padding="6"
    >
      <VStack align="stretch" gap="4">
        <Badge alignSelf="start" colorPalette={isReady ? "teal" : "orange"}>
          {isReady ? "Ready" : "Needs attention"}
        </Badge>
        <Box>
          <Heading size="md" marginBottom="2">
            {title}
          </Heading>
          <Text color="gray.600">{description}</Text>
        </Box>
        <Button alignSelf="start" colorPalette={isReady ? "teal" : "orange"} size="sm">
          {actionLabel}
        </Button>
      </VStack>
    </Box>
  );
}

import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusCard } from "./StatusCard";

const meta = {
  title: "Examples/StatusCard",
  component: StatusCard,
  args: {
    title: "Your workspace is ready",
    description: "Everything is connected and ready for your next step.",
    status: "ready",
  },
} satisfies Meta<typeof StatusCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ready: Story = {};

export const Attention: Story = {
  args: {
    title: "Review your settings",
    description: "One setting needs your attention before you continue.",
    status: "attention",
    actionLabel: "Check settings",
  },
};

export const LongContent: Story = {
  args: {
    title: "Your workspace is ready for collaboration",
    description:
      "Invite your teammates, review the latest updates, and keep your shared workspace moving forward with everything in one place.",
  },
};

export const Narrow: Story = {
  parameters: {
    chromatic: {
      modes: {
        narrow: { viewport: 320 },
      },
    },
  },
};

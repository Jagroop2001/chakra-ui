import type { Meta } from "@storybook/react"
import { Box } from "../src"

export default {
  title: "Components / Tag",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { TagBasic as Basic } from "compositions/examples/tag-basic"
export { TagWithAvatar as WithAvatar } from "compositions/examples/tag-with-avatar"
export { TagWithClose as WithClose } from "compositions/examples/tag-with-close"
export { TagWithColors as WithColors } from "compositions/examples/tag-with-colors"
export { TagVariantTable as Variants } from "compositions/examples/tag-variant-table"
export { TagSizeTable as Sizes } from "compositions/examples/tag-size-table"
export { TagWithOverflow as Overflow } from "compositions/examples/tag-with-overflow"

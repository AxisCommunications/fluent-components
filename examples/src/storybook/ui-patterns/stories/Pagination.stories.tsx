import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Pagination } from "../components/composites/Pagination";

/**
 * Pagination Component
 *
 * Table footer pagination compatible with AXIS design system.
 * Recommended when table has 100+ rows with ~50 rows per page.
 *
 * **Fluent Guidelines Applied:**
 * - Flex layout with info and control sections
 * - Previous/Next icon buttons with semantic accessibility
 * - Page selector dropdown for quick navigation
 * - Loading skeleton state
 * - Token-driven spacing and colors
 *
 * <p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=32-701"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>
 */
const meta: Meta<typeof Pagination> = {
  title: "UI patterns/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    isLoading: {
      control: "boolean",
      description:
        "When `true`, renders a loading skeleton in place of the pagination controls.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    currentPage: {
      control: "number",
      description: "Current page number (1-indexed).",
      table: { type: { summary: "number" } },
    },
    totalPages: {
      control: "number",
      description: "Total number of pages available.",
      table: { type: { summary: "number" } },
    },
    nextPage: {
      action: "nextPage",
      description: "Callback invoked to advance to the next page.",
      table: { type: { summary: "() => void" } },
    },
    prevPage: {
      action: "prevPage",
      description: "Callback invoked to go back to the previous page.",
      table: { type: { summary: "() => void" } },
    },
    goToPage: {
      action: "goToPage",
      description: "Callback invoked with the page number to jump to.",
      table: { type: { summary: "(newPage: number) => void" } },
    },
    canGoBackward: {
      control: "boolean",
      description:
        "Whether backward navigation is enabled (disables the previous button when `false`).",
      table: { type: { summary: "boolean" } },
    },
    canGoForward: {
      control: "boolean",
      description:
        "Whether forward navigation is enabled (disables the next button when `false`).",
      table: { type: { summary: "boolean" } },
    },
    total: {
      control: "number",
      description: "Total number of items across all pages.",
      table: { type: { summary: "number" } },
    },
    firstPageRow: {
      control: "number",
      description: "Row number of the first item shown on the current page.",
      table: { type: { summary: "number" } },
    },
    lastPageRow: {
      control: "number",
      description: "Row number of the last item shown on the current page.",
      table: { type: { summary: "number" } },
    },
    rowCounterMsg: {
      control: "text",
      description:
        'Text shown at the bottom describing the visible rows, e.g. "Showing rows X-Y of Z".',
      table: { type: { summary: "string | undefined" } },
    },
    pageCounterMsg: {
      control: "text",
      description: 'Text shown on the page selector, e.g. "Page X of Y".',
      table: { type: { summary: "string | undefined" } },
    },
    className: {
      control: "text",
      description: "Optional CSS class applied to the root element.",
      table: { type: { summary: "string | undefined" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

/**
 * Utility functions for row calculations (typically from shared utils)
 */
const getFirstRowOnPage = (currentPage: number, pageSize: number): number => {
  return (currentPage - 1) * pageSize + 1;
};

const getLastRowOnPage = (
  currentPage: number,
  pageSize: number,
  total: number
): number => {
  return Math.min(currentPage * pageSize, total);
};

/**
 * Default pagination on first page with navigation disabled backward.
 */
export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 25,
    total: 245,
    canGoBackward: false,
    canGoForward: true,
    firstPageRow: 1,
    lastPageRow: 10,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    const pageSize = Math.ceil(args.total / args.totalPages);

    const handleNextPage = () => {
      setCurrentPage((prev) => Math.min(prev + 1, args.totalPages));
    };

    const handlePrevPage = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleGoToPage = (page: number) => {
      if (page >= 1 && page <= args.totalPages) {
        setCurrentPage(page);
      }
    };

    const firstPageRow = getFirstRowOnPage(currentPage, pageSize);
    const lastPageRow = getLastRowOnPage(currentPage, pageSize, args.total);

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        canGoBackward={currentPage > 1}
        canGoForward={currentPage < args.totalPages}
        firstPageRow={firstPageRow}
        lastPageRow={lastPageRow}
        nextPage={handleNextPage}
        prevPage={handlePrevPage}
        goToPage={handleGoToPage}
      />
    );
  },
};

/**
 * Pagination on middle page with both navigation buttons enabled.
 */
export const MiddlePage: Story = {
  args: {
    currentPage: 2,
    totalPages: 20,
    total: 500,
    canGoBackward: true,
    canGoForward: true,
    firstPageRow: 26,
    lastPageRow: 50,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    const pageSize = Math.ceil(args.total / args.totalPages);

    const firstPageRow = getFirstRowOnPage(currentPage, pageSize);
    const lastPageRow = getLastRowOnPage(currentPage, pageSize, args.total);

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        canGoBackward={currentPage > 1}
        canGoForward={currentPage < args.totalPages}
        firstPageRow={firstPageRow}
        lastPageRow={lastPageRow}
        nextPage={() =>
          setCurrentPage((prev) => Math.min(prev + 1, args.totalPages))
        }
        prevPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        goToPage={(page) => {
          if (page >= 1 && page <= args.totalPages) {
            setCurrentPage(page);
          }
        }}
      />
    );
  },
};

/**
 * Pagination on last page with forward navigation disabled.
 */
export const LastPage: Story = {
  args: {
    currentPage: 5,
    totalPages: 5,
    total: 150,
    canGoBackward: true,
    canGoForward: false,
    firstPageRow: 136,
    lastPageRow: 150,
  },
  render: (args) => (
    <Pagination
      {...args}
      nextPage={() => console.log("Next page")}
      prevPage={() => console.log("Previous page")}
      goToPage={(page) => console.log("Go to page:", page)}
    />
  ),
};

/**
 * Loading state with skeleton placeholder.
 */
export const Loading: Story = {
  args: {
    isLoading: true,
    currentPage: 1,
    totalPages: 10,
    total: 100,
    canGoBackward: false,
    canGoForward: true,
    firstPageRow: 1,
    lastPageRow: 10,
  },
  render: (args) => (
    <Pagination
      {...args}
      nextPage={() => console.log("Next page")}
      prevPage={() => console.log("Previous page")}
      goToPage={(page) => console.log("Go to page:", page)}
    />
  ),
};

/**
 * Interactive pagination with full state management.
 * Try using the dropdown selector or navigation buttons to switch pages.
 */
export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 50;
    const total = 100;
    const totalPages = Math.ceil(total / pageSize);

    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    const handleGoToPage = (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };

    const firstPageRow = getFirstRowOnPage(currentPage, pageSize);
    const lastPageRow = getLastRowOnPage(currentPage, pageSize, total);

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        total={total}
        canGoBackward={currentPage > 1}
        canGoForward={currentPage < totalPages}
        firstPageRow={firstPageRow}
        lastPageRow={lastPageRow}
        nextPage={handleNextPage}
        prevPage={handlePrevPage}
        goToPage={handleGoToPage}
      />
    );
  },
};

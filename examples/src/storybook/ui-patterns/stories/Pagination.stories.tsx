import type { Meta, StoryObj } from "@storybook/react";
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
 */
const meta: Meta<typeof Pagination> = {
  title: "UI patterns/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
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

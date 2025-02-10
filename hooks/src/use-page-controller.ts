import { useCallback, useEffect, useRef } from "react";

const calcCurrentPage = (skip: number, take: number) =>
  skip <= 0 ? 0 : Math.floor(skip / take);

const calcSkip = (skip: number, take: number) =>
  calcCurrentPage(skip, take) * take;

interface UsePageControllerOptions {
  // The total number of items we can page over
  readonly total?: number;
  // Offset in items list
  readonly skip: number;
  // Number of items in a page
  readonly take: number;
  // Callback to change the item offset
  readonly setSkip: (value: number) => void;
}

export const usePageController = ({
  total,
  skip,
  take,
  setSkip,
}: UsePageControllerOptions) => {
  const currentPage = calcCurrentPage(skip, take);
  const totalPages =
    total === undefined || total <= 0 ? 1 : Math.ceil(total / take);

  // Keep a ref to the current page
  const pageRef = useRef(currentPage);
  pageRef.current = currentPage;

  // Go to next page but don't go past the total amount
  const nextPage = useCallback(() => {
    if (total === undefined || skip + take > total) {
      return;
    }

    setSkip(calcSkip(skip + take, take));
  }, [setSkip, skip, take, total]);

  // Go to previous page but don't go to negative pages
  const prevPage = useCallback(() => {
    if (skip === 0) {
      return;
    }

    setSkip(calcSkip(skip - take, take));
  }, [setSkip, skip, take]);

  // Go to a specific page
  const goToPage = useCallback(
    (newPage: number) => {
      if (newPage === pageRef.current) {
        return;
      }

      // make sure we don't go out of bounds
      let page = newPage;

      if (newPage < 0) {
        page = 0;
      } else if (newPage > totalPages) {
        page = totalPages - 1;
      }

      setSkip(calcSkip(take * page, take));
    },
    [setSkip, take, totalPages]
  );

  // Go to the first page
  const goToFirstPage = useCallback(() => {
    if (pageRef.current !== 0) {
      setSkip(0);
    }
  }, [setSkip]);

  // Set new total and adjust skip if new total is less than current position
  useEffect(() => {
    // if we were placed out of range, use new total as "current" position
    if (total !== undefined && skip >= total) {
      setSkip(calcSkip(total - 1, take));
    }
  }, [total, setSkip, skip, take]);

  const takeRef = useRef(take);
  useEffect(() => {
    if (take !== takeRef.current) {
      takeRef.current = take;
      setSkip(0);
    }
  }, [setSkip, take]);

  const canGoForward = currentPage < totalPages - 1;
  const canGoBackward = currentPage > 0;
  const pageSize =
    total === undefined ? take : Math.min(take, total - take * currentPage);

  // Persist changes to page size
  return {
    totalPages,
    currentPage,
    pageSize,
    canGoForward,
    canGoBackward,
    nextPage,
    prevPage,
    goToPage,
    goToFirstPage,
  };
};

import { useState, useEffect, useCallback } from "react";
// External libraries
import { useMediaQuery } from "react-responsive";

interface Page {
  initData: Array<any>;
  currentPage: number;
  totalData: number;
  dataPerPage: Array<any>;
  dataPerPageNumber: number;
  pages: number | undefined;
}

export const usePagination = () => {
  //******** Hooks ********//

  const mobile = useMediaQuery({ minWidth: 0, maxWidth: 765 });
  const tablet = useMediaQuery({ minWidth: 766, maxWidth: 1057 });
  const laptop = useMediaQuery({ minWidth: 1058, maxWidth: 1349 });
  const desktop = useMediaQuery({ minWidth: 1350 });

  const [page, setPage] = useState<Page>({
    initData: [],
    currentPage: 1,
    totalData: 0,
    dataPerPage: [],
    dataPerPageNumber: 0,
    pages: undefined,
  });

  //******** Methods ********//

  const setData = useCallback((data: Array<any>) => {
    setPage({ ...page, initData: data, totalData: data.length });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataInitialization = useCallback(
    (dataPage: number) => {
      const pages = Math.ceil(page.totalData / dataPage);
      setPage({
        ...page,
        dataPerPage: page.initData.slice(0, dataPage),
        dataPerPageNumber: dataPage,
        pages,
      });
    },
    [page.initData]
  );

  const rangePage = (itemsPerPage: number, currentPage: number) => {
    const indexLastItem = currentPage * itemsPerPage;
    const indexFirstItem = indexLastItem - itemsPerPage;
    return {
      start: indexFirstItem,
      end: indexLastItem,
    };
  };

  const setNextPage = (currentPage: number) => {
    const { start, end } = rangePage(page.dataPerPageNumber, currentPage);
    const nextDataPerPage = page.initData.slice(start, end);
    setPage({ ...page, dataPerPage: nextDataPerPage });
  };

  //******** Effects ********//

  useEffect(() => {
    if (mobile) {
      dataInitialization(1);
    }
  }, [mobile, dataInitialization]);

  useEffect(() => {
    if (tablet) {
      dataInitialization(4);
    }
  }, [tablet, dataInitialization]);

  useEffect(() => {
    if (laptop) {
      dataInitialization(6);
    }
  }, [laptop, dataInitialization]);

  useEffect(() => {
    if (desktop) {
      dataInitialization(8);
    }
  }, [desktop, page.initData, dataInitialization]);

  //******** States & Actions ********//

  return {
    pages: page.pages,
    dataPerPage: page.dataPerPage,
    setData,
    setNextPage,
  };
};

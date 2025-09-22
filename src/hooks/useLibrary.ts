import mangas from "@/data/mangas";
import router from "@/router";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";

function useLibrary() {
  const MAX_INDEX_MANGAS = 12;
  const MIN_INDEX_MANGAS = 0;
  const filteredMangas = mangas;
  const pages = useMemo(
    () => Math.ceil(filteredMangas.length / MAX_INDEX_MANGAS),
    [filteredMangas]
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const paramPage = searchParams.get("page");
  // useMemo(() => isNaN(parseInt(paramPage!))? 1 : +paramPage!, [paramPage])
  const libraryMangas = useMemo(
    () =>
      filteredMangas.filter(
        (_, index) =>
          index < MAX_INDEX_MANGAS * currentPage &&
          index >= MIN_INDEX_MANGAS + MAX_INDEX_MANGAS * (currentPage - 1)
      ),
    [filteredMangas, currentPage]
  );

  useEffect(() => {
    console.log("PIZZA", paramPage);
    if (isNaN(parseInt(paramPage!)) || +paramPage! > pages || +paramPage! < 1) 
      goPage1()
      else setCurrentPage(+paramPage!);
  }, [paramPage, setCurrentPage]);
  console.log("pages", searchParams.get("page"));

  const goToMangaPage = (uniqueName: string) => {
    router.navigate({ pathname: `/library/${uniqueName}` });
  };

  const setPageNumber = (number: number) => {
    setSearchParams({page: number.toString()})
  }

  const goPage1 = () => {
    setPageNumber(1);
  };

  return { libraryMangas, goToMangaPage, pages, currentPage, setPageNumber};
}

export default useLibrary;

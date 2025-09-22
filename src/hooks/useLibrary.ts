import mangas from "@/data/mangas";
import router from "@/router";
import { useMemo } from "react";

function useLibrary() {
  const MAX_INDEX_MANGAS = 12;
  const MIN_INDEX_MANGAS = 0;
  const filteredMangas = mangas;
  const pages = useMemo(
    () => Math.ceil(filteredMangas.length / MAX_INDEX_MANGAS),
    [filteredMangas]
  );
  const currentPage = 1;
  const libraryMangas = useMemo(
    () =>
      filteredMangas.filter(
        (_, index) =>
          index < MAX_INDEX_MANGAS * currentPage &&
          index >= MIN_INDEX_MANGAS + MAX_INDEX_MANGAS * (currentPage - 1)
      ),
    [filteredMangas, currentPage]
  );
  console.log("pages", pages);

  const goToMangaPage = (uniqueName: string) => {
    router.navigate({ pathname: `/library/${uniqueName}` });
  };

  return { libraryMangas, goToMangaPage, pages, currentPage };
}

export default useLibrary;

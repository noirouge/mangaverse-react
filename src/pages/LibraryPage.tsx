import MangaCard from "@/components/Library/MangaCard";
import Pagination from "@/components/Pagination";
import useLibrary from "@/hooks/useLibrary";

export default function LibraryPage() {

  const {libraryMangas, goToMangaPage, pages, currentPage, setPageNumber} = useLibrary();

  return (
<div className="container mx-auto p-2 flex flex-col">
  {/*---------------------------MANGAS---------------------------*/}
  <div className="flex flex-wrap space-y-6 p-5 justify-center w-full" >
     {
      libraryMangas.map((manga) =>  (
<MangaCard className="lg:w-70 lg:h-90 max-w-70 max-h-90 mr-6 cursor-pointer hover:opacity-70 shadow-lg md:h-60 md:w-40 min-w-40 min-h-60" onClick={() => goToMangaPage(manga.uniqueName)} key={manga.id} manga={manga}/>
      ))
     } 
  </div>
  {/*---------------------------PAGINATION---------------------------*/}
  <div>
<Pagination pages={pages} currentPage={currentPage} setPageNumber={setPageNumber} />
  </div>
    </div>
  )
}

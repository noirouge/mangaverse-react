import { SparklesIcon } from "@heroicons/react/16/solid";
import useTrending from "../hooks/useTrending";
import ListCarrousel from "./Carrousel/ListCarrousel";
import MainCarrousel from "./Carrousel/MainCarrousel";

export default function TreedingSection() {
  const {trendingManga, trendingMangas, isLoanding,setPosition, position} = useTrending();
  return (
    <section > 
    <h2 className="text-yellow-300 font-bold text-2xl flex items-center">
       <SparklesIcon className="w-7 h-7" />
        Trending
    </h2>
    <div className="flex items-center justify-center w-full">
<MainCarrousel isLoading={isLoanding} setPosition={setPosition} trendingManga={trendingManga} trendingMangas={trendingMangas} />
<ListCarrousel isLoading={isLoanding} setPosition={setPosition} position={position} trendingMangas={trendingMangas}/>
    </div>
    </section>
  )
}

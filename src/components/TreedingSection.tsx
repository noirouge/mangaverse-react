import ListCarrousel from "./Carrousel/ListCarrousel";
import MainCarrousel from "./Carrousel/MainCarrousel";

export default function TreedingSection() {
  return (
    <> 
    <h2 className="text-yellow-300 font-bold text-2xl">
        Trending
    </h2>
    <div className="flex">
<MainCarrousel />
<ListCarrousel />
    </div>
    </>
  )
}

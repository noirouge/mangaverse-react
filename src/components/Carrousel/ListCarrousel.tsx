import type { Dispatch, SetStateAction } from "react";
import type { TTrendingManga } from "../../types";
import ItemCarrousel from "./ItemCarrousel";
type TListCarrouselProps = {
  trendingMangas: TTrendingManga[];
  isLoading: boolean;
  setPosition: Dispatch<SetStateAction<number>>;
  position: number;
}
export default function ListCarrousel({trendingMangas, position, setPosition}: TListCarrouselProps) {
  return (
    <div className="ml-1 w-72 rounded-lg shadow-lg bg-black/50 py-2 px-2 space-y-0.5">
      {trendingMangas.map(manga => (
<ItemCarrousel key={manga.position} position={position} treedingManga={manga} setPosition={setPosition}/>
      ))}
    </div>
  )
}

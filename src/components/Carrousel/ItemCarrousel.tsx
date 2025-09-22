import clsx from "clsx";
import styles  from "./ItemCarrousel.module.css";
import type { TTrendingManga } from "../../types";
import type { Dispatch, SetStateAction } from "react";
import StarsRate from "../StarsRate";

type TItemCarrouselProps = {
    treedingManga: TTrendingManga
    position: number;
    setPosition: Dispatch<SetStateAction<number>>;
}

export default function ItemCarrousel({treedingManga, position, setPosition}:TItemCarrouselProps) {
  return (
    <div onClick={() => setPosition(treedingManga.position)} className={clsx('hover:bg-gray-300/10 rounded-lg flex p-1 cursor-pointer', {'bg-gray-200/20': position === treedingManga.position})}>
      <div className="relative">
<img src={treedingManga.portrait} alt="cover-demon-slayer" className="w-14 h-20 rounded-lg shadow-lg"/>
      <p className={clsx('absolute font-black -top-3 left-11', styles[`rank-${treedingManga.position}`] )}>#{treedingManga.position}</p>
      </div>
      <div className="ml-2 w-44 flex flex-col justify-center items-center">
        <span className="font-black ">
          {treedingManga.title}
        </span>
        <StarsRate rate={treedingManga.rate} />
      </div>
      </div>
  )
}

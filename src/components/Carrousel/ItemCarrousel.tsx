import clsx from "clsx";
import styles  from "./ItemCarrousel.module.css";
import { StarIcon as FillStar } from "@heroicons/react/16/solid";
import { StarIcon as EmptyStar } from "@heroicons/react/24/outline";
import type { TTrendingManga } from "../../types";
import type { Dispatch, SetStateAction } from "react";

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
        <span className="flex">
            {Array.from({length: 5}).map((_, index) => 
            index < treedingManga.rate ? 
            (<FillStar key={'star'+index} className="h-5 w-5 text-yellow-300" />): (<EmptyStar key={'star'+index} className="h-5 w-5 text-yellow-300" />)
        )}


        </span>
      </div>
      </div>
  )
}

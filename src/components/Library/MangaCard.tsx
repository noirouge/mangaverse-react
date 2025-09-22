import { tagColor } from "@/helpers";
import type { TManga } from "@/types";
import clsx from "clsx";
import type { MouseEventHandler } from "react";


type TMangaCardProps = {
   className?: string | undefined;
   manga: TManga;
   onClick?: MouseEventHandler<HTMLDivElement>;
}


export default function MangaCard({className, manga, onClick}: TMangaCardProps) {
  return (
    <div className={clsx(className, 'relative')} onClick={onClick}>
        <img src={manga.portrait} className="w-full h-full" alt={`img-${manga.uniqueName}`}/>
        <div className="flex absolute bottom-0 w-full">
    <div className="w-full flex justify-center font-bold uppercase" style={{backgroundColor: tagColor(manga.type)}}>{manga.type}</div>
    <div className="w-full flex justify-center font-bold uppercase" style={{backgroundColor: tagColor(manga.demographic)}}>{manga.demographic}</div>
        </div>
        <div className="absolute top-0 uppercase font-bold w-full line-clamp-1 bg-gradient-to-b from-black to-100% flex justify-center py-3">
            {manga.title} 
        </div>
    </div>
  )
}

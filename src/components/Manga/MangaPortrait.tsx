import { tagColor } from "../../helpers";
import type { TType } from "../../types";

type TMangaPortraitProps = {
    portrait: string;
    _type: TType;
    title: string;
}

export default function MangaPortrait({_type, portrait, title}:TMangaPortraitProps) {
  return (
    <>
        <img src={portrait} className="border-5 border-b-0 w-full rounded-t-2xl" alt={`portrait ${title}`}  style={{borderColor: tagColor(_type)}}/>
        <span className="uppercase flex justify-center font-bold text-3xl rounded-b-2xl" style={{backgroundColor: tagColor(_type)}}>{_type}</span>
    </>
  )
}

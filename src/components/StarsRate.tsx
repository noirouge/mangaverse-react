import { StarIcon as FillStar } from "@heroicons/react/16/solid";
import { StarIcon as EmptyStar } from "@heroicons/react/24/outline";

type TStarsRateProps = {
    rate: number;
};

export default function StarsRate({rate}:TStarsRateProps) {
  return (
   <span className="flex">
            {Array.from({length: 5}).map((_, index) => 
            index < rate ? 
            (<FillStar key={'star'+index} className="h-5 w-5 text-yellow-300" />): (<EmptyStar key={'star'+index} className="h-5 w-5 text-yellow-300" />)
        )}
        </span>
  )
}

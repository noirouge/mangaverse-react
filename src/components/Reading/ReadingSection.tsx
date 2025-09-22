import { BookOpenIcon } from "@heroicons/react/24/outline";
import ItemReading from "./ItemReading";

export default function ReadingSection() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-full">
  <h2 className="text-yellow-300 font-bold text-2xl flex items-center left-0">
       <BookOpenIcon className="w-7 h-7" />
        Continue Reading
    </h2>
      </div>
      <div className="my-2 flex overflow-x-scroll" style={{width: '68rem'}}>
        <div className="flex space-x-2 py-2">

      <ItemReading />
      <ItemReading />
      <ItemReading />
      <ItemReading />
      <ItemReading />
      <ItemReading />
      <ItemReading />
      <ItemReading />
        </div>

      </div>
    </section>
  )
}

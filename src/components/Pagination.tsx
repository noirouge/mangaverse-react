import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

type TPaginationProps = {
    pages: number;
    currentPage: number;
    setPageNumber: (number: number) => void;
}

export default function Pagination({currentPage, pages, setPageNumber}:TPaginationProps) {
  const next = () => setPageNumber(currentPage+1);
const back = () => setPageNumber(currentPage-1);
const goToLast = () => setPageNumber(pages);
const goToFirst = () => setPageNumber(1);
const isFirstPage = currentPage === 1;
const isLastPage = currentPage === pages;
  return (
    <div className="flex w-full justify-center items-center">
      <button className="h-5 w-5 cursor-pointer disabled:text-neutral-700 disabled:cursor-default" disabled={isFirstPage}  onClick={goToFirst}>
      <ChevronDoubleLeftIcon/>
      </button>
      <button className="h-5 w-5 cursor-pointer disabled:text-neutral-700 disabled:cursor-default" disabled={isFirstPage} onClick={back} >
      <ChevronLeftIcon/>
      </button>
        {Array.from({length: pages}).map((_, index) => (
<div key={index} className={clsx('mr-2 cursor-pointer ', index+1 === currentPage? 'font-bold' : 'text-neutral-300 hover:text-white hover:font-medium')} onClick={() => setPageNumber(index+1)}>
    {index+1}
</div>
        ))}

<button className="h-5 w-5 cursor-pointer disabled:text-neutral-700 disabled:cursor-default" onClick={next} disabled={isLastPage}>
      <ChevronRightIcon  />
</button>
<button  className="h-5 w-5 cursor-pointer disabled:text-neutral-700 disabled:cursor-default" onClick={goToLast} disabled={isLastPage}>
         <ChevronDoubleRightIcon />
</button>
    </div>
  )
}

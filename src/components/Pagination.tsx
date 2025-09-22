
type TPaginationProps = {
    pages: number;
    currentPage: number;
}

export default function Pagination({currentPage, pages}:TPaginationProps) {
  return (
    <div className="flex w-full justify-center">
        {Array.from({length: pages}).map((_, index) => (
<div key={index}>
    {index+1}
</div>
        ))}
    </div>
  )
}

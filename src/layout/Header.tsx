

export default function Header() {
  return (
    <header>
        <nav>
            <ul className="flex justify-between items-center gap-3 p-5">
                <li className="text-2xl">Mangaverse</li>
                <li className="w-full flex items-center">
                    <form className="w-full flex items-center">

    <input type="text" placeholder="Search Manga..." className="bg-black border rounded-lg w-full"/>

                    </form>
                </li>
                <li className="">Home</li>
            
                <li className="">Library</li>
                <li className="">Reading</li>

            </ul>
        </nav>
    </header>
  )
}

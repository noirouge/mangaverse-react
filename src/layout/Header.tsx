import router from "../router"


export default function Header() {

  const go = (pathname: string) => {
    router.navigate({pathname: pathname})
  }

  return (
    <header>
        <nav>

            <ul className="flex justify-between items-center gap-3 p-5">
                <li className="text-2xl cursor-pointer" onClick={() => go('/')}>Mangaverse</li>
                <li className="w-full flex items-center">
                    <form className="w-full flex items-center">

    <input type="text" placeholder="Search Manga..." className="bg-black border rounded-lg w-full"/>

                    </form>
                </li>
                <li className="cursor-pointer" onClick={() => go('/')} >Home</li>
            
            
                <li className="cursor-pointer" onClick={() => go('/library')}>Library</li>
                <li className="">Reading</li>

            </ul>
        </nav>
    </header>
  )
}

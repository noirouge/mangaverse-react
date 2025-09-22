import { useParams } from "react-router"
import MangaInfo from "../components/Manga/MangaInfo";

export default function MangaPage() {

  const {id} = useParams();
 console.log("routes",  id)

  return (
    <div className="container mx-auto p-2 flex flex-col">
   <MangaInfo />
    </div>
  )
}

import { useEffect, useState } from "react"
import type { TTrendingManga } from "../types"
import trending from "../data/trending";
import mangas from "../data/mangas";

const trendingMangaNotFound:TTrendingManga = {
    position: 0,
    cover: '/imgs/covers/not-found.png',
    portrait: '/imgs/portraits/not-found.png',
    description: 'Manga Not Found',
    rate: 0,
    title: 'Manga Not Found',
    uniqueName: 'manga-not-found',
    chapters: 0,
};
export default function useTrending(){

    const getTrendingMangas = ():TTrendingManga[] => {
       return trending.map<TTrendingManga>(item => {
            const manga = mangas.find(manga => manga.id == item.mangaId);
            if(manga)
            return {
                position: item.position,
                cover: manga.cover,
                description: manga.description,
                portrait: manga.portrait,
                rate: manga.rate,
                title: manga.title,
                uniqueName: manga.uniqueName,
                chapters: 10,
            }
            
            return {
                ...trendingMangaNotFound,
position: item.position,
            }
        })
    };


    const [trendingMangas] = useState<TTrendingManga[]>(getTrendingMangas());
const [trendingManga, setTrendingManga] = useState<TTrendingManga>(trendingMangaNotFound);
const [position, setPosition] = useState(2); 
const [isLoanding, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
const currentTrendingManga = trendingMangas.find(manga => manga.position === position);
if(currentTrendingManga)
    setTrendingManga(currentTrendingManga);
else
    setTrendingManga(trendingMangaNotFound)

setIsLoading(false);
    }, [position, trendingMangas])

    return {
trendingMangas,
trendingManga,
setPosition,
isLoanding,
position,
    }
};
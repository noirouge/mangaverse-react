import { useParams } from "react-router";
import type { TChapter, TManga } from "../types";
import mangas from "../data/mangas";
import { useEffect, useState } from "react";
import router from "../router";
import chaptersData from "@/data/chapters";

const defaultManga:TManga = {
id: 0,
author: '',
cover: '/imgs/covers/not-found.png',
demographic: 'shounen',
description: '',
genreIds: [],
portrait: '/imgs/portraits/not-found.png',
rate: 0,
status: "ongoing",
title: '',
type:'manga',
uniqueName: '',
date: new Date()
}

export default function useManga(){

    const {id} = useParams();

    const [manga, setManga] = useState<TManga>(defaultManga);
    const [chapters, setChapters] = useState<Omit<TChapter, 'images'>[]>([]);

    
    const findManga = () => {
const currentManga = mangas.find(item => item.uniqueName === id);
if(currentManga)
    setManga(currentManga);
else
    router.navigate({pathname: '/'});
    };

    const findChapters = () => {
setChapters(chaptersData.filter(chapter => {
    if(chapter.mangaId === manga.id)
        return {...chapter, images: []}
}));
    };


useEffect(() => {
    if(manga.uniqueName != id)
findManga();
findChapters();
console.log( 'chapters',chapters)
}, [id, manga]);

    return {
manga,
chapters,
    };
};
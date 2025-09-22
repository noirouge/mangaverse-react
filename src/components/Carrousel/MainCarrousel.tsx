import type { Dispatch, SetStateAction } from 'react';
import type { TTrendingManga } from '../../types';
import styles from './MainCarrousel.module.css';
import clsx from 'clsx';
import router from '../../router';

type TMainCarrouselProps = {
  trendingManga: TTrendingManga;
  trendingMangas: TTrendingManga[];
  isLoading: boolean;
  setPosition: Dispatch<SetStateAction<number>>;
}

export default function MainCarrousel({trendingManga, trendingMangas, setPosition}: TMainCarrouselProps) {
  
  const goToMangaPage = (id: string) => {
    console.log("id", id);
    router.navigate({pathname: `/library/${id}`})
  }

  return (
    <div className={styles.container} onClick={() => goToMangaPage(trendingManga.uniqueName)}>
      <img className={styles.fullSize} src={trendingManga.cover} alt="carrousel-photo" />
      <div className={clsx(styles.fullSize, styles.info)}>
        <div className='absolute bottom-0 mb-8'>
        <h2 className={styles.title}>{trendingManga.title}</h2>
<span className='text-gray-300 font-extrabold text-sm opacity-50'>Chapters: {trendingManga.chapters}</span>
<p className='line-clamp-4 '>
{trendingManga.description}
</p>
            </div>
        </div>
        <div className='absolute bottom-0 space-x-2 w-full flex justify-center items-center mb-1'>
          {trendingMangas.map(manga => (
            <div key={manga.position} onClick={() => setPosition(manga.position)} className={`h-3 w-3 border rounded-full hover:w-4 hover:h-4 z-10 ${manga.position === trendingManga.position&& 'bg-white'}`}></div>
            
          ))}
          </div>
    </div>
  )
}

import { genres } from '../../data';
import useManga from '../../hooks/useManga'
import StarsRate from '../StarsRate';
import TagItem from '../TagItem';
import MangaPortrait from './MangaPortrait';
import { ArrowsUpDownIcon, PlayIcon } from '@heroicons/react/16/solid';

export default function MangaInfo() {
    const {manga, chapters} = useManga();
  return (
    <div className=" w-full rounded-2xl shadow-lg relative overflow-hidden min-h-fit pb-2" style={{height: '810px'}}>
       <div className='flex h-fit m-5'>
        <div className='min-h-96 min-w-70 max-w-70'>
       <MangaPortrait _type={manga.type} portrait={manga.portrait} title={manga.title}/>
        </div>
        <div className='px-5'>
        <h2 className='uppercase font-black text-6xl' style={{fontFamily: 'Trade Winds'}}>{manga.title}</h2>
        <StarsRate rate={manga.rate} />

        <p className='my-5'>{manga.description}</p>
        <div className='space-x-5 mb-5' id='tags'>
<TagItem tag={manga.demographic}/>
<TagItem tag={manga.status}/>
        </div>
        <div className='flex mb-2'><span className='font-bold mr-1'>Author:</span><p>{manga.author}</p></div>
<div>
  <h3 className='font-semibold text-2xl mb-1'>Genres</h3>
  <div className='flex space-x-2'>
    {manga.genreIds.map(genreID => (
      <span key={genreID} className='uppercase rounded-2xl px-2 bg-zinc-500 font-bold text-white shadow-lg'>
        {genres.find(genre => genre.id === genreID)?.name??'Genre Not Found'}
      </span>
    ))}
  </div>
</div>
        </div>
       </div>
       <div className=' shadow-lg rounded-2xl h-78 mx-5 px-2  flex flex-col items-center' style={{backgroundColor: 'oklch(0.22 0.01 360 / 0.95)'}}>
  
  <div className='flex'>
  <h3 className='text-2xl uppercase font-semibold py-2' >Chapters</h3>
<ArrowsUpDownIcon className='h-12 w-12' />
  </div>
<div className='w-full h-68 mb-2 mx-5 rounded-lg overflow-y-auto' style={{backgroundColor: 'oklch(0.27 0.01 0 / 0.77)'}}>
  {
    chapters.length ? chapters.map(chapter => (
      <span key={chapter.number} className='flex items-center justify-between bg-stone-600 rounded-2xl m-2 pl-2 cursor-pointer hover:bg-stone-700'>
    <p className='font-extrabold'>Chapter {chapter.number}: {chapter.title??manga.title}</p>
<PlayIcon className='w-10 h-10' />
  </span>
    )) : (<span> No Chapters Yet</span>)
  }
  
</div>
<div className='flex max-w-full'>

</div>
       </div>
<img className='absolute top-0 w-full h-full -z-10 opacity-10' src={manga.cover} alt='manga-info-img' />
        </div>
  )
}

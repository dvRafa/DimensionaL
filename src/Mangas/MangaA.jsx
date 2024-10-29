import NarutoFront from '../assets/MangasImg/11.jpeg'
import OnePieceFront from '../assets/MangasImg/OnePieceFront.png'
import AOT from '../assets/MangasImg/1111.png'
import Kimetsu from '../assets/MangasImg/1.png'

import { Link } from 'react-router-dom'

const Characters = [
  {
    mangaImg: AOT,
    name: 'Shingeki No Kyojin - Attack On Titan, Volume 16',
    data: 'Captured by Rod Reiss, the rightful king, Krista and Eren finally have their memories back. What exactly happened to Eren, and what was the crime his father...',
    page: '194',
    rating: '16+',
    release: 'August 25, 2015',
    price: '$60',
    alt: 'Shingeki No Kyojin',
    id: 'ShingekiNoKyojin',
    tags: ['Horror', 'Science-Fiction'],
    author: 'Hajime Isayama',
    anime: 'Shingeki No Kyojin',
    type: 'Manga',
  },
  {
    mangaImg: OnePieceFront,
    name: 'One Piece: Doflamingo Appears, Volume 70 - Chapters 691-700',
    data: 'With the escape of the institute in front of it, Caesar makes a strange transformation. Will Luffy shatter his ambitions!?',
    author: 'Eiichiro Oda',
    rating: '16+',
    version: 'Paper Version',
    page: '216',
    release: 'June 4, 2013',
    price: '$45',
    alt: 'One Piece',
    id: 'One-Piece',
    anime: 'One Piece',
    type: 'Manga',
  },
  {
    mangaImg: NarutoFront,
    name: 'Naruto Shippuden: Dream World, Volume 63 - Chapters 598-607',
    data: 'With the help of Kakashi and Guy, Naruto seems to have found a way around Tobis invincible abilities.',
    page: '192',
    release: 'December 28, 2012',
    price: '$50',
    alt: 'Naruto Shippuden',
    id: 'NarutoShippuden',
    anime: 'Naruto Shippuden',
    type: 'Manga',
  },
  {
    mangaImg: Kimetsu,
    name: 'Kimetsu No Yaiba - Demon Slayer: Gaiden Volume',
    data: 'Kimetsu no Yaiba: Gaiden is a volume consisting of Giyu Tomiokas Story and Kyojuro Rengokus Story.',
    page: '215',
    release: 'December 4, 2020',
    price: '$45',
    alt: 'Kimetsu No Yaiba',
    id: 'KimetsuNoYaiba',
    anime: 'Kimetsu No Yaiba',
    type: 'Manga',
  },
]

export default function MangaA() {
  return (
    <div className='px-2'>
      <div className='md:pl-32'>
        <h1 className='md:text-[28px] text-[2rem] md:leading-[32px] leading-[2.5rem] font-semibold tracking-[0.196px] pb-[10px]'>
          Ultimate Collectibles.{' '}
          <span className='text-[#6e6e73]'>
            Manga from the Best Animes Ever!
          </span>
        </h1>
      </div>
      <div className='flex md:pl-32 flex-col md:justify-end mx-auto md:ml-auto md:pr-[25px] pt-10 pb-[80px] overflow-x-auto scrollbar-hide scroll-smooth scroll-container'>
        <div className='flex relative md:gap-x-[20px] gap-x-2 w-[1200px]'>
          {Characters.map((character, index) => (
            <Link
              key={index}
              className='flex'
              to={`/Anime-Goods/Manga/${character.id}`}>
              <img
                alt={character.alt}
                src={character.mangaImg}
                className='w-auto h-[500px] md:h-[600px]'
              />
              <p className='absolute uppercase font-bold bg-black text-white py-[2px] px-2'>
                {character.type}
              </p>
            </Link>
          ))}
        </div>
        {/* <div className='w-fit mx-auto'>
          <Link to='/Anime-Goods/Collectibles/Figures'>
            <button className='mt-[32px] text-[16px] px-8 py-6 border border-stone-700/50 tracking-normal capitalize leading-[16px] inter duration-300 ease-linear transition hover:bg-blue-800/90 hover:text-white cursor-pointer md:mb-0 mb-4'>
              shop collectibles
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  )
}

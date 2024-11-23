import NarutoFront from '../assets/MangasImg/11.webp'
import OnePieceFront from '../assets/MangasImg/OnePieceFront.png'
import AOT from '../assets/MangasImg/1111.webp'
import Kimetsu from '../assets/MangasImg/1.webp'

import { Link } from 'react-router-dom'

const Characters = [
  {
    mangaImg: AOT,
    name: 'Shingeki No Kyojin - Attack On Titan, Volume 16',
    data: 'Captured by Rod Reiss, the rightful king, Krista and Eren finally have their memories back. What exactly happened to Eren, and what was the crime his father...',
    page: '194',
    short: 'AOT',
    rating: '16+',
    release: 'August 25, 2015',
    price: '$60.00',
    alt: 'Shingeki No Kyojin',
    id: 'ShingekiNoKyojin',
    tags: ['Horror', 'Science-Fiction'],
    author: 'Hajime Isayama',
    anime: 'Shingeki No Kyojin',
    type: 'Manga',
    condition: 'NEW',
  },
  {
    mangaImg: OnePieceFront,
    name: 'One Piece: Doflamingo Appears, Volume 70 - Chapters 691-700',
    data: 'With the escape of the institute in front of it, Caesar makes a strange transformation. Will Luffy shatter his ambitions!?',
    author: 'Eiichiro Oda',
    short: 'One Piece',
    rating: '16+',
    version: 'Paper Version',
    page: '216',
    release: 'June 4, 2013',
    price: '$45.00',
    alt: 'One Piece',
    id: 'One-Piece',
    anime: 'One Piece',
    type: 'Manga',
    condition: 'NEW',
  },
  {
    mangaImg: NarutoFront,
    name: 'Naruto Shippuden: Dream World, Volume 63 - Chapters 598-607',
    data: 'With the help of Kakashi and Guy, Naruto seems to have found a way around Tobis invincible abilities.',
    short: 'Naruto',
    page: '192',
    release: 'December 28, 2012',
    price: '$50.00',
    alt: 'Naruto Shippuden',
    id: 'NarutoShippuden',
    anime: 'Naruto Shippuden',
    type: 'Manga',
    condition: 'NEW',
  },
  {
    mangaImg: Kimetsu,
    name: 'Kimetsu No Yaiba - Demon Slayer: Gaiden Volume',
    data: 'Kimetsu no Yaiba: Gaiden is a volume consisting of Giyu Tomiokas Story and Kyojuro Rengokus Story.',
    page: '215',
    short: 'Demon Slayer',
    release: 'December 4, 2020',
    price: '$45.00',
    alt: 'Kimetsu No Yaiba',
    id: 'KimetsuNoYaiba',
    anime: 'Kimetsu No Yaiba',
    type: 'Manga',
    condition: 'NEW',
  },
]

export default function MangaA() {
  return (
    <div className='pt-10 bg-darkbg'>
      <div className='px-2 max-w-[800px] md:text-nowrap'>
        <h1 className='md:text-[28px] exo-2 text-[20px] md:leading-[32px] leading-[30px] tracking-[0.196px] sm:pb-[10px] bg-gradient-to-r from-[#b1dbc2] via-blanco to-[#eff7f2] inline-block text-transparent bg-clip-text'>
          Ultimate Collectibles. Manga from the Best Animes Ever!
        </h1>
      </div>
      <div className='relative px-2 justify-items-center'>
        <div className='md:flex md:flex-row flex flex-col md:gap-x-2 gap-x-0 gap-y-2 pt-[25px] pb-6 md:pb-[115px]'>
          {Characters.map((character, index) => (
            <Link
              to={`/dimm/Manga/${character.id}`}
              key={index}>
              <div className='relative group overflow-hidden flicker-hover'>
                <img
                  alt={character.alt}
                  src={character.mangaImg}
                  className='md:h-[450px] h-[200px] group-hover:opacity-100 laptop:h-screen object-cover group-hover:scale-105 duration-500 transition-all ease-in-out hover:brightness-110 md:grayscale-0 opacity-100 md:opacity-60 group-hover:grayscale-0 group-hover:opacity-500 translate-y-0 md:group-hover:translate-y-[-20px] max-w-none overflow-hidden md:w-full w-screen'
                />
                <span className='absolute left-0 w-fit md:w-full bg-black md:translate-y-full group-hover:translate-y-0 py-4 px-3 transition-transform flex flex-row duration-500 md:group-hover:translate-y-[0px] text-blanco ease-out bottom-0 uppercase text-2xl md:text-[2.5vw] font-bold'>
                  {character.short}
                  <span className='exo-2 text-green text-xs ml-2'>
                    {character.condition}
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <span className='left-3 md:left-6 bg-red-700 hover:bg-red-600 px-2 py-[0.5px] poppins top-[6%] md:top-[5%] absolute text-blanco cursor-pointer'>
          MANGA
        </span>
      </div>
    </div>
  )
}

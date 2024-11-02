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
    rating: '16+',
    release: 'August 25, 2015',
    price: '$60.00',
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
    price: '$45.00',
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
    price: '$50.00',
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
    price: '$45.00',
    alt: 'Kimetsu No Yaiba',
    id: 'KimetsuNoYaiba',
    anime: 'Kimetsu No Yaiba',
    type: 'Manga',
  },
]

export default function MangaA() {
  return (
    <div className='px-2 pt-10'>
      <div className='md:pl-32'>
        <h1 className='md:text-[28px] text-[2rem] md:leading-[32px] leading-[2.5rem] font-semibold tracking-[0.196px] pb-[10px]'>
          Ultimate Collectibles.{' '}
          <span className='text-[#6e6e73]'>
            Manga from the Best Animes Ever!
          </span>
        </h1>
      </div>
      <div className='flex gap-x-[20px] pl-32 pt-[25px] pb-[80px] overflow-x-auto scroll-smooth scroll-container'>
          {Characters.map((character, index) => (
            <Link
            className='w-full'
              key={index}
              to={`/DimensionaL/Manga/${character.id}`}>
              <img
                alt={character.alt}
                src={character.mangaImg}
                className='p-2 bg-slate-100 rounded-2xl shadow-xl hover:shadow-2xl w-full h-[500px] md:h-auto hover:contrast-125 ease-in-out duration-300'
              />
            </Link>
          ))}
      </div>
    </div>
  )
}

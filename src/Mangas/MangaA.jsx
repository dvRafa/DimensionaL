import ShingekiNoKyojin from '../assets/MangasImg/ShingekiNoKyojin.webp'
import OnePiece from '../assets/MangasImg/OnePiece.webp'
import { Link } from 'react-router-dom'

const Characters = [
  {
    images: [ShingekiNoKyojin],
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
  },
  {
    images: [OnePiece],
    name: 'One Piece: Doflamingo Appears, Volume 70 - Chapters 691-700',
    data: 'With the escape of the institute in front of it, Caesar makes a strange transformation. Will Luffy shatter his ambitions!? The sectakehai and Doframingo, which are threaded...',
    author: 'Eiichiro Oda',
    version: 'Paper Version',
    page: '216',
    release: 'June 4, 2013',
    price: '$45',
    alt: 'One Piece',
    id: 'One-Piece',
  },
]

export default function MangaA() {
  return (
    <section className='bg-[#f1f1f1]'>
      <div className='flex md:justify-end md:max-w-[1200px] max-w-[320px] mx-auto md:ml-auto md:pr-[25px] pt-20 mt-20 pb-20'>
        <div className='grid grid-cols-1 gap-y-16'>
          {Characters.map((character, index) => (
            <div className='flex md:flex-row flex-col md:gap-x-2'>
              <div
                key={index}
                className='flex flex-col md:w-[400px] border shadow rounded p-4 bg-white'>
                <p className='md:mb-[32px] mb-[16px] uppercase text-[12px] tracking-[1.32px] leading-[12px] gothic-a1-regular font-semibold text-stone-700/90'>
                  manga
                </p>
                <h1 className='md:mb-[12px] mb-[16px] tracking-normal text-[32px] leading-[38.4px] inter md:tracking-[0px]'>
                  {character.name}
                </h1>
                <p className='mb-[32px] text-[14.5px] tracking-[1.32px] leading-[14.5px] inter'>
                  By {character.author}
                </p>
                <p className='mb-[32px] md:mb-0 leading-[21px] text-[14px] tracking-[0.28px] inter text-stone-700/90'>
                  {character.data}
                </p>
                <Link to='/Anime-Goods/Mangas/Options'>
                  <button className='mt-[32px] text-[16px] px-5 py-5 border border-stone-700/50 tracking-normal capitalize leading-[16px] inter duration-300 ease-linear transition hover:bg-blue-800/90 hover:text-white cursor-pointer md:mb-0 mb-4'>
                    Shop Mangas
                  </button>
                </Link>
              </div>
              <Link to={`/Anime-Goods/Manga/${character.id}`}>
                <div>
                  <img
                    src={character.images}
                    alt={character.alt}
                    className='md:w-[600px] md:h-[500px] md:hover:cursor-pointer h-full w-full border shadow rounded p-4 bg-white'
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

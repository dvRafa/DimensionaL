import OnePiece from '../assets/MangasImg/OnePiece.jpg'

import { Link } from 'react-router-dom'

const Characters = {
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
}

function MangaB() {
  return (
    <div className='md:max-w-[1300px] max-w-[350px] mx-auto pt-[80px] flex flex-col md:flex-row md:pr-[25px] md:gap-x-[25px]'>
      <div>
        <h1 className='md:text-[40px] text-[32px] gothic-a1-light tracking-normal md:leading-[48px] leading-[38.4px] md:mb-[12px] mb-[16px] md:w-[420px]'>
          {Characters.name}
        </h1>
        <p className='text-[14.5px] tracking-[1.32px] leading-[14.5px] gothic-a1-regular'>
          By {Characters.author}
        </p>
      </div>
      <div>
        <div className='md:w-[315px]'>
          <h1 className='md:mb-[32px] mb-[16px] uppercase text-[12px] tracking-[1.32px] leading-[12px] gothic-a1-regular font-semibold text-stone-700/70 text-left'>
            manga
          </h1>

          <p className='leading-[21px] text-[14px] tracking-[0.28px] gothic-a1-regular text-stone-700/80 '>
            {Characters.data}
          </p>
          <Link to={`/Anime-Goods/Manga/B/${Characters.id}`}>
            <button className='mt-[32px] text-[16px] px-8 py-6 w-full border border-stone-700/50 tracking-normal capitalize leading-[16px] gothic-a1-regular font-normal duration-300 ease-linear transition hover:bg-blue-800/90 hover:text-white hover:cursor-pointer'>
              buy now
            </button>
          </Link>
        </div>
        <Link to={`/Anime-Goods/Manga/B/${Characters.id}`}>
          <img
            className='md:h-[650px] md:w-[600px] mt-[32px] hover:cursor-pointer hover:scale-105 duration-300 transform transition-transform'
            src={Characters.images}
            alt={Characters.alt}
          />
        </Link>
      </div>
    </div>
  )
}

export default MangaB

import ShingekiNoKyojin from '../assets/MangasImg/ShingekiNoKyojin.jpg'

import { Link } from 'react-router-dom'

const Characters = {
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
}

export default function MangaA() {
  return (
    <section className='bg-[#f1f1f1]'>
      <div className='flex md:justify-end md:max-w-[1200px] max-w-[320px] mx-auto md:ml-auto md:pr-[25px] pt-20 mt-20'>
        <div className='grid grid-cols-1'>
          <div className='flex md:flex-row flex-col gap-x-[25px] md:gap-x-0'>
            <div className='flex flex-col md:w-[400px] bg-white rounded p-4 border shadow'>
              <p className='md:mb-[32px] mb-[16px] uppercase text-[12px] tracking-[1.32px] leading-[12px] gothic-a1-regular font-semibold text-stone-700/70'>
                manga
              </p>
              <h1 className='md:mb-[12px] mb-[16px] tracking-normal text-[32px] leading-[38.4px] gothic-a1-light md:tracking-[0px]'>
                {Characters.name}
              </h1>
              <p className='mb-[32px] text-[14.5px] tracking-[1.32px] leading-[14.5px] gothic-a1-regular'>
                By {Characters.author}
              </p>
              <p className='mb-[32px] md:mb-0 leading-[21px] text-[14px] tracking-[0.28px] gothic-a1-regular text-stone-700/80'>
                {Characters.data}
              </p>
              <Link to='/Anime-Goods/Mangas/Options'>
                <button
                  className='mt-[32px] text-[16px] px-8 py-6 w-full border border-stone-700/50 tracking-normal capitalize leading-[16px] gothic-a1-regular font-normal duration-300 ease-linear transition hover:bg-blue-800/90 hover:text-white cursor-not-allowed md:mb-0 mb-4'
                  disabled>
                  Shop Mangas
                </button>
              </Link>
            </div>
            <Link to={`/Anime-Goods/Manga/A/${Characters.id}`}>
              <div>
                <img
                  src={Characters.images}
                  alt={Characters.alt}
                  className='md:w-[600px] md:h-[500px] md:hover:cursor-pointer h-full w-full'
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

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

function MangaA() {
  return (
      <div className='flex justify-end md:max-w-[1180px] max-w-[350px] mx-auto md:ml-auto md:pr-[25px] mt-[65px] md:pb-[80px] pb-[20px]'>
        <div className='grid grid-cols-1'>
            <div
              className='flex md:flex-row flex-col gap-x-[25px]'>
              <div className='flex flex-col w-[312px]'>
                <p className='md:mb-[32px] mb-[16px] uppercase text-[12px] tracking-[1.32px] leading-[12px] gothic-a1-regular font-semibold text-stone-700/70'>
                  masterpiece
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
                  <button className='mt-[32px] text-[16px] px-8 py-6 w-full border border-stone-700/50 tracking-normal capitalize leading-[16px] gothic-a1-regular font-normal duration-300 ease-linear transition hover:bg-blue-800/90 hover:text-white cursor-not-allowed md:mb-0 mb-4' disabled>
                    Shop Mangas
                  </button>
                </Link>
              </div>
              <Link to={`/Anime-Goods/Manga/A/${Characters.id}`}>
                <div>
                  <img
                    src={Characters.images}
                    alt={Characters.alt}
                    className='md:w-[535px] md:h-[760px] md:object-cover md:hover:cursor-pointer h-full w-full hover:scale-105 duration-300 transform transition-transform'
                  />
                </div>
              </Link>
            </div>
            </div>
        </div>
  )
}

export default MangaA

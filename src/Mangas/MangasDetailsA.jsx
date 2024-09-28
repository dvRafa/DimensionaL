import ShingekiNoKyojin from '../assets/MangasImg/ShingekiNoKyojin.jpg'

import { useParams, Link } from 'react-router-dom'

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

export default function MangasDetailsA() {

  return (
    <div>
      <div className='my-24'>
        <div className='md:max-w-[1000px] max-w-[320px] mx-auto'>
          <div className='flex md:flex-row flex-col justify-between'>
            <div className='w-[370px]'>
              <div className='w-fit'>
                <Link to='/Anime-Goods/'>
                  <svg
                    className='h-6 w-6 hover:cursor-pointer hover:opacity-50 duration-200 ease-in-out transition-opacity md:visible invisible'
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'>
                    <g
                      id='SVGRepo_bgCarrier'
                      strokeWidth='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      strokeLinecap='round'
                      strokeLinejoin='round'></g>
                    <g id='SVGRepo_iconCarrier'>
                      {' '}
                      <path
                        d='M5 1H4L0 5L4 9H5V6H11C12.6569 6 14 7.34315 14 9C14 10.6569 12.6569 12 11 12H4V14H11C13.7614 14 16 11.7614 16 9C16 6.23858 13.7614 4 11 4H5V1Z'
                        fill='#00000'></path>
                    </g>
                  </svg>
                </Link>
              </div>
              <h1 className='text-[54px] tracking-normal leading-[66.8px] md:mt-36 gothic-a1-regular'>
                {Characters.name}
              </h1>
              <div className='flex flex-row md:gap-x-8 gap-x-4'>
                <p className='mt-[10px] uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal border-b pb-1'>
                  popular
                </p>
                <p className='mt-[10px] uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal  border-b pb-1'>
                  {Characters.price}
                </p>
                <p className='mt-[10px] uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal  border-b pb-1'>
                  in-stock
                </p>
              </div>
              <div className='flex flex-col mt-[24px]'>
                <h1 className='mb-[2px] uppercase text-[11px] tracking-[1.32px] leading-[14px] gothic-a1-regular font-normal text-stone-700/50'>
                  Description
                </h1>
                <p className='text-[18px] tracking-normal leading-[26.8px] gothic-a1-light'>
                  {Characters.data}
                </p>
              </div>
              <div className='flex flex-row mt-16'>
                <p className='text-[16px] px-8 py-6 border border-stone-700 tracking-normal uppercase leading-[16px] gothic-a1-regular font-normal duration-200 ease-in-out hover:bg-blue-800/90 transition-colors hover:text-white hover:cursor-pointer'>
                  {Characters.price} USD
                </p>
                <a
                  className='text-[16px] border-y border-r py-6 border-stone-700/50 border-opacity-50 px-8 lowercase leading-[12px] tracking-[1.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:tracking-[3px] duration-200 ease-in-out hover:bg-blue-800/90 transition-colors hover:text-white'
                  href='https://instagram.com/thenotoriousrafa'
                  rel='noopener nonrefereer'
                  target='_blank'>
                  instagram
                </a>
              </div>
            </div>
            <div>
              <img
                alt={Characters.alt}
                src={Characters.images[0]}
                className='w-full h-[300px] md:mt-0 mt-6'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

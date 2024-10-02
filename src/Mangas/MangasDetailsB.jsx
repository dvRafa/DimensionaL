import OnePiece from '../assets/MangasImg/OnePiece.jpg'

import { useParams, Link } from 'react-router-dom'

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

export default function MangasDetailsB() {
  const { id } = useParams()

  return (
    <div className='md:max-w-[1000px] max-w-[320px] mx-auto my-24'>
      <div className='flex md:flex-row flex-col-reverse justify-between'>
        <div className='md:w-[400px] w-full bg-[#f1f1f1] border rounded shadow p-4'>
          <div className='w-fit'>
            <Link to='/Anime-Goods/'>
              <svg
                className='h-6 w-6 hover:cursor-pointer hover:opacity-50 duration-200 ease-in-out transition-opacity md:visible hidden'
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
          <h1 className='custom-title-manga'>{Characters.name}</h1>
          <div className='flex flex-row md:gap-x-8 gap-x-4'>
            <p className='custom-item-details'>rare</p>
            <p className='custom-item-details'>{Characters.price} USD</p>
            <p className='custom-item-details'>in-stock</p>
            <p className='custom-item-details'>pages {Characters.page}</p>
          </div>
          <div className='flex flex-col mt-[24px]'>
            <h1 className='custom-description'>Description</h1>
            <p className='custom-anime'>{Characters.data}</p>
          </div>
          <div className='flex flex-row mt-16'>
            <a
              className='text-[16px] border py-6 border-stone-700/50 border-opacity-50 px-8 lowercase leading-[12px] tracking-[1.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:tracking-[3px] duration-200 ease-in-out hover:bg-blue-800/90 transition-colors hover:text-white'
              href='https://wa.me/50764245895'
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Whatsapp Number'>
              whatsapp
            </a>
            <a
              className='text-[16px] border-y border-r py-6 border-stone-700/50 border-opacity-50 px-8 lowercase leading-[12px] tracking-[1.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:tracking-[3px] duration-200 ease-in-out hover:bg-blue-800/90 transition-colors hover:text-white'
              href='https://instagram.com/thenotoriousrafa'
              rel='noopener nonrefereer'
              target='_blank'
              aria-label='Instagram account'>
              instagram
            </a>
          </div>
        </div>
        <div>
          <img
            alt={Characters.alt}
            src={Characters.images[0]}
            className='md:w-[550px] w-full md:h-[664px] h-[300px] mb-6 md:mb-0'
          />
        </div>
      </div>
    </div>
  )
}

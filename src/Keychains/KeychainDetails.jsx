import Chopper from '../assets/KeychainsImg/Chopper.webp'
import Zoro from '../assets/KeychainsImg/zoro.webp'
import Luffy from '../assets/KeychainsImg/Luffy.webp'
import Vegeta from '../assets/KeychainsImg/Vegeta.webp'
import Ussop from '../assets/KeychainsImg/Ussop.webp'

import { useParams, Link } from 'react-router-dom'

const Characters = [
  {
    name: 'Tony Chopper',
    price: '$15',
    images: [Chopper],
    alt: 'Tony Chopper "Samurai"',
    data: 'One Piece',
    design: '3D View',
    id: 'chopper-popular',
  },
  {
    name: 'Monkey D. Luffy',
    price: '$15',
    images: [Luffy],
    alt: 'Monkey D. Luffy',
    data: 'One Piece',
    design: '3D View',
    id: 'luffy-popular',
  },
  {
    name: 'Roronoa Zoro',
    price: '$15',
    images: [Zoro],
    alt: 'Roronoa Zoro',
    data: 'One Piece',
    design: '3D View',
    id: 'zoro-popular',
  },
  {
    name: 'Vegeta',
    price: '$15',
    images: [Vegeta],
    alt: 'Vegeta',
    data: 'Dragon Ball Z',
    design: '3D Model',
    id: 'vegeta-popular',
  },
  {
    name: 'Ussop',
    price: '$15',
    images: [Ussop],
    alt: 'Ussop',
    data: 'One Piece',
    design: '3D View',
    id: 'ussop-popular',
  },
]

export default function KeychainsDetails() {
  const { id } = useParams()
  const character = Characters.find((character) => character.id === id)

  return (
        <div className='md:max-w-[1000px] max-w-[360px] mx-auto my-24'>
          <div className='flex md:flex-row flex-col justify-between'>
            <div className='w-[320px]'>
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
              <h1 className='text-[64px] tracking-normal leading-[76.8px] md:mt-36 gothic-a1-regular'>
                {character.name}
              </h1>
              <div className='flex flex-row md:gap-x-8 gap-x-4'>
                <p className='mt-[10px] uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal border-b pb-1'>
                  popular
                </p>
                <p className='mt-[10px] uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal  border-b pb-1'>
                  {character.price}
                </p>
                <p className='mt-[10px] uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal  border-b pb-1'>
                  in-strock
                </p>
                <p className='mt-[10px] uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal  border-b pb-1'>
                  {character.design}
                </p>
              </div>
              <div className='flex flex-col mt-[24px]'>
                <h1 className='mb-[2px] uppercase text-[11px] tracking-[1.32px] leading-[14px] gothic-a1-regular font-normal text-stone-700/50'>
                  Description
                </h1>
                <p className='text-[20px] tracking-normal leading-[28.8px] gothic-a1-light'>
                  {character.data}
                </p>
              </div>
              <div className='flex flex-row mt-16'>
                <p className='text-[16px] px-8 py-6 border border-stone-700 tracking-normal uppercase leading-[16px] gothic-a1-regular font-normal duration-200 ease-in-out hover:bg-blue-800/90 transition-colors hover:text-white hover:cursor-pointer'>
                  {character.price} USD
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
                alt={character.alt}
                src={character.images[0]}
                className='w-[550px] object-cover h-[664px] mt-6 md:mt-0'
              />
            </div>
          </div>
        </div>
  )
}

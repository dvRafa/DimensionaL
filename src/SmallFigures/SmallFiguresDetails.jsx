import { useParams, Link } from 'react-router-dom'

import FBardock from '../assets/SmallFiguresImg/FBardock.webp'
import BBardock from '../assets/SmallFiguresImg/BBardock.webp'
import FAkainu from '../assets/SmallFiguresImg/FAkainu.webp'
import BAkainu from '../assets/SmallFiguresImg/BAkainu.webp'
import FBrook from '../assets/SmallFiguresImg/FBrook.webp'
import BBrook from '../assets/SmallFiguresImg/BBrook.webp'
import FGoku from '../assets/SmallFiguresImg/FGoku.webp'
import BGoku from '../assets/SmallFiguresImg/BGoku.webp'

const Characters = [
  {
    name: 'Bardock',
    desc: 'Dragon Ball Z Bandai Ichiban Kuji Mission 5 Super Saiyan 3 by Banpresto',
    size: '8cm',
    price: '$15',
    images: [FBardock, BBardock],
    alt: 'Bardock',
    height: 514,
    id: 'Bardock_1',
  },
  {
    name: 'Son Goku',
    desc: 'Dragon Ball Super Collection World Figure Vol. 1 by Banpresto',
    size: '8cm',
    price: '$20',
    images: [FGoku, BGoku],
    alt: 'Goku',
    height: 565,
    id: 'SonGoku_2',
  },
  {
    name: 'Brook "Soul King"',
    desc: 'One Piece x PEPSI NEX Figure Collection by Suntory',
    size: '5cm',
    price: '$15',
    images: [FBrook, BBrook],
    alt: 'Brook',
    height: 604,
    id: 'Brook_3',
  },
  {
    name: 'Sakazuki "Akainu"',
    desc: 'One Piece x PEPSI NEX Figure Collection by Suntory',
    size: '5cm',
    price: '$15',
    images: [FAkainu, BAkainu],
    alt: 'Sakazuki "Akainu"',
    height: 470,
    id: 'Akainu_',
  },
]

export default function SmallFiguresDetails() {
  const { id } = useParams()
  const character = Characters.find((character) => character.id === id)

  return (
    <div>
      <div className='my-24'>
        <div className='md:max-w-[1000px] max-w-[320px] mx-auto'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='max-w-[380px]'>
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
                  retro
                </p>
                <p className='mt-[10px] uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal  border-b pb-1'>
                  {character.price}
                </p>
                <p className='mt-[10px] uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal  border-b pb-1'>
                  in-strock
                </p>
                <p className='mt-[10px] uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal  border-b pb-1'>
                  {character.size}
                </p>
              </div>
              <div className='flex flex-col mt-[24px]'>
                <h1 className='mb-[2px] uppercase text-[11px] tracking-[1.32px] leading-[14px] gothic-a1-regular font-normal text-stone-700/50'>
                  Description
                </h1>
                <p className='text-[20px] tracking-normal leading-[28.8px] gothic-a1-light'>
                  {character.desc}
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
                className='w-full object-cover h-[664px] mt-6 md:mt-0'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

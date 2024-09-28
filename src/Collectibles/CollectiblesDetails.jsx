import Luffy from '../assets/CollectiblesImg/Luffy.webp'
import LuffyBack from '../assets/CollectiblesImg/LuffyBack.webp'
import LuffyMovie from '../assets/CollectiblesImg/LuffyMovie.webp'
import Sanemi from '../assets/CollectiblesImg/Sanemi.webp'
import SanemiBack from '../assets/CollectiblesImg/SanemiBack.webp'
import Senjuro from '../assets/CollectiblesImg/Senjuro.webp'
import SenjuroBack from '../assets/CollectiblesImg/SenjuroBack.webp'
import NezukoBack from '../assets/CollectiblesImg/NezukoBack.webp'
import Nezuko from '../assets/CollectiblesImg/Nezuko.webp'
import Levi0 from '../assets/CollectiblesImg/Levi0.webp'
import Levi1 from '../assets/CollectiblesImg/Levi1.webp'
import Luffy0 from '../assets/CollectiblesImg/Luffy0.webp'
import Luffy1 from '../assets/CollectiblesImg/Luffy1.webp'
import SanemiFront from '../assets/CollectiblesImg/SanemiFront.webp'
import NezukoFront from '../assets/CollectiblesImg/NezukoFront.webp'
import SenjuroFront from '../assets/CollectiblesImg/SenjuroFront.webp'

import { useParams, Link } from 'react-router-dom'
const Characters = [
  {
    name: 'Levi Ackerman ',
    anime: 'Shingeki No Kyojin',
    title: 'Shingeki No Kyojin Final Season by Banpresto',
    price: '$80',
    type: 'Collectible',
    size: '18cm',
    images: [Levi0],
    alt: 'Levi Ackerman',
    id: 'Levi Ackerman',
  },
  {
    name: 'Monkey D. Luffy ',
    anime: 'One Piece',
    title: 'One Piece Film Red DFX The Grandline Men Vol. 1 by Banpresto',
    price: '$90',
    type: 'Collectible',
    size: '16cm',
    images: [LuffyMovie],
    alt: 'Monkey D. Luffy',
    id: 'Monkey D. Luffy One Piece Film Red DFX The Grandline Men Vol. 1 by Banpresto',
  },
  {
    name: 'Sanemi Shinazugawa ',
    anime:'Kimetsu No Yaiba',
    type: 'Collectible',
    title: 'Kimetsu No Yaiba Vol. 14 by Banpresto',
    price: '$35',
    size: '18cm',
    images: [SanemiFront, Sanemi, SanemiBack],
    alt: 'Sanemi Shinazugawa',
    id: 'Sanemi Shinazugawa',
  },
  {
    name: 'Monkey D. Luffy ',
    title: 'One Piece Bandai Ichiban Kuji by Banpresto',
    anime:'One Piece',
    type: 'Collectible',
    price: '$80',
    images: [Luffy0, Luffy1],
    size: '16cm',
    alt: 'Monkey D. Luffy',
    id: 'Monkey D. Luffy',
  },
  {
    name: 'Monkey D. Luffy ',
    title: 'One Piece Film Red DFX The Grandline Men Vol. 1 by Banpresto',
    anime:'One Piece',
    type: 'Collectible',
    price: '$90',
    size: '16cm',
    images: [LuffyMovie, LuffyBack, Luffy],
    alt: 'Monkey D. Luffy',
    id: 'Monkey D. Luffy One Piece Film Red DFX The Grandline Men Vol. 1 by Banpresto',
  },
  {
    name: 'Nezuko Kamado ',
    title: 'Kimetsu No Yaiba World Collectible Figure by Banpresto',
    anime:'Kimetsu No Yaiba',
    type: 'Collectible',
    price: '$35',
    size: '8cm',
    images: [NezukoFront, Nezuko, NezukoBack],
    alt: 'Nezuko Kamado',
    id: 'Nezuko Kamado',
  },
]

export default function CollectiblesDetails() {
  const { id } = useParams()
  const character = Characters.find((character) => character.id === id)

  return (
    <div className='md:max-w-[1000px] max-w-[320px] mx-auto my-24'>
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
              rare
            </p>
            <p className='mt-[10px] uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal  border-b pb-1'>
              {character.price}
            </p>
            <p className='mt-[10px] uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal  border-b pb-1'>
              in-stock
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
              {character.title}
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
  )
}

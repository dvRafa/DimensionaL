import { useParams, Link } from 'react-router-dom'

import FBardock from '../assets/SmallFiguresImg/FBardock.webp'
import BBardock from '../assets/SmallFiguresImg/BBardock.webp'
import FAkainu from '../assets/SmallFiguresImg/FAkainu.webp'
import BAkainu from '../assets/SmallFiguresImg/BAkainu.webp'
import FBrook from '../assets/SmallFiguresImg/FBrook.webp'
import BBrook from '../assets/SmallFiguresImg/BBrook.webp'
import FGoku from '../assets/SmallFiguresImg/FGoku.webp'
import BGoku from '../assets/SmallFiguresImg/BGoku.webp'
import Nezuko from '../assets/CollectiblesImg/Nezuko.webp'
import Luffy0 from '../assets/CollectiblesImg/Luffy0.webp'

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
  {
    name: 'Nezuko Kamado ',
    title: 'Kimetsu No Yaiba World Collectible Figure by Banpresto',
    anime: 'Kimetsu No Yaiba',
    price: '$35',
    size: '8cm',
    images: [Nezuko],
    alt: 'Nezuko Kamado',
    id: 'Nezuko Kamado',
  },
  {
    name: 'Monkey D. Luffy ',
    anime: 'One Piece',
    title: 'One Piece Bandai Ichiban Kuji by Banpresto',
    price: '$80',
    images: [Luffy0],
    size: '16cm',
    alt: 'Monkey D. Luffy',
    id: 'Monkey D. Luffy Movie',
  },
]

export default function SmallFiguresDetails() {
  const { id } = useParams()
  const character = Characters.find((character) => character.id === id)

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
          <h1 className='custom-title'>{character.name}</h1>
          <div className='flex flex-row md:gap-x-8 gap-x-4'>
            <p className='custom-item-details'>rare</p>
            <p className='custom-item-details'>{character.price} USD</p>
            <p className='custom-item-details'>in-stock</p>
            <p className='custom-item-details'>{character.size}</p>
          </div>
          <div className='flex flex-col mt-[24px]'>
            <h1 className='custom-description'>Description</h1>
            <p className='custom-anime'>{character.desc}</p>
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
            alt={character.alt}
            src={character.images[0]}
            className='md:w-[550px] w-full object-cover md:h-[664px] h-[400px] mb-6 md:mb-0'
          />
        </div>
      </div>
    </div>
  )
}

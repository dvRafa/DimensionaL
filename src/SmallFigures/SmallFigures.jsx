import { Link } from 'react-router-dom'

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
    desc: 'Dragon Ball Bandai Ichiban Kuji Mission 5 Super Saiyan 3 by Banpresto',
    size: '8cm',
    price: '$15',
    anime: 'Dragon Ball Z',
    images: [FBardock, BBardock],
    alt: 'Bardock',
    height: 425,
    id: 'Bardock_1',
  },
  {
    name: 'Son Goku',
    desc: 'Dragon Ball Z Collection World Figure Vol. 1 by Banpresto',
    size: '8cm',
    price: '$20',
    anime: 'Dragon Ball Super',
    images: [FGoku, BGoku],
    alt: 'Goku',
    height: 500,
    id: 'SonGoku_2',
  },
  {
    name: 'Brook "Soul King"',
    desc: 'One Piece x PEPSI NEX Figure Collection by Suntory',
    size: '5cm',
    price: '$15',
    anime: 'One Piece',
    images: [FBrook, BBrook],
    alt: 'Brook',
    height: 524,
    id: 'Brook_3',
  },
  {
    name: 'Sakazuki "Akainu"',
    desc: 'One Piece x PEPSI NEX Figure Collection by Suntory',
    size: '5cm',
    price: '$15',
    anime: 'One Piece',
    images: [FAkainu, BAkainu],
    alt: 'Sakazuki "Akainu"',
    height: 400,
    id: 'Akainu_',
  },
]

export default function SmallFigures() {
  return (
    <div className='pb-4 md:pb-0 pt-[35px] gothic-a1-regular'>
      <div className='max-w-[360px] md:max-w-[1180px] mx-auto md:pb-[130px] pb-[10px]'>
        <h1 className='sub-title pt-[35px]'>retro.</h1>
        <h2 className='title'>Collectible Figures</h2>
        <div className='grid md:grid-cols-4 pt-[50px] md:pt-[35px] gap-y-[32px] md:gap-y-0 gap-x-6 px-8'>
          {Characters.map((character, index) => {
            return (
              <Link key={index} to={`/Anime-Goods/SmallFigure/${character.id}`}>
                <div
                  className='flex flex-col-reverse justify-end'>
                  <div className='flex flex-col'>
                    <div className='flex flex-row gap-x-8 pt-[6px]'>
                      <p className='items-details'>from {character.price}</p>
                      <p className='items-details'>{character.size}</p>
                    </div>
                    <div className='flex flex-row gap-x-2'>
                      <p className='figure-name'>{character.name}</p>
                      <p className='pt-2 capitalize text-[16px] tracking-[0.2px] leading-[14px] gothic-a1-regular font-normal text-stone-700/70'>
                        {character.anime}
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={character.images[0]}
                      className='hover:cursor-pointer w-full md:w-full object-cover transform transition-transform duration-300 hover:scale-105'
                      alt={character.alt}
                      style={{ height: character.height }}
                    />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

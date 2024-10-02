import { Link } from 'react-router-dom'

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
    desc: 'Dragon Ball Bandai Ichiban Kuji Mission 5 Super Saiyan 3 by Banpresto',
    size: '8cm',
    price: '$15',
    anime: 'Dragon Ball Z',
    images: [FBardock, BBardock],
    alt: 'Bardock',
    id: 'Bardock_1',
    design: 'Acrylic',
  },
  {
    name: 'Son Goku',
    desc: 'Dragon Ball Z Collection World Figure Vol. 1 by Banpresto',
    size: '8cm',
    price: '$20',
    anime: 'Dragon Ball Super',
    images: [FGoku, BGoku],
    alt: 'Goku',
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

export default function SmallFigures() {
  return (
    <div className='flex flex-col max-w-[320px] md:max-w-[1300px] mx-auto pt-10'>
      <h1 className='capitalize md:text-[48px] text-[2rem] md:leading-[72px] leading-[2.5rem]'>
        shop top collectibles
      </h1>
      <div className='flex pt-[25px] gap-x-2 overflow-x-scroll scroll-container md:overflow-x-hidden'>
        {Characters.map((character, index) => {
          return (
            <Link
              key={index}
              to={`/Anime-Goods/SmallFigure/${character.id}`}>
              <div className='flex flex-col-reverse items-center'>
                <div className='flex flex-col'>
                  <p className='figure-name-keychains'>{character.name}</p>
                  <p className='mt-[6px] capitalize text-[13px] tracking-[0.2px] leading-[13px] gothic-a1-regular text-stone-700/70 text-center'>
                    {character.anime}
                  </p>
                  <p className='items-details-keychains'>{character.price}</p>
                </div>
                <div className='w-72 h-[430px] md:w-auto md:h-auto overflow-hidden max-w-xs'>
                  <img
                    src={character.images[0]}
                    className='w-full h-full md:h-[296px] md:w-[211px] object-cover hover:cursor-pointer rounded-xl'
                    alt={character.alt}
                  />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

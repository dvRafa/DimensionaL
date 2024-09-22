import { useState } from 'react'

import FBardock from './assets/Figures/FBardock.webp'
import BBardock from './assets/Figures/BBardock.webp'
import FAkainu from './assets/Figures/FAkainu.webp'
import BAkainu from './assets/Figures/BAkainu.webp'
import FBrook from './assets/Figures/FBrook.webp'
import BBrook from './assets/Figures/BBrook.webp'
import FGoku from './assets/Figures/FGoku.webp'
import BGoku from './assets/Figures/BGoku.webp'

const Characters = [
  {
    name: 'Bardock',
    desc: 'Dragon Ball Bandai Ichiban Kuji Mission 5 Super Saiyan 3 by Banpresto',
    size: '8cm',
    price: '$15',
    anime: 'Dragon Ball Z',
    images: [FBardock, BBardock],
    alt: 'Bardock',
    height: 514,
  },
  {
    name: 'Son Goku',
    desc: 'Dragon Ball Z Collection World Figure Vol. 1 by Banpresto',
    size: '8cm',
    price: '$20',
    anime: 'Dragon Ball Super',
    images: [FGoku, BGoku],
    alt: 'Goku',
    height: 565,
  },
  {
    name: 'Brook "Soul King"',
    desc: 'One Piece x PEPSI NEX Figure Collection by Suntory',
    size: '5cm',
    price: '$15',
    anime: 'One Piece',
    images: [FBrook, BBrook],
    alt: 'Brook',
    height: 604,
  },
  {
    name: 'Sakazuki "Akainu"',
    desc: 'One Piece x PEPSI NEX Figure Collection by Suntory',
    size: '5cm',
    price: '$15',
    anime: 'One Piece',
    images: [FAkainu, BAkainu],
    alt: 'Sakazuki "Akainu"',
    height: 470,
  },
]

function CollectibleFigures() {
  return (
    <div className='pb-4 md:pb-0 gothic-a1-regular'>
      <div className='max-w-[350px] md:max-w-[1300px] mx-auto pt-[50px] md:pt-[65px] md:pb-4'>
        <h1 className='text-[19px] leading-[19px] tracking-[0.5px] gothic-a1-light md:text-[25px] md:leading-[25px] md:-tracking-[1px] w-fit mx-auto'>
          retro.
        </h1>
        <h2 className='text-[32px] leading-[32px] -tracking-[1px] md:text-[47px] text-center items-center justify-center md:-tracking-[2px] md:leading-[47px]'>
          Collectible Figures
        </h2>
        <div className='grid md:grid-cols-4 pt-[50px] md:pt-[65px] gap-x-[24px] gap-y-[32px] md:gap-y-0'>
          {Characters.map((character, index) => {
            const [isHovered, setIsHovered] = useState(false)
            return (
              <div
                key={index}
                className='flex flex-col-reverse justify-end'>
                <div className='flex flex-col text-start'>
                  <div className='flex flex-row gap-x-8'>
                    <p className='pt-2 uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal'>
                      FROM {character.price}
                    </p>
                    <p className='pt-2 uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal'>
                    {character.size}
                  </p>
                  </div>
                  <p className='pt-2 capitalize text-[20px] tracking-[0.4px] leading-[18px] gothic-a1-regular font-normal'>
                    {character.name}
                  </p>
                  <p className='md:text-[14px] text-[16px] leading-[22.4px] md:tracking-[0.28px] tracking-[0.32px] md:leading-[21px] pt-2 md:pt-1'>
                    {character.desc}
                  </p>
                  
                </div>
                <div>
                  <img
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    src={isHovered ? character.images[1] : character.images[0]}
                    className='brightness-105 hover:cursor-pointer w-full object-cover'
                    alt={character.alt}
                    loading='eager'
                    style={{ height: character.height }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CollectibleFigures

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
    name: 'Goku',
    desc: 'Dragon Ball Z Collection World Figure Vol. 1 by Banpresto 8cm',
    price: '$20',
    anime: 'Dragon Ball Super',
    images: [FGoku, BGoku],
    alt: 'Goku',
  },
  {
    name: 'Bardock',
    desc: 'Bandai Ichiban Kuji Mission 5 Super Saiyan 3 by Banpresto 8cm',
    price: '$15',
    anime: 'Dragon Ball Z',
    images: [FBardock, BBardock],
    alt: 'Bardock',
  },
  {
    name: 'Sakazuki "Akainu"',
    desc: 'One Piece x PEPSI NEX Figure Collection by Suntory 5cm',
    price: '$15',
    anime: 'One Piece',
    images: [FAkainu, BAkainu],
    alt: 'Sakazuki "Akainu"',
  },
  {
    name: 'Brook',
    desc: 'One Piece x PEPSI NEX Figure Collection by Suntory 5cm',
    price: '$15',
    anime: 'One Piece',
    images: [FBrook, BBrook],
    alt: 'Brook',
  },
]

function CollectibleFigures() {
  return (
    <div className='bg-[#fafafa] border-b pb-4 md:border-b-0 md:pb-0 gothic-a1-regular'>
      <div className='max-w-[350px] md:max-w-[1300px] mx-auto pt-[50px] md:pt-[65px] md:border-b md:pb-4'>
        <h1 className='text-[19px] leading-[19px] tracking-[0.5px] gothic-a1-light md:text-[25px] md:leading-[25px] md:-tracking-[1px] w-fit mx-auto'>
          retro.
        </h1>
        <h2 className='text-[32px] leading-[32px] -tracking-[1px] md:text-[47px] text-center items-center justify-center md:-tracking-[2px] md:leading-[47px]'>
          Collectible Figures
        </h2>
        <div className='grid md:grid-cols-4 md:gap-8 gap-y-[17px] pt-[50px] md:pt-[65px]'>
          {Characters.map((character, index) => { 
            const [isHovered, setIsHovered] = useState(false);
          return (
           
            <div
              key={index}
              className='flex flex-col-reverse items-center justify-center'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
              <div className='flex flex-col text-start px-6'>
                <span className='text-[16px] -tracking-[0.5px] leading-[16px] pt-2'>
                  FROM {character.price}
                </span>
                <h1 className='text-[19px] -tracking-[0.5px] leading-[19px] pt-2 md:pt-1'>
                  <span className='italic'>{character.name}</span>{' '}
                  {character.desc}
                </h1>
              </div>
              <section className='bg-[#e0e0fb4e] p-6 w-full'>
                <div>
                  <img
                    src={isHovered ? character.images[1] : character.images[0]}
                    className='md:h-[350px] md:w-[257px] w-full h-[350px] object-cover brightness-105'
                    alt={character.alt}
                    loading='eager'
                  />
                </div>
              </section>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default CollectibleFigures

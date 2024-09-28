import Chopper from '../assets/KeychainsImg/Chopper.webp'
import Luffy from '../assets/KeychainsImg/Luffy.webp'
import Zoro from '../assets/KeychainsImg/zoro.webp'
import Vegeta from '../assets/KeychainsImg/Vegeta.webp'
import Ussop from '../assets/KeychainsImg/Ussop.webp'

import { Link } from 'react-router-dom'

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

export default function Keychains() {
  return (
    <div className='md:max-w-[1200px] max-w-[360px] mx-auto flex flex-col md:pt-[65px] pt-[50px]'>
      <h1 className='sub-title'>popular.</h1>
      <h2 className='title'>Keychains</h2>
      <div className='md:pt-[35px] pt-[15px] px-2 grid md:grid-cols-4 md:gap-4 gap-y-4'>
        {Characters.map((character, index) => (
          <Link
            key={index}
            to={`/Anime-Goods/Keychain/${character.id}`}>
            {character.images.map((image, ImgIndex) => (
              <div
              key={ImgIndex}>
                <img
                  key={ImgIndex}
                  alt={character.alt}
                  src={image}
                  loading='eager'
                  className='w-full h-full duration-300 transform hover:scale-105 transition-transform md:h-[225px] md:w-full object-cover hover:cursor-pointer'
                />
              </div>
            ))}
            <div className='flex flex-col'>
              <div className='flex gap-x-8'>
                <p className='items-details'>from {character.price}</p>
                <p className='items-details'>{character.design}</p>
              </div>
              <div className='flex gap-x-2'>
                <p className='figure-name'>{character.name}</p>
                <p className='pt-2 capitalize text-[16px] tracking-[0.2px] leading-[14px] gothic-a1-regular font-normal text-stone-700/70'>
                  {character.data}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

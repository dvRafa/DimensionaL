import Chopper from '../assets/KeychainsImg/Chopper.webp'
import Luffy from '../assets/KeychainsImg/Luffy.webp'
import Zoro from '../assets/KeychainsImg/zoro.webp'
import Vegeta from '../assets/KeychainsImg/Vegeta.webp'
import Ussop from '../assets/KeychainsImg/Ussop.webp'

import { Link } from 'react-router-dom'

const Characters = [
  {
    name: 'Tony Tony Chopper',
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
    name: 'Ussop "White Beard"',
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
    <section className='md:max-w-[1200px] max-w-[320px] mx-auto flex flex-col pt-10'>
      <h1 className='capitalize md:text-[48px] text-[2rem] md:leading-[72px] leading-[2.5rem]'>
        Japan Original
      </h1>
      <div className='pt-[25px] flex gap-x-2 overflow-x-scroll scroll-container md:overflow-x-hidden'>
        {Characters.map((character, index) => (
          <Link
            key={index}
            to={`/Anime-Goods/Keychain/${character.id}`}>
            {character.images.map((image, ImgIndex) => (
              <div
                key={ImgIndex}
                className='w-72 h-[430px] md:w-auto md:h-auto overflow-hidden max-w-xs'>
                <img
                  key={ImgIndex}
                  alt={character.alt}
                  src={image}
                  loading='eager'
                  className='w-full h-full md:h-[296px] md:w-[211px] object-cover hover:cursor-pointer rounded-xl'
                />
              </div>
            ))}
            <div className='flex flex-col'>
              <p className='figure-name-keychains'>{character.name}</p>
              <p className='mt-[6px] capitalize text-[13px] tracking-[0.2px] leading-[13px] gothic-a1-regular text-stone-700/70 text-center'>
                {character.data}
              </p>
              <p className='items-details-keychains'>{character.price}</p>
            </div>
          </Link>
        ))}
        <div className='flex justify-center items-center ml-6'>
          <Link to='/Anime-Goods/Keychain/Options'>
            <button
              className='pl-4 flex items-center justify-center z-[5] h-12 w-12 rounded-full bg-neutral-100 enabled:shadow-sm lg:inline-block hover:bg-neutral-300 transition-colors duration-200 ease-in-out right-spacing-4'
              aria-label='Next'>
              <svg
                className='h-6 w-6'
                ariaHidden='true'
                focusable='false'
                dataPrefix='fas'
                dataicon='chevron-right'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                dataTestid='slider-controls-next'>
                <path
                  fill='currentColor'
                  d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

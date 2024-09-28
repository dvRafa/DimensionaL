import { Link } from 'react-router-dom'

import LuffyMovie from '../assets/CollectiblesImg/LuffyMovie.webp'
import Levi0 from '../assets/CollectiblesImg/Levi0.webp'

const CharactersTop = {
  name: 'Monkey D. Luffy ',
  anime: 'One Piece',
  title: 'One Piece Film Red DFX The Grandline Men Vol. 1 by Banpresto',
  price: '$90',
  type: 'Collectible',
  size: '16cm',
  images: [LuffyMovie],
  alt: 'Monkey D. Luffy',
  id: 'Monkey D. Luffy One Piece Film Red DFX The Grandline Men Vol. 1 by Banpresto',
}

const CharactersBottom = {
  name: 'Levi Ackerman ',
  anime: 'Shingeki No Kyojin',
  title: 'Shingeki No Kyojin Final Season by Banpresto',
  price: '$80',
  type: 'Collectible',
  size: '18cm',
  images: [Levi0],
  alt: 'Levi Ackerman',
  id: 'Levi Ackerman',
}

export default function Collectibles() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-[900px] max-w-[350px] mx-auto pt-[65px] gap-y-4'>
      <div className='flex flex-col'>
        <div>
          {/* First Picture */}
          <div className='flex flex-col-reverse relative'>
            <Link to={`/Anime-Goods/Collectible/${CharactersTop.id}`}>
              <div>
                <img
                  src={CharactersTop.images}
                  alt={CharactersTop.alt}
                  className='md:w-[550px] md:h-[620px]  md:hover:cursor-pointer h-full w-full transition-transform duration-300 transform hover:scale-105 drop-shadow-2xl'
                />
              </div>
            </Link>
            <div className='flex flex-col pb-[15px] pl-[35px] ml-[35px] relative z-10'>
              <h1 className='tracking-normal text-[42px] leading-[48.4px] gothic-a1-light'>
                {CharactersTop.name}
              </h1>
              <p className='items-details pt-1'>
                from {CharactersTop.price} | <span>{CharactersTop.size}</span> |{' '}
                <span>{CharactersTop.type}</span>
              </p>
              <div className='mt-[30px]'>
                <p className='capitalize text-[16px] tracking-[0.2px] leading-[14px] gothic-a1-regular font-normal text-stone-700/70 pt-1'>
                  {CharactersTop.anime}
                </p>
              </div>
            </div>
            <div className='absolute h-[175px] top-0 left-0 border ml-[35px]'></div>
          </div>
        </div>
      </div>
      {/* Second Figure */}
      <div>
        <div className='flex flex-col relative items-end'>
          <div>
            <Link to={`/Anime-Goods/Collectible/${CharactersBottom.id}`}>
              <img
                src={CharactersBottom.images}
                alt={CharactersBottom.alt}
                className='md:w-[450px] md:h-[550px] md:hover:cursor-pointer h-full w-full transition-transform duration-300 transform hover:scale-105'
              />
            </Link>
          </div>
          <div className='flex flex-col pt-[15px] pr-[35px] mr-[35px] relative z-10 text-right'>
            <h1 className='tracking-normal text-[42px] leading-[48.4px] gothic-a1-light'>
              {CharactersBottom.name}
            </h1>
            <p className='items-details'>
              from {CharactersBottom.price} |{' '}
              <span>{CharactersBottom.size}</span> |{' '}
              <span>{CharactersBottom.type}</span>
            </p>
            <div className='mt-[30px]'>
              <p className='capitalize text-[16px] tracking-[0.2px] leading-[14px] gothic-a1-regular font-normal text-stone-700/70'>
                {CharactersBottom.anime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

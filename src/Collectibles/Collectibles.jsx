import { Link } from 'react-router-dom'

import LuffyMovie from '../assets/CollectiblesImg/LuffyMovie.webp'
import Levi0 from '../assets/CollectiblesImg/Levi0.png'
import SanemiFront from '../assets/CollectiblesImg/SanemiFront.webp'

const Characters = [
  {
    name: 'Monkey D. Luffy',
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
    name: 'Levi Ackerman',
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
    name: 'Sanemi Shinazugawa',
    title: 'Kimetsu No Yaiba Vol. 14 by Banpresto',
    price: '$35',
    size: '18cm',
    images: [SanemiFront],
    alt: 'Sanemi Shinazugawa',
    id: 'Sanemi Shinazugawa',
  },
]

export default function Collectibles() {
  return (
    <div className='md:max-w-[980px] max-w-[320px] mx-auto pt-10'>
      <h1 className='capitalize md:text-[48px] text-[2rem] md:leading-[72px] leading-[2.5rem]'>
        get it before it's gone
      </h1>
      <div className='flex flex-col md:flex-row items-center justify-center md:gap-x-2 gap-y-2 pt-[25px]'>
        {Characters.map((character, index) => (
          <Link to={`/Anime-Goods/Collectible/${character.id}`}>
            <div className='relative p-2 bg-[#f1f1f1] rounded'>
              <img
                className='md:w-[300px] md:h-[569px] w-[350px] h-[400px] object-cover'
                src={character.images}
                alt={character.alt}
              />
              <h1 className='absolute bottom-0 left-0 right-0 text-slate-900 text-left p-4 z-10 text-[30px] font-extrabold leading-[30px] uppercase max-w-[255px]'>
                {character.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
      <div className='w-fit mx-auto'>
        <Link to='/Anime-Goods/Collectible/Options'>
          <button
            className='mt-[32px] text-[16px] px-8 py-6 border border-stone-700/50 tracking-normal capitalize leading-[16px] gothic-a1-regular font-normal duration-300 ease-linear transition hover:bg-blue-800/90 hover:text-white cursor-not-allowed md:mb-0 mb-4' disabled>
            shop collectibles
          </button>
        </Link>
      </div>
    </div>
  )
}

import { useState } from 'react'
import LuffyFront from './assets/Legends/LuffyFront.webp'
import Luffy from './assets/Legends/Luffy.webp'
import LuffyBack from './assets/Legends/LuffyBack.webp'
import Sanemi from './assets/Legends/Sanemi.webp'
import SanemiBack from './assets/Legends/SanemiBack.webp'
import Senjuro from './assets/Legends/Senjuro.webp'
import SenjuroBack from './assets/Legends/SenjuroBack.webp'
import NezukoBack from './assets/Legends/NezukoBack.webp'
import Nezuko from './assets/Legends/Nezuko.webp'
import Levi0 from './assets/Legends/Levi0.webp'
import Levi1 from './assets/Legends/Levi1.webp'
import Luffy0 from './assets/Legends/Luffy0.webp'
import Luffy1 from './assets/Legends/Luffy1.webp'
import SanemiFront from './assets/Legends/SanemiFront.webp'
import NezukoFront from './assets/Legends/NezukoFront.webp'
import SenjuroFront from './assets/Legends/SenjuroFront.webp'

const LegendaryFigures = () => {
  const Characters = [
    {
      name: 'Levi Ackerman ',
      title: 'Shingeki No Kyojin Final Season by Banpresto',
      price: '$80',
      size: '18cm',
      images: [Levi1, Levi0],
      alt: 'Levi Ackerman',
      id: 'Levi-Ackerman',
    },
    {
      name: 'Senjuro Rengoku ',
      title: 'Kimetsu No Yaiba Vol. 26 by Banpresto',
      price: '$35',
      size: '18cm',
      images: [SenjuroFront, Senjuro, SenjuroBack],
      alt: 'Senjuro Rengoku',
    },
    {
      name: 'Sanemi Shinazugawa ',
      title: 'Kimetsu No Yaiba Vol. 14 by Banpresto',
      price: '$35',
      size: '18cm',
      images: [SanemiFront, Sanemi, SanemiBack],
      alt: 'Sanemi Shinazugawa',
    },
    {
      name: 'Monkey D. Luffy ',
      title: 'One Piece Bandai Ichiban Kuji by Banpresto',
      price: '$80',
      images: [Luffy0, Luffy1],
      size: '16cm',
      alt: 'Monkey D. Luffy',
      id: 'Monkey-D-Luffy',
    },
    {
      name: 'Monkey D. Luffy ',
      title: 'One Piece Film Red DFX The Grandline Men Vol. 1 by Banpresto',
      price: '$90',
      size: '16cm',
      images: [LuffyBack, LuffyFront, Luffy],
      alt: 'Monkey D. Luffy',
    },
    {
      name: 'Nezuko Kamado ',
      title: 'Kimetsu No Yaiba World Collectible Figure by Banpresto',
      price: '$35',
      size: '8cm',
      images: [NezukoFront, Nezuko, NezukoBack],
      alt: 'Nezuko Kamado',
    },
  ]

  const CharacterSlider = ({ character }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Function to handle image switching
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === character.images.length - 1 ? 0 : prevIndex + 1
      )
    }

    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? character.images.length - 1 : prevIndex - 1
      )
    }

    return (
      <div>
        <div className='relative w-fit mx-auto'>
          <div className='relative'>
            <img
              id={character.id}
              src={character.images[currentImageIndex]}
              alt={character.alt}
              className='md:w-[423px] w-full md:h-[400px] h-[500px] object-scale-down  mx-auto hover:cursor-pointer p-[65px]'
              loading='lazy'
            />
            <button
              aria-label='Previous Image'
              onClick={handlePrevImage}
              className='absolute left-4 top-1/2 transform -translate-y-1/2 hover:cursor-pointer duration-200 ease-in-out transition-all'>
              <svg
                className='fill-black hover:opacity-50'
                width={18}
                height={18}
                viewBox='0 0 24 24'
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
                    d='M4 12H20M4 12L8 8M4 12L8 16'
                    stroke='#000000'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                </g>
              </svg>
            </button>
            <button
              aria-label='Next Image'
              onClick={handleNextImage}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 hover:cursor-pointer duration-200 ease-in-out transition-all'>
              <svg
                className='fill-black hover:opacity-50'
                viewBox='0 0 24 24'
                width={18}
                height={18}
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
                    d='M4 12H20M20 12L16 8M20 12L16 16'
                    stroke='#000000'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>{' '}
                </g>
              </svg>
            </button>
          </div>
          <div className='flex flex-col items-center justify-center text-center'>
            <h1 className='tracking-normal text-[20px] leading-[26.4px] gothic-a1-light md:tracking-[0px] pt-2 font-semibold'>
              {character.name}
              {character.title}
            </h1>
            <p className='pt-2 uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal'>
              from {character.price}
            </p>
            <p className='pt-2 uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal'>
              {character.size}
            </p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <section className='gothic-a1-regular'>
      <div className='md:max-w-[1300px] max-w-[350px] mx-auto md:pt-[65px] pt-[50px] pb-4'>
        <h1 className='text-[15px] leading-[15px] tracking-[0.5px] gothic-a1-light md:text-[25px] md:leading-[25px] md:-tracking-[1px] w-fit mx-auto'>
          rare.
        </h1>
        <h2 className='text-[32px] leading-[32px] -tracking-[1px] md:text-[47px] text-center items-center justify-center md:-tracking-[2px] md:leading-[47px]'>
          Legends Only
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-[20px] gap-4 md:pt-[65px] pt-[50px]'>
          {Characters.map((character, index) => (
            <div key={index}>
              <CharacterSlider character={character} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LegendaryFigures

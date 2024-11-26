import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

import HeaderDetails from '../HeaderDetails'
import SocialMedia from '../SocialMedia'
import FooterDetails from '../FooterDetails'

import ShingekiNoKyojin from '../assets/MangasImg/ShingekiNoKyojin.webp'
import OnePiece from '../assets/MangasImg/OnePiece.webp'
import KimetsuNoYaiba from '../assets/MangasImg/KimetsuNoYaiba.webp'
import Naruto from '../assets/MangasImg/Naruto.webp'
import Breadcrumb from '../Breadcrumb'
import Kimetsu from '../assets/MangasImg/1.webp'
import KimetsuBack from '../assets/MangasImg/2.webp'
import KimetsuPages from '../assets/MangasImg/3.webp'
import NarutoFront from '../assets/MangasImg/11.webp'
import NarutoBack from '../assets/MangasImg/22.webp'
import NarutoPages from '../assets/MangasImg/33.webp'
import OPFront from '../assets/MangasImg/111.webp'
import OPBack from '../assets/MangasImg/222.webp'
import OPPages from '../assets/MangasImg/333.webp'
import ShingekiFront from '../assets/MangasImg/1111.webp'
import ShingekiBack from '../assets/MangasImg/2222.webp'
import ShingekiPages from '../assets/MangasImg/3333.webp'

const Characters = [
  {
    images: [ShingekiFront, ShingekiBack, ShingekiPages],
    name: 'Shingeki No Kyojin - Attack On Titan, Volume 16',
    data: 'Captured by Rod Reiss, the rightful king, Krista and Eren finally have their memories back. What exactly happened to Eren, and what was the crime his father...',
    page: '194',
    rating: '16+',
    release: 'August 25, 2015',
    price: '$60.00',
    alt: 'Shingeki No Kyojin',
    id: 'ShingekiNoKyojin',
    tags: ['Horror', 'Science-Fiction'],
    author: 'Hajime Isayama',
    anime: 'Shingeki No Kyojin',
    type: 'Manga',
    version: 'Paper Version',
    condition: 'new'
  },
  {
    images: [OPFront, OPBack, OPPages],
    name: 'One Piece: Doflamingo Appears, Volume 70 - Chapters 691-700',
    data: 'With the escape of the institute in front of it, Caesar makes a strange transformation. Will Luffy shatter his ambitions!?',
    author: 'Eiichiro Oda',
    rating: '16+',
    version: 'Paper Version',
    page: '216',
    release: 'June 4, 2013',
    price: '$45.00',
    alt: 'One Piece',
    id: 'One-Piece',
    anime: 'One Piece',
    type: 'Manga',
    tags: ['Pirates', 'Adventure', 'Epic Journey'],
    condition: 'new'
  },
  {
    images: [NarutoFront, NarutoBack, NarutoPages],
    name: 'Naruto Shippuden: Dream World, Volume 63 - Chapters 598-607',
    data: 'With the help of Kakashi and Guy, Naruto seems to have found a way around Tobis invincible abilities.',
    page: '192',
    release: 'December 28, 2012',
    price: '$50.00',
    alt: 'Naruto Shippuden',
    id: 'NarutoShippuden',
    anime: 'Naruto Shippuden',
    type: 'Manga',
    tags: ['Ninjas', 'Rivalry', 'Emotional'],
    version: 'Paper Version',
    author: 'Masashi Kishimoto',
    rating: '16+',
    condition: 'new'
  },
  {
    images: [Kimetsu, KimetsuBack, KimetsuPages],
    name: 'Kimetsu No Yaiba - Demon Slayer: Gaiden Volume',
    data: 'Kimetsu no Yaiba: Gaiden is a volume consisting of Giyu Tomiokas Story and Kyojuro Rengokus Story.',
    page: '215',
    release: 'December 4, 2020',
    price: '$45.00',
    alt: 'Kimetsu No Yaiba',
    id: 'KimetsuNoYaiba',
    anime: 'Kimetsu No Yaiba',
    type: 'Manga',
    tags: ['Dark Fantasy', 'Brotherhood', 'Supernatural'],
    author: 'Koyoharu Gotouge',
    version: 'Paper Version',
    rating: '16+',
    condition: 'new'
  },
]

export default function MangasDetails() {
  const { id } = useParams()
  const character = Characters.find((char) => char.id === id)

  if (!character) {
    return <div>Manga not found!</div> // Handle case where the character is not found
  }

  const [mainImageIndex, setMainImageIndex] = useState(0)
  const [isCardExpanded, setIsCardExpanded] = useState(false)

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index)
  }

  const breadcrumbPath = [
    { name: 'Store', link: '/dimm' },
    { name: 'Mangas', link: '#' },
  ]

  return (
    <div className='md:max-w-full max-w-[385px] mx-auto relative bg-[#0d0f0e]'>
      <HeaderDetails />
      <div className='flex md:flex-row flex-col pt-4 md:pt-0'>
        <div className='flex flex-row-reverse mx-auto'>
          {isCardExpanded && (
            <div
              className='fixed openeffect inset-0 backdrop-blur-3xl z-40 flex items-center justify-center'
              onClick={() => setIsCardExpanded(false)}>
              {isCardExpanded ? (
                <svg
                  onClick={() => setIsCardExpanded(false)}
                  className='md:w-10 w-8 md:h-10 h-8 transform absolute bottom-[85%] left-[80%] hover:opacity-100 transition-all ease-in-out opacity-50 cursor-pointer'
                  fill='#ffffff'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  stroke='#ffffff'>
                  <g
                    id='SVGRepo_bgCarrier'
                    strokeWidth='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    strokeLinecap='round'
                    strokeLinejoin='round'></g>
                  <g id='SVGRepo_iconCarrier'>
                    <path d='M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z'></path>
                  </g>
                </svg>
              ) : (
                'hidden'
              )}
              <img
                alt={character.alt}
                src={character.images[mainImageIndex]} // Accessing the first image in the array
                className='w-auto md:h-[570px] h-[300px] mb-6 md:mb-0'
              />
            </div>
          )}
          <div className='z-10 relative'>
            <button onClick={() => setIsCardExpanded(true)}>
              <img
                alt={character.alt}
                src={character.images[mainImageIndex]}
                className='w-auto mx-auto object-cover md:h-[500px] h-[550px] mb-6 md:mb-0 rounded-lg cursor-zoom-in'
              />
            </button>
          </div>
        </div>
        <div className='flex flex-row md:flex md:flex-col gap-y-1 justify-center items-end mr-10'>
          {character.images.map((image, index) => (
            <img
              key={index}
              alt={`${character.alt} thumbnail ${index + 1}`}
              src={image}
              className={`w-8 md:w-12 aspect-square h-[40px] md:h-[70px] object-scale-down cursor-pointer p-1 hover:scale-105 hover:brightness-105 duration-200 transition-all ease-in-out overflow-hidden ${
                mainImageIndex === index
                  ? 'border border-darkgray'
                  : 'border border-[#0d0f0e]'
              }`} // Highlight the selected thumbnail
              onClick={() => handleThumbnailClick(index)} // Update main image on click
            />
          ))}
        </div>
        <div className='flex flex-row md:gap-x-8 gap-x-4'>
          <div className='md:w-[400px] md:p-4 p-3'>
            <Breadcrumb path={breadcrumbPath} />
            <h1 className='custom-title-manga'>{character.name}</h1>
            <div className='flex flex-row md:gap-x-8 gap-x-4'>
              <p className='custom-item-details'>rare</p>
              <p className='custom-item-details'>{character.price} USD</p>
              <p className='custom-item-details'>in-stock</p>
            </div>
            <div className='flex flex-col mt-[24px]'>
              <h1 className='custom-description'>Description</h1>
              <p className='custom-anime-manga'>{character.data}</p>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className='md:flex flex-col mt-10 gap-x-14 mb-4 md:mx-4 mx-3'>
        <div>
          <h3 className='poppins leading-[60px] text-[40px] text-blanco'>
            Volume <br /> Info
          </h3>
        </div>
        <div className='grid md:grid-cols-2 border-2 border-cardbg md:w-[1000px]'>
          <div className='flex flex-col md:border-r-2 border-r-0 border-cardbg'>
            <div className='border-b-2 border-cardbg'>
              <p className='font-semibold text-[16px] leading-[32px] p-4 text-lightgray'>
                Rating:{' '}
                <span className='text-blanco font-normal'>
                  {character.rating}
                </span>
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='font-semibold text-[16px] leading-[32px] p-4 text-lightgray'>
                Print Release:{' '}
                <span className='text-blanco font-normal'>
                  {character.release}
                </span>
              </p>
              <p className='font-semibold leading-[32px] text-[16px] px-4 pb-4 text-lightgray'>
                Print Format:{' '}
                <span className='text-blanco font-normal'>Paperback</span>
              </p>
              <p className='font-semibold text-[16px] leading-[32px] px-4 pb-4 text-lightgray'>
                Condition:{' '}
                <span className='text-blanco capitalize font-normal'>
                  {character.condition}
                </span>
              </p>
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold border-b-2 border-cardbg leading-[32px] text-[16px] pb-4 md:py-4 px-4 text-lightgray'>
              Pages:{' '}
              <span className='text-blanco font-normal'>{character.page}</span>
            </p>
            <p className='font-semibold leading-[32px] text-[16px] p-4 text-lightgray'>
              Author:{' '}
              <span className='text-blanco font-normal'>
                {character.author}
              </span>
            </p>
            <p className='font-semibold leading-[32px] text-[16px] px-4 pb-4 text-lightgray'>
              Tags:{' '}
              <span className='text-blanco font-normal'>
                {character.tags.join(' / ')} 
              </span>
            </p>
          </div>
        </div>
      </div>
      <FooterDetails />
    </div>
  )
}

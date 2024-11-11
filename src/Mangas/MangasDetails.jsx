import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

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
  },
]

export default function MangasDetails() {
  const { id } = useParams()
  const character = Characters.find((char) => char.id === id)

  if (!character) {
    return <div>Manga not found!</div> // Handle case where the character is not found
  }

  const [mainImageIndex, setMainImageIndex] = useState(0)

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index)
  }

  const breadcrumbPath = [
    { name: 'Store', link: '/DimensionaL' },
    { name: 'Mangas', link: '#' },
  ]

  return (
    <div className='md:max-w-[1000px] max-w-[320px] mx-auto my-24'>
      <Breadcrumb path={breadcrumbPath} />
      <div className='flex md:flex-row flex-col'>
        <div className='md:w-[400px] w-ful p-4'>
          <h1 className='custom-title-manga'>{character.name}</h1>
          <div className='flex flex-row md:gap-x-8 gap-x-4'>
            <p className='custom-item-details'>rare</p>
            <p className='custom-item-details'>{character.price} USD</p>
            <p className='custom-item-details'>in-stock</p>
          </div>
          <div className='flex flex-col mt-[24px]'>
            <h1 className='custom-description'>Description</h1>
            <p className='custom-anime'>{character.data}</p>
          </div>
          <div className='flex flex-col mt-16 gap-y-4'>
            <a
              className='text-[16px] text-center rounded-full border py-3 border-stone-700/50 border-opacity-50 px-8 lowercase leading-[12px] tracking-[1.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:tracking-[3px] duration-200 ease-in-out hover:bg-black/90 transition-colors bg-black text-white'
              href='https://wa.me/50764245895'
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Whatsapp Number'>
              whatsapp
            </a>
            <a
              className='text-[16px] text-center border rounded-full py-3 border-stone-700/50 border-opacity-50 px-8 lowercase leading-[12px] tracking-[1.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:tracking-[3px] md:duration-200 md:ease-in-out md:hover:bg-blue-800/90 md:transition-colors md:hover:text-white'
              href='https://instagram.com/thenotoriousrafa'
              rel='noopener nonrefereer'
              target='_blank'>
              instagram
            </a>
          </div>
        </div>
        <div className='mx-auto flex flex-col'>
          <img
            alt={character.alt}
            src={character.images[mainImageIndex]} // Accessing the first image in the array
            className='w-auto md:h-[570px] h-[300px] mb-6 md:mb-0'
          />
          <div className='flex items-center justify-center mt-4 space-x-2'>
            {character.images.map((image, index) => (
              <img
                key={index}
                alt={`${character.alt} thumbnail ${index + 1}`}
                src={image}
                className={`w-24 h-24 object-cover cursor-pointer hover:opacity-75 ${
                  mainImageIndex === index ? 'border-2 border-blue-800/90' : ''
                }`} // Highlight the selected thumbnail
                onClick={() => handleThumbnailClick(index)} // Update main image on click
              />
            ))}
          </div>
        </div>
      </div>
      <div className='md:flex flex-col mt-10 gap-x-14'>
        <div>
          <h3 className='leading-[60px] text-[40px] font-bold'>
            Volume <br /> Info
          </h3>
        </div>
        <div className='grid grid-cols-2 w-full border-2 border-black'>
          <div className='flex flex-col border-r-2 border-black'>
            <div className='border-b-2 border-black'>
              <p className='font-semibold text-[18px] leading-[32px] p-4'>
                Rating:{' '}
                <span className='text-stone-700/75 font-normal'>
                  {character.rating}
                </span>
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='font-semibold text-[18px] leading-[32px] pt-4 px-4'>
                Print Release:{' '}
                <span className='text-stone-700/75 font-normal'>
                  {character.release}
                </span>
              </p>
              <p className='font-semibold leading-[32px] text-[18px] px-4 pb-4'>
                Print Format:{' '}
                <span className='text-stone-700/75 font-normal'>Paperback</span>
              </p>
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold border-b-2 border-black leading-[32px] text-[18px] p-4'>
              Pages:{' '}
              <span className='text-stone-700/75 font-normal'>
                {character.page}
              </span>
            </p>
            <p className='font-semibold leading-[32px] text-[18px] p-2'>
              Author:{' '}
              <span className='text-stone-700/75 font-normal'>
                {character.author}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

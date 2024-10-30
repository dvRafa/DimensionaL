import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import Breadcrumb from '../Breadcrumb'
import SmallFiguresArray from './SmallFiguresArray'

export default function SmallFiguresDetails() {
  const { id } = useParams()
  const sharedArray = SmallFiguresArray()
  const character = sharedArray.find((character) => character.id === id)

  const [mainImageIndex, setMainImageIndex] = useState(0)

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index)
  }

  // Define the breadcrumb path
  const breadcrumbPath = [
    { name: 'Store', link: '/DimensionaL/' },
    { name: 'Collectible Figures', link: '#' }, // Current item, no link
  ]

  return (
    <div className='md:max-w-[1000px] max-w-[320px] mx-auto my-24'>
      <Breadcrumb path={breadcrumbPath} />
      <div className='md:flex flex-col flex'>
        <div className='md:w-[400px] w-full p-4'>
          <h1 className='custom-title'>{character.name}</h1>
          <div className='flex flex-row md:gap-x-8 gap-x-4'>
            <p className='custom-item-details'>rare</p>
            <p className='custom-item-details'>{character.price} USD</p>
            <p className='custom-item-details'>in-stock</p>
            <p className='custom-item-details'>{character.size}</p>
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
              className='text-[16px] text-center border rounded-full py-3 border-stone-700/50 border-opacity-50 px-8 lowercase leading-[12px] tracking-[1.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:tracking-[3px] duration-200 ease-in-out hover:bg-blue-800/90 transition-colors hover:text-white'
              href='https://instagram.com/thenotoriousrafa'
              rel='noopener nonrefereer'
              target='_blank'>
              instagram
            </a>
          </div>
        </div>
        <div className='mx-auto'>
          <img
            alt={character.alt}
            src={character.images[mainImageIndex]}
            className='w-auto object-cover md:h-[570px] h-[400px] mb-6 md:mb-0'
          />
          <div className='flex items-center justify-center mt-4 space-x-2'>
            {character.images.map((image, index) => (
              <img
                key={index}
                alt={`${character.alt} thumbnail ${index + 1}`}
                src={image}
                className={`w-auto h-24 object-cover hover-scale-101 cursor-pointer ${
                  mainImageIndex === index ? 'border-2 border-blue-800/90' : ''
                }`} // Highlight the selected thumbnail
                onClick={() => handleThumbnailClick(index)} // Update main image on click
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import { useParams } from 'react-router-dom'
import Breadcrumb from '../Breadcrumb'
import { useState } from 'react'
import KeychainArray from './KeychainArray'

export default function KeychainsDetails() {
  const { id } = useParams()

  const sharedArray = KeychainArray()
  const character = sharedArray.find((character) => character.id === id)

  const [mainImageIndex, setMainImageIndex] = useState(0)
  const [isCardExpanded, setIsCardExpanded] = useState(false)

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index)
  }

  // Define the breadcrumb path
  const breadcrumbPath = [
    { name: 'Store', link: '/dimm/' },
    { name: 'Keychains', link: '#' }, // Current item, no link
  ]

  return (
    <div className='md:max-w-[1000px] max-w-[320px] mx-auto my-24 relative'>
      <Breadcrumb path={breadcrumbPath} />
      <div className='flex md:flex-row flex-col'>
        <div className='md:w-[600px] p-4'>
          <h1 className='custom-title'>{character.name}</h1>
          <div className='flex flex-row md:gap-x-8 gap-x-4'>
            <p className='custom-item-details'>rare</p>
            <p className='custom-item-details'>{character.price} USD</p>
            <p className='custom-item-details'>in-stock</p>
            <p className='custom-item-details'>{character.design}</p>
          </div>
          <div className='flex flex-col mt-[24px]'>
            <h1 className='custom-description'>Description</h1>
            <p className='custom-anime'>{character.anime}</p>
          </div>
          <div className='flex flex-col mt-16 gap-y-4 w-[300px]'>
            <a
              className='text-[16px] text-center rounded-full border py-3 border-stone-700/50 border-opacity-50 px-8 lowercase leading-[12px] tracking-[1.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:tracking-[3px] md:duration-200 md:ease-in-out md:hover:bg-cardlightgray md:transition-colors bg-black text-white'
              href='https://wa.me/50764245895'
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Whatsapp Number'>
              whatsapp
            </a>
            <a
              className='text-[16px] text-center border rounded-full py-3 border-stone-700/50 border-opacity-50 px-8 lowercase leading-[12px] tracking-[1.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:tracking-[3px] md:duration-200 md:ease-in-out md:hover:bg-green md:transition-colors md:hover:text-black text-white '
              href='https://instagram.com/thenotoriousrafa'
              rel='noopener noreferrer'
              target='_blank'>
              instagram
            </a>
          </div>
        </div>

        <div className='mx-auto'>
          {isCardExpanded && (
            <div
              className='fixed openeffect inset-0 backdrop-blur-3xl z-40 flex items-center justify-center flex-row-reverse duration-300 ease-in-out'
              onClick={() => setIsCardExpanded(false)} // Close when background clicked
            >
              {isCardExpanded ? (
                <svg
                  onClick={() => setIsCardExpanded(false)}
                  className='w-10 h-10 transform absolute bottom-[85%] left-[80%] hover:opacity-100 transition-all ease-in-out opacity-50'
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
                src={character.images[mainImageIndex]}
                className='max-h-[70vh] max-w-[70vw] object-contain z-50 rounded-lg'
              />
            </div>
          )}
          <div className='relative z-10'>
            <button onClick={() => setIsCardExpanded(true)}>
              <img
                alt={character.alt}
                src={character.images[mainImageIndex]}
                className='w-auto mx-auto object-cover md:h-[350px] h-[400px] mb-6 md:mb-0'
              />
            </button>
          </div>
          <div className='flex items-center justify-center mt-4 space-x-2'>
            {character.images.map((image, index) => (
              <img
                key={index}
                alt={`${character.alt} thumbnail ${index + 1}`}
                src={image}
                className={`w-auto h-16 object-cover cursor-pointer hover-scale-101 duration-300 ${
                  mainImageIndex === index ? 'border-2 border-green' : ''
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

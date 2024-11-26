import Breadcrumb from '../Breadcrumb'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import SmallFiguresArray from './SmallFiguresArray'
import FooterDetails from '../FooterDetails'
import HeaderDetails from '../HeaderDetails'
import SocialMedia from '../SocialMedia'

export default function CollectiblesDetails() {
  const { id } = useParams()
  const sharedArray = SmallFiguresArray()
  const character = sharedArray.find((character) => character.id === id)

  const [mainImageIndex, setMainImageIndex] = useState(0)
  const [isCardExpanded, setIsCardExpanded] = useState(false)

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index)
  }

  // Define the breadcrumb path
  const breadcrumbPath = [
    { name: 'Store', link: '/dimm/' },
    { name: 'Collectible Figures', link: '#' }, // Current item, no link
  ]

  return (
    <div className='md:max-w-full max-w-[385px] mx-auto bg-[#0d0f0e] relative'>
      <HeaderDetails />
      <div className='flex md:flex-row flex-col pt-4 p-0'>
        <div className='flex flex-row-reverse mx-auto'>
          {isCardExpanded && (
            <div
              className='fixed openeffect inset-0 backdrop-blur-3xl z-40 flex items-center justify-center'
              onClick={() => setIsCardExpanded(false)}>
              {isCardExpanded ? (
                <svg
                  onClick={() => setIsCardExpanded(false)}
                  className='w-8 md:w-10 h-8 md:h-10 transform absolute bottom-[85%] left-[80%] hover:opacity-100 transition-all ease-in-out opacity-50 cursor-pointer'
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
                className='w-auto object-cover md:h-[570px] h-[400px] mb-6 md:mb-0 rounded-lg'
              />
            </div>
          )}
          <div className='relative z-10'>
            <button onClick={() => setIsCardExpanded(true)}>
              <img
                alt={character.alt}
                src={character.images[mainImageIndex]}
                className='w-auto mx-auto object-cover md:h-[390px] h-[400px] mb-6 md:mb-0 rounded-lg cursor-zoom-in'
              />
            </button>
          </div>
        </div>
        <div className='flex flex-row md:flex md:flex-col gap-y-2 justify-center items-end mr-10'>
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
            <div className='flex flex-col mb-10'>
              <h1 className='custom-title'>{character.name}</h1>
              <p className='text-lightgray text-[12px] leading-[24px] uppercase exo-2'>
                {character.anime}
              </p>
            </div>
            <div className='flex flex-row md:gap-x-8 gap-x-4'>
              <p className='custom-item-details'>rare</p>
              <p className='custom-item-details'>{character.price} USD</p>
              <p className='custom-item-details'>in-stock</p>
              <p className='custom-item-details'>{character.size}</p>
            </div>
            <div className='flex flex-col mt-[24px]'>
              <h1 className='custom-description'>Description</h1>
              <p className='custom-anime'>{character.summary}</p>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
      <FooterDetails />
    </div>
  )
}

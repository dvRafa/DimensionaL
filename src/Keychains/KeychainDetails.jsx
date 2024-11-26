import { useParams } from 'react-router-dom'
import Breadcrumb from '../Breadcrumb'
import { useState } from 'react'
import KeychainArray from './KeychainArray'
import FooterDetails from '../FooterDetails'
import HeaderDetails from '../HeaderDetails'
import SocialMedia from '../SocialMedia'

export default function KeychainsDetails() {
  const { id } = useParams()

  const sharedArray = KeychainArray()
  const character = sharedArray.find((character) => character.id === id)

  const [mainImageIndex, setMainImageIndex] = useState(0)
  const [isCardExpanded, setIsCardExpanded] = useState(false)

  // Define the breadcrumb path
  const breadcrumbPath = [
    { name: 'Store', link: '/dimm/' },
    { name: 'Keychains', link: '#' }, // Current item, no link
  ]

  return (
    <div className='md:max-w-full max-w-[385px] mx-auto relative bg-[#0d0f0e]'>
      <HeaderDetails />
      <div className='flex md:flex-row flex-col pt-4 md:pt-0'>
        <div className='mx-auto pl-2'>
          {isCardExpanded && (
            <div
              className='fixed openeffect inset-0 backdrop-blur-3xl z-40 flex items-center justify-center flex-row-reverse duration-300 ease-in-out'
              onClick={() => setIsCardExpanded(false)} // Close when background clicked
            >
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
                className='max-h-[70vh] max-w-[70vw] object-contain z-50 rounded-lg'
              />
            </div>
          )}
          <div className='relative z-10'>
            <button onClick={() => setIsCardExpanded(true)}>
              <img
                alt={character.alt}
                src={character.images[mainImageIndex]}
                className='w-auto mx-auto object-cover md:h-[380px] h-[400px] mb-6 md:mb-0 rounded-lg'
              />
            </button>
          </div>
        </div>
        <div className='flex flex-row md:gap-x-8 gap-x-4'>
          <div className='md:w-[520px] md:p-4 p-3'>
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
              <p className='custom-item-details'>{character.design}</p>
            </div>
            <div className='flex flex-col mt-[24px]'>
              <h1 className='custom-description'>Description</h1>
              <p className='custom-anime'>{character.nickname}</p>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
      <FooterDetails />
    </div>
  )
}

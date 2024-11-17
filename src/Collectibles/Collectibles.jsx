import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CollectiblesArray from './CollectiblesArray'
import dendenmushi from '/dendenmushi.png'

export default function Collectibles() {
  const [showLeftButton, setShowLeftButton] = useState(false) // Controls the visibility of the left button
  const scrollContainerRef = useRef(null)
  const sharedArray = CollectiblesArray()

  // Scroll to the right
  const handleScrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    setShowLeftButton(true) // Show the left button once scrolling right occurs
  }

  // Scroll to the left
  const handleScrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
  }

  return (
    <div className='flex flex-col md:pt-20 pt-10 bg-darkbg'>
      <div className='pl-6 md:pl-32 pr-[6px] md:pr-0'>
        <h1 className='fade-effect md:text-[28px] exo-2 text-[20px] md:leading-[32px] leading-[30px] tracking-[0.196px] sm:pb-[10px] bg-gradient-to-r from-[#b1dbc2] via-blanco to-[#eff7f2] inline-block text-transparent bg-clip-text'>
          Detailed Collectible Figures. Strongest Anime Characters
        </h1>
      </div>
      {/* Scrollable container */}
      <div className='relative'>
        <div
          ref={scrollContainerRef}
          className='flex overflow-x-auto scroll-smooth pt-[24px] scroll-container pb-[45px] md:pb-[115px] pl-6 md:pl-32'>
          {sharedArray.map((character, index) => (
            <Link
              id='hero-images'
              to={`/dimm/Collectible/${character.id}`}
              key={index}
              className='flex-shrink-0 flex flex-col justify-between w-[310px] md:w-[315px] rounded-2xl border-darkbg border hover-scale-101-collectible md:ease-in-out md:duration-500 mr-[8px] bg-cardbg'>
              <div className='flex justify-center'>
                <img
                  className='w-auto pt-6 h-[500px] md:h-[400px] laptop:h-[410px] object-cover'
                  src={character.images[0]}
                  alt={character.alt}
                />
              </div>
              <div>
                <div className='flex'>
                  <p className='px-4 pt-4 tracking-[2px] exo-2 text-[11px] font-semibold leading-[16px] uppercase text-lightgray'>
                    {character.anime}
                  </p>
                  <p className='tracking-[2px] text-blanco text-xs poppins-regular leading-[16px] pt-4 px-4'>
                    {character.price}
                  </p>
                </div>
                <h1 className='text-blanco text-left p-4 text-[24px] laptop:text-[30px] poppins leading-[30px] uppercase max-w-[255px]'>
                  {character.name}
                </h1>
              </div>
            </Link>
          ))}
        </div>
        <a
          href='https://www.instagram.com/Thenotoriousrafa'
          target='_blank'
          rel='nonrefereer noopener'
          className='md:flex w-[230px] md:w-[300px] justify-between left-2 rounded transform -translate-y-1/2 border border-blanco/80 hover:border-blanco hover:bg-blanco pl-6 py-4 top-[90%] fixed z-10 bg-blanco/80 duration-300 ease-in-out transition-colors'>
          <div className='flex flex-col'>
            <span className='text-black/50 mb-1 uppercase font-bold text-[10px] md:text-xs font-mono tracking-wider'>
              INSTAGRAM:
            </span>
            <span className='exo-2 uppercase text-[10px] md:text-xs text-black'>
              @thenotoriousrafa
            </span>
          </div>
          <img
            src={dendenmushi}
            className='absolute z-10 md:-top-[38%] top-[5%] md:left-[70%] left-[75%] w-auto md:h-28 h-16'
          />
        </a>
        {/* Conditionally render the Left Scroll Button */}
        {showLeftButton && (
          <button
            aria-label='Left Click Button'
            className='invisible md:visible absolute left-10 top-[45%] transform -translate-y-1/2 transition-colors duration-300 ease-in-out hover:bg-gray-50/80 bg-gray-50/50 p-1 rounded-full shadow-md'
            onClick={handleScrollLeft}>
            <svg
              height={42}
              width={42}
              viewBox='0 0 24 24'
              fill='none'
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
                  d='M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z'
                  fill='#0F0F0F'></path>
              </g>
            </svg>
          </button>
        )}

        {/* Right Scroll Button */}
        <button
          aria-label='Right Click Button'
          className='invisible md:visible absolute right-2 top-[45%] transform -translate-y-1/2 hover:bg-gray-50/80 bg-gray-50/50 transition-colors duration-300 ease-in-out p-1 rounded-full shadow-md backdrop-blur-sm'
          onClick={handleScrollRight}>
          <svg
            height={42}
            width={42}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g
              id='SVGRepo_bgCarrier'
              strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              <path
                d='M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z'
                fill='#0F0F0F'></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}

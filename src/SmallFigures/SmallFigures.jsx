import { Link } from 'react-router-dom'
import SmallFiguresArray from './SmallFiguresArray'
import { useRef, useState } from 'react'

export default function SmallFigures() {
  const [showLeftButton, setShowLeftButton] = useState(false) // Controls the visibility of the left button
  const scrollContainerRef = useRef(null)
  const sharedArray = SmallFiguresArray()
  const newSharedArray = sharedArray.slice(0, 5)

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
    <section className='flex flex-col pt-10'>
      <div className='pl-6 md:pl-32'>
        <h1 className='md:text-[28px] text-[24px] md:leading-[32px] leading-[30px] font-semibold tracking-[0.196px] sm:pb-[10px]'>
          Top Collectibles.{' '}
          <span className='text-[#6e6e73]'>Small-Sized Figures.</span>
        </h1>
      </div>
      <div className='relative'>
        <div
          ref={scrollContainerRef}
          className='flex overflow-x-auto scroll-smooth pt-[24px] scroll-container pb-[45px] md:pb-[80px] pl-6 md:pl-32'>
          {newSharedArray.map((character, index) => (
            <Link
              key={index}
              to={`/DimensionaL/SmallFigure/${character.id}`}>
              <div className='rounded-2xl shadow-xl md:hover:shadow-2xl md:hover-scale-101 md:ease-in-out md:duration-500 p-7 w-[310px] md:w-[315px] bg-white mr-[20px]'>
                <div className='pt-[40px] px-[10px] mx-auto overflow-hidden flex justify-center'>
                  <img
                    alt={character.alt}
                    src={character.images[0]}
                    className='object-cover w-auto h-[300px] md:h-[350px] laptop:h-[400px]'
                  />
                </div>
                <div className='flex w-fit flex-col'>
                  <img
                    alt={character.logoAlt}
                    className='w-fit object-scale-down h-6'
                    src={character.logo}
                  />
                  <p className='figure-name-keychains mt-1 sm:mt-2'>{character.summary}</p>
                  <p className='items-details-keychains'>{character.price}</p>
                </div>
                {/* <div>
                <Link to={`/Anime-Goods/SmallFigure/${character.id}`}>
                  <button className='mt-4 w-full rounded-lg text-[16px] px-8 py-4 border border-stone-700/50 tracking-normal leading-[16px] inter capitalize duration-300 ease-linear transition hover:bg-blue-800/90 hover:text-white cursor-pointer md:mb-0 mb-4'>
                    buy now
                  </button>
                </Link>
              </div> */}
              </div>
            </Link>
          ))}
        </div>
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
    </section>
  )
}

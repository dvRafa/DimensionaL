import { Link } from 'react-router-dom'
import SmallFiguresArray from './SmallFiguresArray'

export default function SmallFigures() {
  const sharedArray = SmallFiguresArray()
  const newSharedArray = sharedArray.slice(0, 5)

  return (
    <section className='flex flex-col pt-10 bg-darkbg text-blanco'>
      <div className='pl-6 md:pl-18'>
        <h1
          id='animation-title'
          className='md:text-[28px] exo-2 text-[20px] md:leading-[32px] leading-[30px] tracking-[0.196px] sm:pb-[10px] bg-gradient-to-r from-[#b1dbc2] via-blanco to-[#eff7f2] inline-block text-transparent bg-clip-text'>
          Top Collectibles. Small-Sized Figures.
        </h1>
      </div>
      <div className='relative'>
        <div className='component-scale flex overflow-x-auto scroll-smooth pt-[24px] scroll-container pb-[45px] md:pb-[115px] pl-6 md:pl-18'>
          {newSharedArray.map((character, index) => (
            <Link
              key={index}
              to={`/DimensionaL/SmallFigure/${character.id}`}>
              <div className='group rounded-2xl hover-scale-101-smallFigures md:transition-all md:ease-in-out md:duration-500 p-7 w-[310px] md:w-[315px] bg-cardbg mr-[8px]'>
                <div className='flex justify-end'>
                  <svg
                    className='w-7 invisible group-hover:visible duration-100 ease-in-out'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    stroke='#ffffff'>
                    <g
                      id='SVGRepo_bgCarrier'
                      stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'></g>
                    <g id='SVGRepo_iconCarrier'>
                      <path
                        d='M7 17L17 7M17 7H8M17 7V16'
                        stroke='#00ffad'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'></path>{' '}
                    </g>
                  </svg>
                </div>
                <div className='px-[10px] mx-auto overflow-hidden flex justify-center'>
                  <img
                    alt={character.alt}
                    src={character.images[0]}
                    className='object-cover w-auto h-[500px] md:h-[350px] laptop:h-[400px] brightness-125'
                  />
                </div>
                <div className='flex flex-col items-start'>
                  <div className='flex p-2 duration-500 ease-in-out transition-colors items-center'>
                    <img
                      alt={character.logoAlt}
                      className='object-scale-down h-6'
                      src={character.logo}
                    />
                  </div>
                  <p className='figure-name-keychains mt-1 sm:mt-2'>
                    {character.summary}
                  </p>
                  <p className='items-details-keychains'>{character.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

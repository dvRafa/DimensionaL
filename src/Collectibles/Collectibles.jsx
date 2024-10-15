import { Link } from 'react-router-dom'
import CollectiblesArray from './CollectiblesArray'

export default function Collectibles() {
  const sharedArray = CollectiblesArray()
  const newSharedArray = sharedArray.slice(0, 3)

  return (
      <div className='md:max-w-[980px] max-w-[320px] mx-auto pt-10'>
        <h1 className='capitalize md:text-[48px] text-[2rem] md:leading-[72px] leading-[2.5rem] montserrat tracking-wide'>
          get it before it's gone
        </h1>
        <div className='flex flex-col md:flex-row items-center justify-center md:gap-x-2 gap-y-2 pt-[25px]'>
          {newSharedArray.map((character, index) => (
            <Link
              to={`/Anime-Goods/Collectible/${character.id}`}
              key={index}>
              <div className='relative p-2 bg-[#f1f1f1] rounded'>
                <img
                  className='md:w-[300px] md:h-[569px] w-[350px] h-[400px] object-cover'
                  src={character.images[0]}
                  alt={character.alt}
                />
                <h1 className='absolute bottom-0 left-0 right-0 text-slate-900 text-left p-4 z-10 text-[30px] poppins leading-[30px] uppercase max-w-[255px]'>
                  {character.name}
                </h1>
              </div>
            </Link>
          ))}
        </div>
        <div className='w-fit mx-auto'>
          <Link to='/Anime-Goods/Collectibles/Figures'>
            <button className='mt-[32px] text-[16px] px-8 py-6 border border-stone-700/50 tracking-normal capitalize leading-[16px] inter duration-300 ease-linear transition hover:bg-blue-800/90 hover:text-white cursor-pointer md:mb-0 mb-4'>
              shop collectibles
            </button>
          </Link>
        </div>
      </div>
  )
}

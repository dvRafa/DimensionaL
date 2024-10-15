import { Link } from 'react-router-dom'
import SmallFiguresArray from './SmallFiguresArray'

export default function SmallFigures() {
  const sharedArray = SmallFiguresArray()
  const newSharedArray = sharedArray.slice(0, 3)

  return (
    <section className='md:max-w-[1200px] max-w-[320px] mx-auto flex flex-col pt-10'>
      <h1 className='capitalize md:text-[48px] text-[2rem] md:leading-[72px] leading-[2.5rem] montserrat'>
        top collectibles
      </h1>
      <div className='pt-[25px] grid grid-cols-3 gap-x-3 overflow-x-scroll scroll-container md:overflow-x-hidden'>
        {newSharedArray.map((character, index) => (
          <Link
            className='border rounded-lg shadow-md p-4'
            key={index}
            to={`/Anime-Goods/SmallFigure/${character.id}`}>
            <div
              className='w-72 h-[430px] md:w-full mx-auto md:h-auto overflow-hidden'>
              <img
                alt={character.alt}
                src={character.images[0]}
                className='w-full h-full md:h-[525px] md:w-full object-cover hover:cursor-pointer rounded-lg'
              />
            </div>
            <div className='flex flex-col'>
              <p className='figure-name-keychains'>
                {character.name} - {character.data}
              </p>
              <p className='items-details-keychains'>{character.price}</p>
            </div>
            <div className='w-full'>
              <Link to={`/Anime-Goods/SmallFigure/${character.id}`}>
                <button className='mt-4 w-full rounded-lg text-[16px] px-8 py-4 border border-stone-700/50 tracking-normal leading-[16px] inter capitalize duration-300 ease-linear transition hover:bg-blue-800/90 hover:text-white cursor-pointer md:mb-0 mb-4'>
                  buy now
                </button>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

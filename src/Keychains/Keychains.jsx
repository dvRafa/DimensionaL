import { Link } from 'react-router-dom'
import KeychainArray from './KeychainArray'

export default function Keychains() {
  const sharedArray = KeychainArray()
  const newSharedArray = sharedArray.slice(0, 3)

  return (
    <section className='md:max-w-[1200px] max-w-[320px] mx-auto flex flex-col pt-10'>
      <h1 className='capitalize md:text-[48px] text-[2rem] md:leading-[72px] leading-[2.5rem] montserrat'>
        Japan Original
      </h1>
      <div className='pt-[25px] grid grid-cols-3 gap-x-3 overflow-x-scroll scroll-container md:overflow-x-hidden'>
        {newSharedArray.map((character, index) => (
          <Link
            className='border rounded-lg shadow-md p-4'
            key={index}
            to={`/Anime-Goods/Keychain/${character.id}`}>
            {character.images.map((image, ImgIndex) => (
              <div
                key={ImgIndex}
                className='w-72 h-[430px] md:w-full mx-auto md:h-auto overflow-hidden'>
                <img
                  key={ImgIndex}
                  alt={character.alt}
                  src={image}
                  loading='eager'
                  className='w-full h-full md:h-[296px] md:w-full object-cover hover:cursor-pointer rounded-lg'
                />
              </div>
            ))}
            <div className='flex flex-col'>
              <p className='figure-name-keychains'>
                {character.name} {character.nickname} - {character.data}
              </p>
              <p className='items-details-keychains'>{character.price}</p>
            </div>
            <div className='w-full'>
              <Link to={`/Anime-Goods/Keychain/${character.id}`}>
                <button className='mt-4 w-full rounded-lg text-[16px] px-8 py-4 border border-stone-700/50 tracking-normal capitalize leading-[16px] inter duration-300 ease-linear transition hover:bg-blue-800/90 hover:text-white cursor-pointer md:mb-0 mb-4'>
                  Buy Now
                </button>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import KeychainArray from './KeychainArray'

const Lists = [
  'Shingeki No Kyojin',
  'Naruto Shippuden',
  'One Piece',
  'Kimetsu No Yaiba',
]

export default function KeychainsOptions() {

  const sharedArray = KeychainArray()

  return (
    <div className='max-w-[1200px] mx-auto my-24'>
      <div className='flex flex-row'>
        <div className='flex flex-col w-1/4'>
          <div className='flex flex-row'>
            <h4 className='text-base uppercase text-left tracking-normal font-bold'>
              anime
            </h4>
          </div>
          <div className='flex mt-2'>
            <div className='w-full space-y-4'>
              {Lists.map((list, index) => (
                <div
                  className='flex gap-x-4'
                  key={index}>
                  <span class='inline-block h-7 w-7 text-[1.75rem] text-neutral-400 cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'>
                      <path
                        fill='currentColor'
                        d='M384 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z'></path>
                    </svg>
                  </span>
                  <p className='text-base capitalize text-left tracking-normal font-semibold'>
                    {list}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 h-full'>
          {sharedArray.map((character, index) => (
            <div
              className='flex flex-col'
              key={index}>
              <Link to={`/Anime-Goods/Keychain/${character.id}`}>
                <div className='flex flex-col bg-[#f1f1f1] items-center justify-center'>
                  <img
                    src={character.images}
                    className='w-[250px] h-[360px] p-2 object-cover'
                    alt={character.alt}
                  />
                </div>
                <div className='flex flex-col'>
                  <h1 className='text-left text-[20px] font-bold leading-[28px] mt-2 hover:underline'>
                    {character.name}
                  </h1>
                  <p className='mt-2 leading-[24px] text-lg'>
                    {character.price}
                  </p>
                  <button className='mt-2 text-[16px] px-8 py-6 w-full border border-stone-700/50 tracking-normal capitalize leading-[16px] gothic-a1-regular font-normal duration-300 ease-linear transition hover:bg-blue-800/90 hover:text-white cursor-pointer md:mb-0 mb-4 border-blue-950'>
                    Buy Now
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

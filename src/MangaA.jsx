import ShingekiNoKyojin from './assets/Mangas/ShingekiNoKyojin.jpg'

const Characters = [
  {
    images: [ShingekiNoKyojin],
    name: 'Shingeki No Kyojin - Attack On Titan, Volume 16',
    data: 'Captured by Rod Reiss, the rightful king, Krista and Eren finally have their memories back. What exactly happened to Eren, and what was the crime his father committed? Meanwhile, the Survey Corps desperately hunts for Eren, while at the same time seeking to legitimize their military coup. As the situation inside the walls...',
    page: '194',
    release: 'August 25, 2015',
    price: '$60',
    alt: 'Shingeki No Kyojin',
  },
]

function MangaA() {
  return (
    <div className='flex justify-end md:max-w-[1180px] max-w-[320px] mx-auto md:ml-auto md:pr-[25px] pt-[80px]'>
      <div className='grid grid-cols-1'>
        {Characters.map((character, index) => (
          <div className='flex md:flex-row flex-col gap-x-[25px]'
          key={index}
          >
            <div
              key={index}
              className='flex flex-col w-[312px]'>
              <p className='md:mb-[32px] mb-[16px] uppercase text-[16px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-semibold'>
                FROM {character.price}
              </p>
              <h1 className='md:mb-[32px] mb-[16px] tracking-normal text-[32px] leading-[38.4px] gothic-a1-light md:tracking-[0px]'>
                {character.name}
              </h1>
              <p className='leading-[16px] text-[16px] tracking-[1.32] gothic-a1-regular'>
                Pages: {character.page}
              </p>
              <p className='leading-[16px] text-[16px] tracking-[1.32] gothic-a1-regular pt-1'>
                Release Date in Japan: {character.release}
              </p>
              <p className='mt-[30px] mb-[32px] md:mb-0 leading-[21px] text-[14px] tracking-[0.28px] gothic-a1-regular'>
                {character.data}
              </p>
            </div>
            <div>
              <img
                src={character.images}
                alt={character.alt}
                className='md:w-[535px] md:h-[960px] md:object-cover md:hover:cursor-pointer h-full w-full object-scale-down'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MangaA

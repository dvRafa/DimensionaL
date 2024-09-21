import KimetsuNoYaiba from './assets/Mangas/KimetsuNoYaiba.jpg'

const Characters = [
  {
    images: [KimetsuNoYaiba],
    name: 'Kimetsu No Yaiba - Demon Slayer: Gaiden Volume',
    data: 'Kimetsu no Yaiba: Gaiden is a volume consisting of Giyu Tomiokas Story and Kyojuro Rengokus Story, as well as Kimetsu Between the Scenes.',
    page: '215',
    release: 'December 4, 2020',
    price: '$45',
    alt: 'Kimetsu No Yaiba',
  },
]

function MangaB() {
  return (
    <div>
      <div className='md:max-w-[1180px] max-w-[320px] mx-auto py-[65px]'>
        {Characters.map((character, index) => (
          <div
            key={index}
            className='grid md:grid-cols-2'>
            <div>
              <h1 className='md:text-[40px] text-[32px] gothic-a1-light tracking-normal md:leading-[48px] leading-[38.4px] md:mb-0 mb-[16px]'>
                {character.name}
              </h1>
            </div>
            <div className='flex flex-col'>
              <h1 className='md:mb-[32px] mb-0 uppercase text-[16px] tracking-[1.32px] leading-[16px] md:tracking-tight gothic-a1-regular font-semibold'>
                FROM {character.price}
              </h1>
              <p className='md:text-[14px] md:pt-1 pt-0 mt-[16px] gothic-a1-regular md:leading-[21px] text-[16px] leading-[16px] md:tracking-[0.28px] tracking-[1.32px]'>
                Pages: {character.page}
              </p>
              <p className='md:text-[14px] pt-1 gothic-a1-regular md:leading-[21px] text-[16px] leading-[16px] md:tracking-[0.28px] tracking-[1.32px]'>
                Release Date in Japan: {character.release}
              </p>
              <p className='mt-[30px] leading-[21px] text-[14px] tracking-[0.28px] gothic-a1-regular'>
                {character.data}
              </p>
              <img
                className='h-full w-full object-cover pt-[32px] hover:cursor-pointer'
                src={character.images}
                alt={character.alt}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MangaB

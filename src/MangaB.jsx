import OnePiece from './assets/Mangas/OnePiece.jpg'

const Characters = [
  {
    images: [OnePiece],
    name: 'One Piece: Doflamingo Appears, Volume 70 - Chapters 691-700',
    data: 'With the escape of the institute in front of it, Caesar makes a strange transformation. Will Luffy shatter his ambitions!? The sectakehai and Doframingo, which are threaded behind the scenes, also move, and things will fall sharply...!! “A marine adventure romance around one secret treasure”!!',
    page: '216',
    release: 'June 4, 2013',
    price: '$45',
    alt: 'One Piece',
  },
]

function MangaB() {
  return (
    <div>
      <div className='md:max-w-[1180px] max-w-[320px] mx-auto pt-[80px]'>
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

import Naruto from './assets/Mangas/Naruto.jpg'
import ShingekiNoKyojin from './assets/Mangas/ShingekiNoKyojin.jpg'
import KimetsuNoYaiba from './assets/Mangas/KimetsuNoYaiba.jpg'
import OnePiece from './assets/Mangas/OnePiece.jpg'

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
  {
    images: [OnePiece],
    name: 'One Piece: Doflamingo Appears, Volume 70 - Chapters 691-700',
    data: 'With the escape of the institute in front of it, Caesar makes a strange transformation. Will Luffy shatter his ambitions!? The sectakehai and Doframingo, which are threaded behind the scenes, also move, and things will fall sharply...!! “A marine adventure romance around one secret treasure”!!',
    page: '216',
    release: 'June 4, 2013',
    price: '$45',
    alt: 'One Piece',
  },
  {
    images: [Naruto],
    name: 'Naruto Shippuden: Dream World, Volume 63 - Chapters 598-607',
    data: 'With the help of Kakashi and Guy, Naruto seems to have found a way around Tobis invincible abilities. But why do Tobis techniques seem to mimic Kakashis so closely? And when Tobis mask is finally torn off, will the revelation shock the ninja world?!',
    page: '192',
    release: 'December 28, 2012',
    price: '$50',
    alt: 'Naruto Shippuden',
  },
  {
    images: [KimetsuNoYaiba],
    name: 'Kimetsu No Yaiba - Demon Slayer: Gaiden Volume',
    data: 'Kimetsu no Yaiba: Gaiden is a volume consisting of Giyu Tomiokas Story and Kyojuro Rengokus Story, as well as Kimetsu Between the Scenes.',
    page: '215',
    release: 'December 4, 2020',
    price: '$45',
    alt: 'Kimetsu No Yaiba',
  }
]

function Mangas() {
  return (
    <div className='bg-[#fafafa] gothic-a1-regular'>
      <div className='md:max-w-[1300px] max-w-[350px] mx-auto md:pt-[65px] pt-[50px]'>
        <h1 className='text-[15px] leading-[15px] tracking-[0.5px] gothic-a1-light md:text-[25px] md:leading-[25px] md:-tracking-[1px] w-fit mx-auto'>
          masterpiece
        </h1>
        <h2 className='text-[32px] leading-[32px] -tracking-[1px] md:text-[47px] text-center items-center justify-center md:-tracking-[2px] md:leading-[47px]'>
          Mangas
        </h2>
        <div className='grid md:grid-cols-2 md:gap-8 gap-y-6 md:gap-y-0 md:pt-[65px] pt-[50px]'>
          {Characters.map((character, index) => (
            <div
              key={index}
              className='flex flex-col md:pb-6'>
              <div className='p-6 bg-[#fff9f8]'>
                <img
                  loading='lazy'
                  src={character.images}
                  alt={character.alt}
                  className='md:h-[500px] h-[250px] w-full duration-300 ease-in hover:scale-105 brightness-105'
                />
              </div>
              <div className='flex flex-col pt-2 text-left justify-center'>
                <h1 className='text-[19px] -tracking-[0.5px] leading-[19px]'>
                  {character.name}
                </h1>
                <span className='text-[19px] md:mt-2 -tracking-[0.5px] leading-[19px]'>
                  {character.price}
                </span>
                <div className='flex divide-x'>
                  <div className='pr-2'>
                    <p className='md:text-base text-sm mt-2 md:-tracking-[1px] -tracking-[0.5px]'>
                      <span>Pages:</span> {character.page}
                    </p>
                    <p className='md:text-base text-sm md:-tracking-[1px] -tracking-[0.5px]'>
                      <span>Release Date in Japan:</span> {character.release}
                    </p>
                  </div>
                  <span className='line-clamp-4 md:text-base text-sm md:-tracking-[1px] -tracking-[0.5px] w-1/2 pl-2'>
                    {character.data}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mangas

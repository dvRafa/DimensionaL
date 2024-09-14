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
    price: '$100',
    alt: 'Shingeki No Kyojin',
  },
  {
    images: [OnePiece],
    name: 'One Piece: Doflamingo Appears, Volume 70 - Chapters 691-700',
    data: 'With the escape of the institute in front of it, Caesar makes a strange transformation. Will Luffy shatter his ambitions!? The sectakehai and Doframingo, which are threaded behind the scenes, also move, and things will fall sharply...!! “A marine adventure romance around one secret treasure”!!',
    page: '216',
    release: 'June 4, 2013',
    price: '$100',
    alt: 'One Piece',
  },
  {
    images: [Naruto],
    name: 'Naruto Shippuden: Dream World, Volume 63 - Chapters 598-607',
    data: 'With the help of Kakashi and Guy, Naruto seems to have found a way around Tobis invincible abilities. But why do Tobis techniques seem to mimic Kakashis so closely? And when Tobis mask is finally torn off, will the revelation shock the ninja world?!',
    page: '192',
    release: 'December 28, 2012',
    price: '$100',
    alt: 'Naruto Shippuden',
  },
  {
    images: [KimetsuNoYaiba],
    name: 'Kimetsu No Yaiba - Demon Slayer: Gaiden Volume',
    data: 'Kimetsu no Yaiba: Gaiden is a volume consisting of Giyu Tomiokas Story and Kyojuro Rengokus Story, as well as Kimetsu Between the Scenes.',
    page: '215',
    release: 'December 4, 2020',
    price: '$100',
    alt: 'Kimetsu No Yaiba',
  },
]

function Mangas() {
  return (
    <div className='bg-[#fafafa]'>
      <div className='md:max-w-[1200px] max-w-[300px] mx-auto'>
        <h1 className='text-md md:text-xl pb-4 pt-14 text-left justify-center tracking-[1.05px] font-robotoo'>
          Mangas
        </h1>
        <div className='md:grid md:grid-cols-2 md:gap-8'>
          {Characters.map((character, index) => (
            <div
              key={index}
              className='pb-6 flex flex-col'>
              <div className='w-full md:p-6 md:bg-[#fff9f8]'>
                <img
                  loading='lazy'
                  src={character.images}
                  alt={character.alt}
                  className='md:h-[500px] h-[250px] w-full duration-200 ease-in hover:scale-105'
                />
              </div>
              <div className='flex flex-col md:pt-0 pt-2 text-left border-b mb-6 md:mb-0 md:border-b-0 justify-center'>
                <h1 className='text-lg md:text-2xl tracking-[1.05px]'>
                  {character.name}
                </h1>
                <span className='md:text-xl text-sm my-2 font-robotoo'>
                  {character.price}
                </span>
                <span className='font-robotoo md:text-base text-xs text-[#374151]'>
                  <span>Pages:</span> {character.page}
                </span>
                <span className='text-[#374151] font-robotoo md:text-base text-xs'>
                  <span>Release Date in Japan:</span> {character.release}
                </span>
                <span className='mt-4 mb-6 md:mt-2 font-robotooo line-clamp-3 md:line-clamp-4 md:mb-0 text-balance md:border-b-0 md:pb-0 text-[#374151] md:text-sm text-xs'>
                {character.data}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mangas

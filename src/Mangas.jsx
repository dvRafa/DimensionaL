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
    info: 'https://en.wikipedia.org/wiki/Shingeki_no_Kyojin',
  },
  {
    images: [OnePiece],
    name: 'One Piece: Doflamingo Appears, Volume 70 - Chapters 691-700',
    data: 'With the escape of the institute in front of it, Caesar makes a strange transformation. Will Luffy shatter his ambitions!? The sectakehai and Doframingo, which are threaded behind the scenes, also move, and things will fall sharply...!! “A marine adventure romance around one secret treasure”!!',
    page: '216',
    release: 'June 4, 2013',
    price: '$100',
    alt: 'One Piece',
    info: 'https://en.wikipedia.org/wiki/https:/en.wikipedia.org/wiki/One_Piece',
  },
  {
    images: [Naruto],
    name: 'Naruto Shippuden: Dream World, Volume 63 - Chapters 598-607',
    data: 'With the help of Kakashi and Guy, Naruto seems to have found a way around Tobis invincible abilities. But why do Tobis techniques seem to mimic Kakashis so closely? And when Tobis mask is finally torn off, will the revelation shock the ninja world?!',
    page: '192',
    release: 'December 28, 2012',
    price: '$100',
    alt: 'Naruto Shippuden',
    info: 'https://en.wikipedia.org/wiki/List_of_Naruto:_Shippuden_episodes',
  },
  {
    images: [KimetsuNoYaiba],
    name: 'Kimetsu No Yaiba - Demon Slayer: Gaiden Volume',
    data: 'Kimetsu no Yaiba: Gaiden is a volume consisting of Giyu Tomiokas Story and Kyojuro Rengokus Story, as well as Kimetsu Between the Scenes.',
    page: '215',
    release: 'December 4, 2020',
    price: '$100',
    alt: 'Kimetsu No Yaiba',
    info: 'https://es.wikipedia.org/wiki/Kimetsu_no_Yaiba',
  },
]

function Manga() {
  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='text-lg md:text-xl my-4 text-left items-center justify-center tracking-[1.05px] font-robotoo'>
        Mangas
      </h1>
      {Characters.map((character, index, info) => (
        <div
          key={index}
          className='mb-6 bg-gradient-to-r from-[#fbf9f9] to-[#fafffa] flex flex-row'>
          <div className='w-full'>
            <img
              loading='lazy'
              src={character.images}
              alt={character.alt}
              className='h-[550px] w-full shadow-sm'
            />
          </div>
          <div className='flex flex-col md:pt-0 pt-2 md:px-10 text-center border-b mb-6 md:mb-0 md:border-b-0 justify-center w-2/5'>
            <h1 className='text-lg md:text-2xl font-roboto tracking-[1.05px'>
              {character.name}
            </h1>
            <span className='md:text-xl my-2 font-robotoo'>
              <span>Price:</span> {character.price}
            </span>
            <span className='text-[#000] font-robotoo'>
              <span>Pages:</span> {character.page}
            </span>
            <span className='text-[#000] font-robotoo'>
              <span>Release Date in Japan:</span> {character.release}
            </span>
            <a
              href={`https:www.wikipedia.com/${character.info}`}
              className='mt-4 mb-6 md:mt-2 text-[rgb(18,54,82)] font-robotoo line-clamp-3 md:line-clamp-4 md:mb-0 text-balance hover:text-[#326cad] hover:cursor-pointer md:border-b-0 md:pb-0'>
              {character.data}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Manga

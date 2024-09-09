import LuffyFront from './assets/Box/LuffyFront.webp'
import Luffy from './assets/Box/Luffy.webp'
// import LuffyBack from './assets/Box/LuffyBack.webp'
import Sanemi from './assets/Box/Sanemi.webp'
// import SanemiFront from './assets/Box/SanemiFront.webp'
import SanemiBack from './assets/Box/SanemiBack.webp'
// import SenjuroFront from './assets/Box/SenjuroFront.webp'
import Senjuro from './assets/Box/Senjuro.webp'
import SenjuroBack from './assets/Box/SenjuroBack.webp'
// import NezukoFront from './assets/Box/NezukoFront.webp'
import NezukoBack from './assets/Box/NezukoBack.webp'
import Nezuko from './assets/Box/Nezuko.webp'
import Levi0 from './assets/Figures/Levi0.webp'
import Levi1 from './assets/Figures/Levi1.webp'
import Luffy0 from './assets/Figures/Luffy0.webp'
import Luffy1 from './assets/Figures/Luffy1.webp'

const Characters = [
  {
    name: 'Levi Ackerman - ',
    title: 'Final Season by Banpresto',
    price: '$100',
    size: '16cm',
    anime: 'Shingeki No Kyojin',
    images: [Levi0, Levi1],
    alt: 'Levi Ackerman',
  },
  {
    name: 'Monkey D. Luffy - ',
    title: 'Bandai Ichiban Kuji by Banpresto',
    price: '$100',
    size: '14cm',
    anime: 'One Piece',
    images: [Luffy1, Luffy0],
    alt: 'Monkey D. Luffy',
  },
  {
    name: 'Nezuko Kamado - ',
    title: 'World Collectible Figure by Banpresto',
    size: '7cm',
    price: '$100',
    anime: 'Kimetsu No Yaiba',
    images: [Nezuko, NezukoBack],
    alt: 'Nezuko Kamado',
  },
  {
    name: 'Monkey D. Luffy - ',
    title: 'One Piece Film Red DFX The Grandline Men Vol. 1 by Banpresto',
    size: '16cm',
    price: '$100',
    anime: 'One Piece',
    images: [LuffyFront, Luffy],
    alt: 'Monkey D. Luffy',
  },
  {
    name: 'Sanemi Shinazugawa - ',
    title: 'Kimetsu No Yaiba Vol. 14 by Banpresto',
    size: '17cm',
    price: '$100',
    anime: 'Kimetsu No Yaiba',
    images: [Sanemi, SanemiBack],
    alt: 'Sanemi Shinazugawa',
  },
  {
    name: 'Senjuro Rengoku - ',
    title: 'Kimetsu No Yaiba Vol. 26 by Banpresto',
    size: '18cm',
    price: '$100',
    anime: 'Kimetsu No Yaiba',
    images: [Senjuro, SenjuroBack],
    alt: 'Senjuro Rengoku',
  },
]

function Box() {
  return (
    <section className='bg-[#222] text-white'>
      <div className='md:max-w-[650px] max-w-sm mx-auto pb-20 pt-6'>
        <h1
          id='Collectible-Figure-Box'
          className='md:mb-10 mb-6 md:mt-24 md:text-3xl text-xl text-center items-center justify-center tracking-[1.05px] uppercase font-roboto'>
          Collectible Figures
        </h1>
        <div>
          {Characters.map((character, index) => (
            <div
              key={index}
              className='mb-6 w-full'>
              <div className='md:grid w-full md:grid-cols-2 gap-x-1 md:gap-x-6 mb-4 md:justify-items-center items-center'>
                <img
                  key={character.index}
                  src={character.images[0]}
                  alt={character.alt}
                  className='md:h-[400px] w-full rounded-lg hover:cursor-pointer'
                  loading='lazy'
                />
                <img
                  key={character.index}
                  src={character.images[1]}
                  alt={character.alt}
                  className='h-[400px] w-full rounded-lg hover:cursor-pointer md:flex hidden invisible md:visible'
                  loading='lazy'
                />
              </div>
              <div className='flex flex-col md:text-left text-center'>
                <h1 className='md:text-3xl text-lg font-roboto tracking-[1.05px]'>
                  <span className='italic'>{character.name}</span>
                  {character.title}
                </h1>
                <span className='md:text-lg mt-1 font-robotoo tracking-[1px]'>
                  <span>Price:</span> {character.price}
                </span>
                <h2 className='tracking-[1.05px] font-robotooo md:text-base text-sm text-[#f5f6f7]'>
                  <span>Size:</span> {character.size}
                </h2>
                <h2 className='tracking-[1.05px] font-robotooo md:text-base text-sm text-[#f5f6f7]'>
                  {character.anime}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Box

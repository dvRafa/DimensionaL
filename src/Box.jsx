import LuffyFront from './assets/Box/LuffyFront.webp'
import Luffy from './assets/Box/Luffy.webp'
import LuffyBack from './assets/Box/LuffyBack.webp'
import Sanemi from './assets/Box/Sanemi.webp'
import SanemiFront from './assets/Box/SanemiFront.webp'
import SanemiBack from './assets/Box/SanemiBack.webp'
import SenjuroFront from './assets/Box/SenjuroFront.webp'
import Senjuro from './assets/Box/Senjuro.webp'
import SenjuroBack from './assets/Box/SenjuroBack.webp'
import NezukoFront from './assets/Box/NezukoFront.webp'
import NezukoBack from './assets/Box/NezukoBack.webp'
import Nezuko from './assets/Box/Nezuko.webp'

const Characters = [
  {
    name: 'Monkey D. Luffy - One Piece Film Red DFX The Grandline Men Vol. 1 by Banpresto',
    size: '16cm',
    price: '$100',
    anime: 'One Piece',
    images: [LuffyFront, LuffyBack, Luffy],
    alt: 'Monkey D. Luffy'
  },
  {
    name: 'Nezuko Kamado - World Collectible Figure by Banpresto',
    size: '7cm',
    price: '$100',
    anime: 'Kimetsu No Yaiba - Demon Slayer',
    images: [Nezuko, NezukoFront, NezukoBack],
    alt: 'Nezuko Kamado'
  },
  {
    name: 'Sanemi Shinazugawa - Kimetsu No Yaiba Vol. 14 by Banpresto',
    size: '17cm',
    price: '$100',
    anime: 'Kimetsu No Yaiba - Demon Slayer',
    images: [Sanemi, SanemiFront, SanemiBack],
    alt: 'Sanemi Shinazugawa'
  },
  {
    name: 'Senjuro Rengoku - Kimetsu No Yaiba Vol. 26 by Banpresto',
    size: '18cm',
    price: '$100',
    anime: 'Kimetsu No Yaiba - Demon Slayer',
    images: [Senjuro, SenjuroFront, SenjuroBack],
    alt: 'Senjuro Rengoku'
  },
]

function Box() {
  return (
    <div className='max-w-[800px] mx-auto mb-20'>
      <h1 id='Collectible-Figure-Box' className='mb-12 text-3xl text-center items-center justify-center tracking-[1.05px] uppercase font-roboto font-bold'>
        Collectible Figures with Box
      </h1>
      <div>
        {Characters.map((character, index) => (
          <div
            key={index}
            className='mb-10 w-full'>
            <div className='grid w-full grid-cols-3 gap-x-[40px] mb-8 justify-items-center items-center'>
              {character.images.map((image, ImgIndex, alt) => (
                <img
                  key={ImgIndex}
                  src={image}
                  alt={alt}
                  className='h-[380px] w-full'
                  loading='lazy'
                  />
              ))}
            </div>
            <div className='flex flex-col text-left'>
              <h1 className='text-3xl font-roboto tracking-[1.05px]'>
                {character.name}
              </h1>
              <span className='text-[18px] mt-2 tracking-[1px] font-roboto font-bold uppercase'>
                {character.price}
              </span>
              <h2 className='mt-4 tracking-[1.05px] font-roboto text-sm text-[#000]'>
                <strong>Size:</strong> {character.size}
              </h2>
              <h2 className='text-[#000] tracking-[1.05px] font-roboto text-sm'>
                <strong>Anime:</strong> {character.anime}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Box

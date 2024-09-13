import FBardock from './assets/Figures/FBardock.webp'
import BBardock from './assets/Figures/BBardock.webp'
import FAkainu from './assets/Figures/FAkainu.webp'
import BAkainu from './assets/Figures/BAkainu.webp'
import FBrook from './assets/Figures/FBrook.webp'
import BBrook from './assets/Figures/BBrook.webp'
import FGoku from './assets/Figures/FGoku.webp'
import BGoku from './assets/Figures/BGoku.webp'

const Characters = [
  {
    name: 'Goku',
    desc: 'Dragon Ball Z Collection World Figure Vol. 1 by Banpresto 8cm',
    price: '$100',
    anime: 'Dragon Ball Super',
    images: [FGoku, BGoku],
    alt: 'Goku',
  },
  {
    name: 'Bardock',
    desc: 'Bandai Ichiban Kuji Mission 5 Super Saiyan 3 by Banpresto 8cm',
    price: '$100',
    anime: 'Dragon Ball Z',
    images: [FBardock, BBardock],
    alt: 'Bardock',
  },
  {
    name: 'Sakazuki "Akainu"',
    desc: 'One Piece x PEPSI NEX Figure Collection by Suntory 5cm',
    price: '$100',
    anime: 'One Piece',
    images: [FAkainu, BAkainu],
    alt: 'Sakazuki "Akainu"',
  },
  {
    name: 'Brook',
    desc: 'One Piece x PEPSI NEX Figure Collection by Suntory 5cm',
    price: '$100',
    anime: 'One Piece',
    images: [FBrook, BBrook],
    alt: 'Brook',
  },
]

function LegendaryFigures() {
  return (
    <div className='bg-[#fafafa]'>
    <div className='max-w-[260px] md:max-w-[768px] mx-auto'>
      <h1 className='text-md md:text-xl py-4 text-left items-center justify-center tracking-[1.05px] font-robotoo'>
        Legendary Figures
      </h1>
      <div className='flex flex-col'>
        {Characters.map((character, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row md:gap-x-4 justify-center'>
            <div className='flex flex-col md:w-[1050px] w-[260px] mx-auto md:text-start text-center'>
              <h1 className='text-lg md:text-2xl font-roboto tracking-[1.05px]'>
                <span className='md:italic'>{character.name}</span> -{' '}
                {character.desc}
              </h1>
              <span className='md:text-xl mt-4 font-robotoo text-sm'>
                <span>Price:</span> {character.price}
              </span>
            </div>
            <section className='md:flex justify-center w-full flex-grow pb-2 md:pb-6'>
              <div className='flex md:flex-row md:h-[300px] w-full md:flex-grow'>
                <img
                  src={character.images[0]}
                  className='w-[0px] flex-grow duration-300 ease-in hover:cursor-pointer hover:w-[30px] md:rounded-l-md md:mt-0 mt-6 block'
                  alt={character.alt}
                  loading='eager'
                />
                <img
                  src={character.images[1]}
                  className='w-[0px] flex-grow duration-300 ease-in hover:cursor-pointer hover:w-[30px] md:rounded-r-md hidden md:block'
                  alt={character.alt}
                  loading='eager'
                />
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default LegendaryFigures

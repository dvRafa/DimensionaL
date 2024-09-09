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
    desc: 'Collection World Figure Vol. 1 by Banpresto 8cm',
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

function SmallFigure() {
  return (
    <div>
      <h1
        id='Collectible-Figure'
        className='text-xl md:text-3xl pt-6 text-center items-center justify-center tracking-[1.05px] uppercase font-roboto'>
        Collectible Figures
      </h1>
      <div className='flex flex-col max-w-sm md:max-w-4xl mx-auto pb-20 mt-8 md:pt-20'>
        {Characters.map((character, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row md:gap-x-5 justify-center'>
            <section className='md:flex justify-center w-full flex-grow pb-2 md:pb-8'>
              <div className='flex md:flex-row md:h-[300px] w-full h-full md:flex-grow'>
                <img
                  src={character.images[0]}
                  className='w-[0px] flex-grow duration-300 ease-in hover:cursor-pointer hover:w-[30px] md:rounded-l-lg md:mt-0 mt-6 block'
                  alt={character.alt}
                />
                <img
                  src={character.images[1]}
                  className='w-[0px] flex-grow duration-300 ease-in hover:cursor-pointer hover:w-[30px] md:rounded-r-lg hidden md:block'
                  alt={character.alt}
                />
              </div>
            </section>
            <div className='flex flex-col md:w-[1050px] md:text-start text-center'>
              <h1 className='text-lg md:text-3xl font-roboto tracking-[1.05px]'>
                <span className='md:italic'>{character.name}</span> - {character.desc}
              </h1>
              <span className='md:text-lg mt-1 font-robotoo tracking-[1px]'>
                <span>Price:</span> {character.price}
              </span>
              <span className='tracking-[1.05px] font-robotooo text-[#000] text-base'>
                {character.anime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SmallFigure

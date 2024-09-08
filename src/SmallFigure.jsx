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
    name: 'Sakazuki "Akainu"',
    desc: 'One Piece x PEPSI NEX Figure Collection by Suntory 5cm',
    price: '$100',
    anime: 'One Piece',
    images: [BAkainu, FAkainu],
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
  {
    name: 'Bardock',
    desc: 'Bandai Ichiban Kuji Mission 5 Super Saiyan 3 by Banpresto 8cm',
    price: '$100',
    anime: 'Dragon Ball Z',
    images: [BBardock, FBardock],
    alt: 'Bardock',
  },
]

function SmallFigure() {
  return (
    <div className='bg-[#eeeeee6a]'>
      <div className='flex flex-col max-w-4xl mx-auto pb-10 mb-10 pt-6'>
        {Characters.map((character, index) => (
          <div
            key={index}
            className='flex flex-row gap-x-5 pb-8 justify-center'>
            <section className='flex justify-center w-full flex-grow'>
              <div className='flex h-[300px] w-full flex-grow'>
                <img
                  src={character.images[0]}
                  className='w-[0px] flex-grow duration-300 ease-in hover:cursor-pointer hover:w-[50px] rounded-l-lg'
                  alt='Levi Ackerman'
                  loading='lazy'
                />
                <img
                  src={character.images[1]}
                  alt='Levi Ackerman'
                  className='w-[0px] flex-grow duration-300 ease-in hover:cursor-pointer hover:w-[50px] rounded-r-lg'
                  loading='lazy'
                />
              </div>
            </section>
            <div className='flex flex-col w-[1050px]'>
              <h1 className='text-3xl font-roboto tracking-[1.05px]'>
                <i>{character.name}</i> - {character.desc}
              </h1>
              <span className='text-[18px] mt-2 font-roboto tracking-[1px] uppercase font-bold'>
                {character.price}
              </span>
              <span className='text-sm tracking-[1.05px] font-roboto mt-4 text-[#000]'>
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

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
    price: '$20',
    anime: 'Dragon Ball Super',
    images: [FGoku, BGoku],
    alt: 'Goku',
  },
  {
    name: 'Bardock',
    desc: 'Bandai Ichiban Kuji Mission 5 Super Saiyan 3 by Banpresto 8cm',
    price: '$15',
    anime: 'Dragon Ball Z',
    images: [FBardock, BBardock],
    alt: 'Bardock',
  },
  {
    name: 'Sakazuki "Akainu"',
    desc: 'One Piece x PEPSI NEX Figure Collection by Suntory 5cm',
    price: '$20',
    anime: 'One Piece',
    images: [FAkainu, BAkainu],
    alt: 'Sakazuki "Akainu"',
  },
  {
    name: 'Brook',
    desc: 'One Piece x PEPSI NEX Figure Collection by Suntory 5cm',
    price: '$20',
    anime: 'One Piece',
    images: [FBrook, BBrook],
    alt: 'Brook',
  },
]

function CollectibleFigures() {
  return (
    <div className='bg-[#fafafa] border-b pb-4 md:border-b-0 md:pb-0'>
      <div className='max-w-[350px] md:max-w-[1300px] mx-auto pt-[50px] md:pt-[65px] md:border-b md:pb-4'>
        <h1 className='text-[19px] leading-[19px] tracking-[0.5px] font-light md:text-[25px] md:leading-[25px] md:-tracking-[1px] w-fit mx-auto'>Retro</h1>
        <h2 className='text-[32px] leading-[32px] -tracking-[1px] md:text-[47px] text-center items-center justify-center md:-tracking-[2px] font-normal md:leading-[47px]'>
          Collectible Figures
        </h2>
        <div className='grid md:grid-cols-4 md:gap-8 gap-y-[17px] pt-[50px] md:pt-[65px]'>
          {Characters.map((character, index) => (
            <div
              key={index}
              className='flex flex-col-reverse items-center justify-center'>
              <div className='flex flex-col text-start pt-2'>
                <h1 className='text-[19px] -tracking-[0.5px] leading-[19px]'>
                  <span className='italic'>{character.name}</span> {' '}
                  {character.desc}
                </h1>
                <h4 className='text-[19px] md:mt-2 -tracking-[0.5px] leading-[19px]'>
                  {character.price}
                </h4>
              </div>
              <section className='bg-[#e0e0fb4e] p-6 w-full'>
                <div>
                  <img
                    src={character.images[0]}
                    className='duration-300 ease-in hover:scale-105 md:h-[350px] md:w-[257px] w-full h-[350px] object-cover brightness-105'
                    alt={character.alt}
                    loading='eager'
                  />
                  {/* <img
                    src={character.images[1]}
                    className='w-[0px] flex-grow duration-300 ease-in hover:w-[30px] hidden md:block'
                    alt={character.alt}
                    loading='eager'
                  /> */}
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CollectibleFigures

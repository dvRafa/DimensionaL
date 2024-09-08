import Levi0 from './assets/Figures/Levi0.webp'
import Levi1 from './assets/Figures/Levi1.webp'
import Luffy0 from './assets/Figures/Luffy0.webp'
import Luffy1 from './assets/Figures/Luffy1.webp'

const Characters = [
  {
    name: 'Levi Ackerman',
    desc: 'Final Season by Banpresto 16cm',
    price: '$100',
    anime: 'Shingeki No Kyojin',
    images: [Levi0, Levi1],
    alt: 'Levi Ackerman'
  },
  {
    name: 'Monkey D. Luffy',
    desc: 'Bandai Ichiban Kuji by Banpresto 14cm',
    price: '$100',
    anime: 'One Piece',
    images: [Luffy1, Luffy0],
    alt: 'Monkey D. Luffy'
  }
]

function Figure() {
  return (
    <div className='bg-[#eeeeee6a]'>
        <h1 id='Collectible-Figure' className='mb-12 text-3xl pb-10 pt-6 text-center items-center justify-center tracking-[1.05px] uppercase font-roboto font-bold'>
          Collectible Figures
        </h1>
      <div className='flex max-w-4xl mx-auto justify-center gap-x-12'>
        {Characters.map((character, index) => (
          <div
            key={index}
            className='grid pb-8 gap-y-4 w-1/2'>
            <section className='flex flex-grow h-[350px]'>
                <img
                  src={character.images[0]}
                  className='w-[0px] flex-grow duration-300 ease-in hover:cursor-pointer hover:w-[100px] rounded-l-lg'
                  alt={character.alt[0]}
                  loading='lazy'
                />
                <img
                  src={character.images[1]}
                  alt={character.alt[1]}
                  className='w-[0px] flex-grow duration-300 ease-in hover:cursor-pointer hover:w-[100px] rounded-r-lg'
                  loading='lazy'
                />
            </section>
            <div className='flex flex-col'>
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
export default Figure

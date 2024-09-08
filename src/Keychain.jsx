import Vegeta from './assets/Keychains/Vegeta.webp'
import Luffy from './assets/Keychains/Luffy.webp'
import Video from './assets/Keychains/Video.mp4'
import Ussop from './assets/Keychains/Ussop.webp'
import Zoro from './assets/Keychains/Zoro.webp'
import Chopper from './assets/Keychains/Chopper.webp'

const Characters = [
  {
    name: 'Vegeta',
    price: '$100',
    anime: 'Dragon Ball Z',
    image: [Vegeta],
    alt: 'Vegeta',
  },
  {
    name: 'Ussop',
    price: '$100',
    anime: 'One Piece',
    image: [Ussop],
    alt: 'Ussop',
  },
  {
    name: 'Monkey D. Luffy',
    price: '$100',
    anime: 'One Piece',
    image: [Luffy],
    alt: 'Monkey D. Luffy',
  },
  {
    name: 'Roronoa Zoro',
    price: '$100',
    anime: 'One Piece',
    image: [Zoro],
    alt: 'Roronoa Zoro',
  },
  {
    name: 'Tony Chopper "Samurai"',
    price: '$100',
    anime: 'One Piece',
    image: [Chopper],
    alt: 'Tony Chopper "Samurai"',
  },
]

function Keychain() {
  return (
    <section>
      <video
        className='h-full w-full object-cover overflow-hidden mb-40'
        muted
        autoPlay
        playsInline
        loop>
        <source
          src={Video}
          type='video/mp4'
        />
      </video>
      <div className='max-w-4xl mx-auto flex flex-col mb-24'>
        <h1 id='Keychains' className='mb-12 text-3xl text-center items-center justify-center tracking-[1.05px] uppercase font-roboto font-bold'>
          Keychains
        </h1>
        <div className='grid grid-cols-2 w-full gap-x-2'>
          {Characters.map((character, index) => (
            <div key={index}>
              <div className='flex flex-col mb-8'>
                <div className='mb-2'>
                  {character.image.map((image, ImgIndex, alt) => (
                    <img
                      key={ImgIndex}
                      alt={alt}
                      src={image}
                      loading='lazy'
                      className='rounded-xl h-full w-full'
                    />
                  ))}
                </div>
                <h1 className='italic text-3xl font-roboto tracking-[1.05px]'>
                  {character.name}
                </h1>
                <h2 className='text-[18px] mt-1 font-roboto tracking-[1px] uppercase font-bold'>
                  {character.price}
                </h2>
                <h3 className='text-sm tracking-[1.05px] font-roboto mt-2 text-[#000]'>
                  {character.anime}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Keychain

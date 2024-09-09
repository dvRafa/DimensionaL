import Vegeta from './assets/Keychains/Vegeta.webp'
import Luffy from './assets/Keychains/Luffy.webp'
import Video from './assets/Keychains/Video1.mp4'
import Ussop from './assets/Keychains/Ussop.webp'
import Zoro from './assets/Keychains/zoro.webp'
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
        className='h-screen md:h-full object-cover w-full overflow-hidden mb-12'
        muted
        autoPlay
        playsInline
        loop>
        <source
          src={Video}
          type='video/mp4'
        />
      </video>
      <div className='md:max-w-[820px] max-w-sm mx-auto flex flex-col mb-20'>
        <h1
          id='Keychains'
          className='mb-8 md:mb-12 text-xl md:text-3xl text-center items-center justify-center tracking-[1.05px] uppercase font-roboto'>
          Keychains
        </h1>
        <div className='grid md:grid-cols-2 w-full md:gap-x-6'>
          {Characters.map((character, index) => (
            <div key={index}>
              <div className='flex flex-col mb-6'>
                <div className='mb-2'>
                  {character.image.map((image, ImgIndex, alt) => (
                    <img
                      key={ImgIndex}
                      alt={alt}
                      src={image}
                      loading='lazy'
                      className='rounded-lg h-full w-full md:duration-300 md:ease-in md:hover:scale-110 md:hover:cursor-pointer'
                    />
                  ))}
                </div>
                <h1 className='md:italic text-lg md:text-3xl font-roboto tracking-[1.05px]'>
                  {character.name}
                </h1>
                <span className='md:text-[18px] mt-1 font-robotoo tracking-[1px]'>
                  <b>Price:</b> {character.price}
                </span>
                <span className='tracking-[1.05px] font-robotooo text-[#000]'>
                  {character.anime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Keychain

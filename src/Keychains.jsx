import Vegeta from './assets/Keychains/Vegeta.webp'
import Luffy from './assets/Keychains/Luffy.webp'
import Video from './assets/Keychains/Video.mp4'
import Ussop from './assets/Keychains/Ussop.webp'
import Zoro from './assets/Keychains/zoro.webp'
import Chopper from './assets/Keychains/Chopper.webp'

const Characters = [
  {
    name: 'Vegeta - ',
    price: '$100',
    image: [Vegeta],
    alt: 'Vegeta',
    desc: 'Dragon Ball Z',
  },
  {
    name: 'Ussop - ',
    price: '$100',
    image: [Ussop],
    alt: 'Ussop',
    desc: 'One Piece',
  },
  {
    name: 'Monkey D. Luffy -',
    price: '$100',
    image: [Luffy],
    alt: 'Monkey D. Luffy',
    desc: 'One Piece',
  },
  {
    name: 'Roronoa Zoro - ',
    price: '$100',
    image: [Zoro],
    alt: 'Roronoa Zoro',
    desc: 'One Piece',
  },
  {
    name: 'Tony Chopper "Samurai" -',
    price: '$100',
    image: [Chopper],
    alt: 'Tony Chopper "Samurai"',
    desc: 'One Piece',
  },
]

function Keychains() {
  return (
    <section className='bg-[#fafafa]'>
      <video
        className='h-screen md:h-full object-cover w-full overflow-hidden pt-14'
        muted
        autoPlay
        playsInline
        loop
        >
        <source
          src={Video}
          type='video/mp4'
        />
      </video>
      <div className='md:max-w-[780px] max-w-[260px] mx-auto flex flex-col'>
        <h1 className='text-md md:text-xl my-4 text-left items-center justify-center tracking-[1.05px] font-robotoo'>
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
                      className='rounded-lg h-full w-full md:duration-300 md:ease-in md:hover:scale-110'
                    />
                  ))}
                </div>
                <h1 className='text-lg md:text-2xl font-roboto tracking-[1.05px'>
                  <span className='md:italic'>{character.name}</span>
                  {character.desc}
                </h1>
                <span className='md:text-xl mt-2 font-extrabold text-sm'>
                  <span className='font-roboto'>Price:</span> {character.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Keychains

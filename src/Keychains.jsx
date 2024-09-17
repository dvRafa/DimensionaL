import Vegeta from './assets/Keychains/Vegeta.webp'
import Luffy from './assets/Keychains/Luffy.webp'
import Video from './assets/Keychains/Video.mp4'
import Ussop from './assets/Keychains/Ussop.webp'
import Zoro from './assets/Keychains/zoro.webp'
import Chopper from './assets/Keychains/Chopper.webp'

const Characters = [
  {
    name: 'Vegeta ',
    price: '$15',
    image: [Vegeta],
    alt: 'Vegeta',
    desc: 'Dragon Ball Z',
  },
  {
    name: 'Ussop ',
    price: '$15',
    image: [Ussop],
    alt: 'Ussop',
    desc: 'One Piece',
  },
  {
    name: 'Monkey D. Luffy ',
    price: '$15',
    image: [Luffy],
    alt: 'Monkey D. Luffy',
    desc: 'One Piece',
  },
  {
    name: 'Roronoa Zoro ',
    price: '$15',
    image: [Zoro],
    alt: 'Roronoa Zoro',
    desc: 'One Piece',
  },
  {
    name: 'Tony Chopper "Samurai" ',
    price: '$15',
    image: [Chopper],
    alt: 'Tony Chopper "Samurai"',
    desc: 'One Piece',
  },
]

function Keychains() {
  return (
    <section className='bg-[#fafafa] border-b pb-4 md:border-b-0 md:pb-0'>
      <video
        className='h-screen md:h-full object-cover w-full overflow-hidden pt-[100px] md:pt-[130px]'
        muted
        autoPlay
        playsInline
        loop>
        <source
          src={Video}
          type='video/mp4'
        />
      </video>
      <div className='md:max-w-[1300px] max-w-[350px] mx-auto flex flex-col md:pt-[65px] pt-[50px] md:border-b md:pb-4 gothic-a1-regular'>
        <h1 className='text-[15px] leading-[15px] tracking-[0.5px] gothic-a1-light md:text-[25px] md:leading-[25px] md:-tracking-[1px] w-fit mx-auto'>
          popular
        </h1>
        <h2 className='text-[32px] leading-[32px] -tracking-[1px] md:text-[47px] text-center items-center justify-center md:-tracking-[2px] md:leading-[47px]'>
          Keychains
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 w-full md:gap-8 gap-4 md:pt-[65px] pt-[50px]'>
          {Characters.map((character, index) => (
            <div key={index}>
              <div className='flex flex-col'>
                <div>
                  {character.image.map((image, ImgIndex, alt) => (
                    <img
                      key={ImgIndex}
                      alt={alt}
                      src={image}
                      loading='lazy'
                      className='rounded md:h-[301px] h-[180px] w-full duration-300 ease-in hover:scale-105 object-cover'
                    />
                  ))}
                </div>
                <h1 className='text-[19px] -tracking-[0.5px] leading-[19px] md:pt-2'>
                  <span className='italic'>{character.name}</span>
                  {character.desc}
                </h1>
                <h4 className='text-[19px] md:mt-2 -tracking-[0.5px]'>
                  {character.price}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Keychains

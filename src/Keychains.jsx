import Vegeta from './assets/Keychains/Vegeta.webp'
import Luffy from './assets/Keychains/Luffy.webp'
import Video from './assets/Keychains/Video.mp4'
import Ussop from './assets/Keychains/Ussop.webp'

const Characters = [
  {
    name: 'Vegeta',
    price: '$15',
    image: [Vegeta],
    alt: 'Vegeta',
    desc: 'Dragon Ball Z',
    design: '3D Model',
  },
  {
    name: 'Ussop',
    price: '$15',
    image: [Ussop],
    alt: 'Ussop',
    desc: 'One Piece',
    design: '3D View',
  }
]

function Keychains() {
  return (
    <section className='pb-4 md:pb-0'>
      {/* <video
        className='h-screen md:h-full object-cover w-full overflow-hidden pt-[100px] md:pt-[130px]'
        muted
        autoPlay
        playsInline
        loop>
        <source
          src={Video}
          type='video/mp4'
        />
      </video> */}
      <div className='md:max-w-[1000px] max-w-[320px] mx-auto flex flex-col md:pt-[65px] pt-[50px] md:pb-4 gothic-a1-regular'>
        <h1 className='text-[15px] leading-[15px] tracking-[0.5px] gothic-a1-light md:text-[25px] md:leading-[25px] md:-tracking-[1px] w-fit mx-auto'>
          popular.
        </h1>
        <h2 className='text-[32px] leading-[32px] -tracking-[1px] md:text-[47px] text-center items-center justify-center md:-tracking-[2px] md:leading-[47px]'>
          Keychains
        </h2>
        <div className='flex flex-row w-full md:gap-8 gap-4 md:pt-[65px] pt-[50px] items-center justify-center'>
          {Characters.map((character, index) => (
            <div key={index}>
              <div>
                <div>
                  {character.image.map((image, ImgIndex, alt) => (
                    <img
                      key={ImgIndex}
                      alt={alt}
                      src={image}
                      loading='lazy'
                      className='md:rounded w-[148px] h-[200px] duration-300 ease-in hover:scale-105 object-cover md:h-[425px] md:w-[360px] hover:cursor-pointer'
                      // style={{ height: window.innerWidth > 768 ? `${Math.random() * 200 + 360}px` : 'auto', width: '100%'}}
                    />
                  ))}
                </div>
              </div>
              <div className='flex flex-col md:pt-4 pt-2'>
                <div className='flex md:gap-x-8 gap-x-4'>
                  <span className='uppercase md:text-[16px] text-[12px] md:tracking-[1.32px] tracking-[1px] md:leading-[16px] gothic-a1-regular font-semibold'>
                    FROM {character.price}
                  </span>
                  <span className='md:text-[16px] text-[14px] leading-[14px] -tracking-[0.5px] md:leading-[16px]'>{character.design}</span>
                </div>
                <h1 className='md:text-[18px] text-[16px] leading-[22.4px] md:tracking-[0.3px] tracking-[0.32px] md:leading-[26px] pt-1'>
                  <span className='italic pr-2'>{character.name}</span>
                  {character.desc}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Keychains

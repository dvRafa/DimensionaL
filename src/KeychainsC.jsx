import Chopper from './assets/Keychains/Chopper.webp'
import Luffy from './assets/Keychains/Luffy.webp'

const Characters = [
  {
    name: 'Tony Chopper "Samurai"',
    price: '$15',
    image: [Chopper],
    alt: 'Tony Chopper "Samurai"',
    desc: 'One Piece',
    design: '3D View',
  },
  {
    name: 'Monkey D. Luffy',
    price: '$15',
    image: [Luffy],
    alt: 'Monkey D. Luffy',
    desc: 'One Piece',
    design: '3D View',
  },
]

function KeychainsD() {
  return (
    <div className='pb-4'>
      <div className='md:max-w-[1000px] mx-auto max-w-[320px]'>
        <div className='flex flex-row items-center justify-center w-full md:gap-8 gap-4 pt-4'>
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
                  <span className='md:text-[16px] text-[14px] leading-[14px] -tracking-[0.5px] md:leading-[16px]'>
                    {character.design}
                  </span>
                </div>
                <h1 className='md:text-[18px] text-[16px] leading-[22.4px] md:tracking-[0.3px] tracking-[0.32px] md:leading-[26px] pt-2 md:pt-1'>
                  <span className='italic pr-2'>{character.name}</span>
                  {character.desc}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KeychainsD

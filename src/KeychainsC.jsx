import Chopper from './assets/Keychains/Chopper.webp'
import Luffy from './assets/Keychains/Luffy.webp'
import Zoro from './assets/Keychains/zoro.webp'

const Characters = [
  {
    name: 'Tony Chopper',
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
  {
    name: 'Roronoa Zoro',
    price: '$15',
    image: [Zoro],
    alt: 'Roronoa Zoro',
    desc: 'One Piece',
    design: '3D View',
  },
]

function KeychainsD() {
  return (
    <div className='pb-4'>
      <div className='md:max-w-[1300px] mx-auto max-w-[320px]'>
        <div className='flex md:flex-row flex-col items-center justify-center w-full md:gap-8 gap-4 pt-4'>
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
                      className='w-full h-[200px] duration-300 ease-in hover:scale-105 object-cover md:h-[225px] md:w-[360px] hover:cursor-pointer'
                      // style={{ height: window.innerWidth > 768 ? `${Math.random() * 200 + 360}px` : 'auto', width: '100%'}}
                    />
                  ))}
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex justify-between uppercase'>
                  <p className='pt-2 uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal'>from {character.price}</p>
                  <p className='pt-2 uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal'>{character.desc}</p>
                  <p className='pt-2 uppercase text-[14px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal'>{character.design}</p>
                </div>
                <p className='pt-2 capitalize text-[20px] tracking-[0.4px] leading-[18px] gothic-a1-regular font-normal'>{character.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KeychainsD

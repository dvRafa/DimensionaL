import Zoro from './assets/Keychains/zoro.webp'

const Characters = [
  {
    name: 'Roronoa Zoro',
    price: '$15',
    image: [Zoro],
    alt: 'Roronoa Zoro',
    desc: 'One Piece',
    design: '3D View',
  },
]

function KeychainsB() {
  return (
    <div className='py-4'>
      <div className='max-w-[320px] md:max-w-[800px] mx-auto'>
        {Characters.map((character, index) => (
          <div
            key={index}
            className='border rounded-md p-4 bg-white'>
            <img
              src={character.image[0]}
              alt={character.alt}
              className='w-full h-auto rounded-md mb-2'
            />
            <div className='flex justify-between md:pt-4 pt-2 uppercase'>
              <p className=''>{character.name}</p>
              <p className=''>from {character.price}</p>
              <p className=''>{character.design}</p>
              <p className=''>{character.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KeychainsB

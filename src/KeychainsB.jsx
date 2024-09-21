import Zoro from './assets/Keychains/zoro.webp';

const Characters = [
  {
    name: 'Roronoa Zoro',
    price: '$15',
    image: [Zoro],
    alt: 'Roronoa Zoro',
    desc: 'One Piece',
    design: '3D View',
  },
];

function KeychainsB() {
  return (
    <div className='py-4'>
      <div className='max-w-[320px] md:max-w-[800px] mx-auto'>
        {Characters.map((character, index) => (
          <div key={index} className='border rounded-md p-4 bg-white'>
            <img
              src={character.image[0]}
              alt={character.alt}
              className='w-full h-auto rounded-md mb-2'
            />
            <div className='flex md:gap-x-8 gap-x-4 md:pt-4 pt-2'>
              <p className='uppercase md:text-[16px] text-[12px] md:tracking-[1.32px] tracking-[1px] md:leading-[16px] gothic-a1-regular font-semibold'>
                FROM {character.price}
              </p>
              <p className='md:text-[16px] text-[14px] leading-[14px] -tracking-[0.5px] md:leading-[16px]'>
                {character.design}
              </p>
            </div>
            <h1 className='md:text-[18px] text-[16px] leading-[22.4px] md:tracking-[0.3px] tracking-[0.32px] md:leading-[26px] pt-2 md:pt-1'>
              <span className='italic pr-2'>{character.name}</span>
              {character.desc}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeychainsB;

import AOTF from './assets/Manga/AOTF.webp'
import AOTB from './assets/Manga/AOTB.webp'
import AOTS from './assets/Manga/AOTS.webp'
import AOTI from './assets/Manga/AOTI.webp'
import OPF from './assets/Manga/OPF.webp'
import OPB from './assets/Manga/OPB.webp'
import OPS from './assets/Manga/OPS.webp'
import OPI from './assets/Manga/OPI.webp'
import DSF from './assets/Manga/DSF.webp'
import DSB from './assets/Manga/DSB.webp'
import DSS from './assets/Manga/DSS.webp'
import DSI from './assets/Manga/DSI.jpeg'
import NF from './assets/Manga/NF.webp'
import NB from './assets/Manga/NB.webp'
import NS from './assets/Manga/NS.webp'
import NI from './assets/Manga/NI.webp'

const Characters = [
  {
    images: [AOTS, AOTI, AOTF, AOTB],
    name: 'Shingeki No Kyojin - Attack On Titan, Volume 16',
    data: 'Captured by Rod Reiss, the rightful king, Krista and Eren finally have their memories back. What exactly happened to Eren, and what was the crime his father committed? Meanwhile, the Survey Corps desperately hunts for Eren, while at the same time seeking to legitimize their military coup. As the situation inside the walls...',
    page: '194',
    release: 'August 25, 2015',
    price: '$100',
    alt: 'Shingeki No Kyojin'
  },
  {
    images: [OPS, OPI, OPF, OPB],
    name: 'One Piece: Doflamingo Appears, Volume 70 - Chapters 691-700',
    data: 'With the escape of the institute in front of it, Caesar makes a strange transformation. Will Luffy shatter his ambitions!? The sectakehai and Doframingo, which are threaded behind the scenes, also move, and things will fall sharply...!! “A marine adventure romance around one secret treasure”!!',
    page: '216',
    release: 'June 4, 2013',
    price: '$100',
    alt: 'One Piece'
  },
  {
    images: [NS, NI, NF, NB],
    name: 'Naruto Shippuden: Dream World, Volume 63 - Chapters 598-607',
    data: 'With the help of Kakashi and Guy, Naruto seems to have found a way around Tobis invincible abilities. But why do Tobis techniques seem to mimic Kakashis so closely? And when Tobis mask is finally torn off, will the revelation shock the ninja world?!',
    page: '192',
    release: 'December 28, 2012',
    price: '$100',
    alt: 'Naruto Shippuden'
  },
  {
    images: [DSS, DSI, DSF, DSB],
    name: 'Kimetsu No Yaiba - Demon Slayer: Gaiden Volume',
    data: 'Kimetsu no Yaiba: Gaiden is a volume consisting of Giyu Tomiokas Story and Kyojuro Rengokus Story, as well as Kimetsu Between the Scenes.',
    page: '215',
    release: 'December 4, 2020',
    price: '$100',
    alt: 'Kimetsu No Yaiba'
  },
]

function Manga() {
  return (
    <div>
      <div className='md:max-w-6xl max-w-sm mx-auto pb-28 pt-6'>
        <h1 id='Manga' className='mb-8 text-xl md:text-3xl pt-6 text-center items-center justify-center tracking-[1.05px] uppercase font-roboto'>
          Manga
        </h1>
        {Characters.map((character, index) => (
          <div
            key={index}
            className='md:flex md:flex-row md:gap-x-[2px]'>
            <div className='md:flex md:flex-col pb-8 invisible md:visible'>
              <img
                loading='lazy'
                src={character.images[0]}
                alt={character.alt}
                className='h-[500px] w-[85px] shadow-md rounded-bl-md rounded-tl-md'
              />
            </div>
            <div className='md:flex flex-col invisible md:visible'>
              <img
                src={character.images[1]}
                alt={character.alt}
                loading='lazy'
                className='h-[500px] w-[450px] shadow-md invisible md:visible'
              />
            </div>
            <div className='md:flex md:flex-col'>
              <img
                src={character.images[2]}
                loading='lazy'
                alt={character.alt}
                className='md:h-[250px] h-full w-full md:w-56 md:pb-[1px] shadow-md md:rounded-tr-md rounded-lg'
              />
              <img
                src={character.images[3]}
                loading='lazy'
                className='h-[250px] w-56 shadow-md rounded-br-md invisible md:visible'
                alt={character.alt}
              />
            </div>
            <div className='flex flex-col md:pt-0 pt-2 md:pl-8 md:w-1/2 text-center md:text-left'>
              <h1 className='text-lg md:text-3xl font-roboto tracking-[1.05px]'>
                {character.name}
              </h1>
              <span className='md:text-[18px] mt-1 font-robotoo tracking-[1px]'>
                <span>Price:</span> {character.price}
              </span>
              <div className='flex flex-col'>
                <span className='text-[#000] tracking-[1.05px] font-robotooo'>
                  <span>Pages:</span> {character.page}
                </span>
                <span className='text-[#000] tracking-[1.05px] font-robotooo'>
                  <span>Release Date in Japan:</span> {character.release}
                </span>
              </div>
              <span className='tracking-[0.2px] mt-4 md:mt-2 text-[#161f6e] font-robotooo line-clamp-3 md:line-clamp-none mb-6 md:mb-0 text-balance'>
                {character.data}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Manga

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className='border-t h-[2px] borders-background w-full'></div>
      <div className='flex md:max-w-[1200px] max-w-[320px] mx-auto py-[35px] justify-between'>
        <div className='flex flex-col justify-center'>
          <p className='text-[32px] leading-[38.4px] md:mb-0 mb-[16px] md:text-[56px] md:leading-[67.77px] font-light'>
            A Small Dream!
          </p>
          <p className='text-[12px] tracking-[1.32px] leading-[12px] md:text-[14px] md:leading-[32px] md:tracking-normal font-light'>
            Current Location: Panama - PTY
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[25px] md:gap-y-[50px]'>
          <div className='flex flex-col'>
            <ul>
              <li className='text-[12px] tracking-normal leading-[20px] md:text-[14px] md:leading-[22px] hover:text-blue-800 duration-200 ease-in-out font-light'>
                <a
                  href='https://instagram.com/thenotoriousrafa'
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label='Instagram Account'>
                  instagram
                </a>
              </li>
              <li className='text-[12px] leading-[20px] md:text-[14px] md:leading-[22px] hover:text-blue-800 duration-200 ease-in-out tracking-normal font-light'>
                <a
                  href='mailto:rafaeldejesus694@outlook.com'
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label='Email Account'>
                  email
                </a>
              </li>
              <li className='text-[12px] tracking-normal leading-[20px] md:text-[14px] md:leading-[22px] hover:text-blue-800 duration-200 ease-in-out font-light'>
                <a
                  href='https://wa.me/50764245895'
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label='Whatsapp Number'>
                  whatsapp
                </a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <ul>
              <li className='text-[12px] leading-[20px] font-light md:text-[14px] md:leading-[22px] hover:text-blue-800 duration-200 ease-in-out tracking-normal'>
                <Link to='/Anime-Goods/Data/About'>About</Link>
              </li>
              <li className='text-[12px] leading-[20px] font-light md:text-[14px] md:leading-[22px] hover:text-blue-800 duration-200 ease-in-out tracking-normal'>
                <Link to='/Anime-Goods/Data/Terms-Conditions'>
                  Terms + Conditions
                </Link>
              </li>
              <li className='text-[12px] leading-[20px] md:text-[14px] md:leading-[22px] hover:text-blue-800 duration-200 ease-in-out tracking-normal font-light'>
                <Link to='/Anime-Goods/Data/Contact'>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

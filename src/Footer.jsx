import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='pt-[65px]'>
      <div className='border-t h-[2px] borders-background md:max-w-[1300px] max-w-[350px] mx-auto'></div>
      <div className='flex md:flex-row flex-col gap-x-[30px] w-full md:max-w-[1300px] max-w-[350px] mx-auto md:pt-[45px] pt-[25px] md:pb-[75px] pb-[45px] justify-between'>
        <div>
          <p className='text-[32px] gothic-a1-light leading-[38.4px] md:mb-0 mb-[16px] capitalize tracking-normal md:text-[26px] md:leading-[32.4px]'>
            Everything start with a Small Dream.⭐
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[25px] md:gap-y-[50px]'>
          <div className='flex flex-col'>
            <ul>
              <li className='social-medias'>
                <a
                  href='https://instagram.com/thenotoriousrafa'
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label='Instagram Account'>
                  instagram
                </a>
              </li>
              <li className='social-medias md:pt-1 pt-2'>
                <a
                  href='mailto:rafaeldejesus694@outlook.com'
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label='Email Account'>
                  email
                </a>
              </li>
              <li className='md:pt-1 pt-2 social-medias'>
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
              <li className='text-[12px] tracking-[1.32px] leading-[12px] gothic-a1-light md:text-[16px] md:leading-[16px] hover:text-blue-800 duration-200 ease-in-out md:-tracking-[1px] md:pt-1 pt-2'>
                <Link to='/Anime-Goods/Data/About'>About</Link>
              </li>
              <li className='text-[12px] tracking-[1.32px] leading-[12px] gothic-a1-light md:text-[16px] md:leading-[16px] hover:text-blue-800 duration-200 ease-in-out md:-tracking-[1px] md:pt-1 pt-2'>
                <Link to='/Anime-Goods/Data/Terms-Conditions'>
                  Terms + Conditions
                </Link>
              </li>
              <li className='text-[12px] tracking-[1.32px] leading-[12px] gothic-a1-light md:text-[16px] md:leading-[16px] hover:text-blue-800 duration-200 ease-in-out md:-tracking-[1px] md:pt-1 pt-2'>
                <Link to='/Anime-Goods/Data/Contact'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className='text-[12px] leading-[14.5px] tracking-[1px] gothic-a1-light md:text-[16px] md:leading-[16px] md:-tracking-[1px]'>
              Current Location: Panama - PTY
            </p>
          </div>
          <div>
            <p className='text-[12px] leading-[14.5px] tracking-[1px] font-bold md:-tracking-[1px] md:text-[16px] md:leading-[16px]'>
              Rafa <span className='gothic-a1-light'>Noa</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

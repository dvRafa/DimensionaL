import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header className='flex flex-col max-w-[320px] py-4 md:max-w-[1200px] mx-auto'>
        <div className='flex items-center justify-between md:gap-x-4 gap-x-2'>
          <Link
            to='/Anime-Goods/'
            className='logo'>
            日本
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='25'>
              <rect
                fill='#f1f1f1'
                width='40'
                height='25'
              />
              <circle
                fill='#bc002d'
                cx='20'
                cy='12.5'
                r='7'
              />
            </svg>
          </Link>
          <a
            href='https://instagram.com/thenotoriousrafa'
            rel='noopener noreferrer'
            aria-label='Instagram Account'
            target='_blank'
            className='text-[12px] tracking-[1.32px] leading-[12px] md:text-[14px] md:leading-[22px] hover:text-blue-800 duration-200 ease-in-out md:tracking-normal font-light'>
            instagram
          </a>
        </div>
      </header>
      <div className='border-t h-[2px] borders-background w-full'></div>
    </div>
  )
}

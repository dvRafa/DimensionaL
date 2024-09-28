import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='flex flex-col max-w-[360px] py-4 md:max-w-[1300px] mx-auto'>
      <div className='flex items-center justify-between md:gap-x-4 gap-x-2'>
        <Link
          to='/Anime-Goods/'
          className='logo'>
          こんにちは
        </Link>
        <div className='flex md:flex-row flex-col gap-y-2 items-center'>
          <h1 className='uppercase md:text-[14px] text-[10px] leading-[10px] md:leading-[14px] tracking-[1.5px] md:tracking-[3px] text-center'>
            authentic products from japan
          </h1>
          <svg
          
            xmlns='http://www.w3.org/2000/svg'
            width='60'
            height='40'>
            <rect
              fill='#fff'
              height='40'
              width='60'
            />
            <circle
              fill='#bc002d'
              cx='30'
              cy='20'
              r='10'
            />
          </svg>
        </div>
        <a
          href='https://instagram.com/thenotoriousrafa'
          rel='noopener noreferrer'
          aria-label='Instagram Account'
          target='_blank'
          className='social-medias'>
          instagram
        </a>
      </div>
      <div className='border-t h-[2px] borders-background md:w-[1300px]'></div>
    </header>
  )
}

import Bowing from '/Bowing.webp'

function Header() {
  return (
    <header className='flex flex-col justify-center items-center bg-[#fafafa]'>
      <div className='flex w-screen flex-row justify-between hover:cursor-pointer py-2 md:fixed top-0 md:z-50 px-10'>
        <div className='md:absolute md:inset-0 md:backdrop-blur-lg'></div>
        <div className='md:relative flex w-screen flex-row items-center'>
          <h1 className='md:text-sm text-[10px] font-bold text-[#111] z-10'>
            こんにちは
          </h1>
          <img
            src={Bowing}
            className='w-16 h-12 md:-z-60 drop-shadow-lg'
            alt='Bowing man'
          />
        </div>
        <div></div>
      </div>
      <div className='bg-[#ffffff] w-[350px] md:w-[780px] md:h-[230px] text-lg md:px-2 md:mb-10 md:mt-20 my-8 px-4 md:rounded-md md:shadow-lg hover:scale-105 duration-300 ease-in border'>
        <h1 className='md:text-xl text-lg font-robotoo tracking-[1.05px] pt-2'>
          Authentic Products from{' '}
          <a
            href='https://www.japan.go.jp/'
            rel='noopener noreferrer'
            target='_blank'
            className='underline cursor-pointer hover:text-[#0068b8]'>
            JAPAN
          </a>
        </h1>
        <h1 className='text-[#374151] text-balance pt-4 font-robotooo md:text-base text-xs'>
          All the mangas were originally printed in Japan with Japanese as the
          primary language. Each manga includes a readstopper, as shown in the
          pictures, ensuring they retain their original quality and
          authenticity.
        </h1>
        <p className='text-[#374151] text-balance pt-4 font-robotooo md:text-base text-xs'>
          Please be aware that the{' '}
          <a
            href='#Levi-Ackerman'
            className='text-[#0068b8] hover:underline hover:cursor-pointer'>
            Levi Ackerman
          </a>{' '}
          and{' '}
          <a
            href='#Monkey-D-Luffy'
            className='text-[#0068b8] hover:underline hover:cursor-pointer'>
            Monkey D. Luffy
          </a>{' '}
          figures come without a box. Each figure is shipped with only the
          figure itself and a base for display.
        </p>
        <div className='flex flex-row items-center pt-4'>
          <a
            href='https://instagram.com/thenotoriousrafa'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram Profile'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='object-contain fill-[#374151] transition ease-in-out duration-200 hover:fill-[#fb2020] md:w-[40px] md:h-[40px] w-[20px] h-[20px]'
              x='0px'
              y='0px'
              alt='Instagram Icon'
              viewBox='0 0 64 64'>
              <path d='M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z'></path>
            </svg>
          </a>
          <span className='ml-2 transition ease-in-out duration-200 hover:text-[#fb2020] font-roboto cursor-pointer tracking-tighter md:text-md text-base text-[#374151]'>
            6424-5895
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header

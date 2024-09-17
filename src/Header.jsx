function Header() {
  return (
    <div className='bg-[#fafafa]'>
      <header className='flex flex-col justify-center items-center'>
        <div className='border-b w-full'>
          <div className='flex w-full flex-row py-4 max-w-[1300px] mx-auto'>
            <div className='flex w-screen flex-col items-center'>
              <h3 className='text-[16px] leading-[16px] w-fit mx-auto md:text-[30px] md:leading-[30px] tracking-[2px] yuji-syuku-regular drop-shadow-xl'>
                こんにちは
              </h3>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center gap-x-2 md:pt-[50px] pt-[35px]'>
          <h1 className='uppercase md:text-[16px] text-[10px] leading-[10px] md:leading-[16px] tracking-[1.5px] md:tracking-[3px]'>
            authentic products from japan{' '}
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
        {/* <div className='bg-[#ffffff] w-[350px] md:w-[1000px] md:h-[245px] md:p-6 md:my-10 my-5 p-3 rounded-sm shadow'>
        <h2 className='md:text-4xl text-lg font-bold tracking-tight uppercase'>
        Authentic Products from{' '}
        <a
        href='https://www.japan.go.jp/'
        rel='noopener noreferrer'
        target='_blank'
        className='hover:text-[#0068b8] md:cursor-pointer md:transition md:duration-200 md:ease-in'>
        JAPAN
        </a>
        </h2>
        <p className='text-balance pt-2 md:text-base text-xs'>
        All the mangas were originally printed in Japan with Japanese as the
        primary language. Each manga includes a readstopper, as shown in the
        pictures, ensuring they retain their original quality and
        authenticity.
        </p>
        <p className='text-balance py-2 md:text-base text-xs'>
        Please be aware that the{' '}
        <a
        href='#Levi-Ackerman'
        className='text-[#0068b8] transition duration-200 ease-in hover:underline hover:cursor-pointer'>
        Levi Ackerman
        </a>{' '}
        and{' '}
          <a
          href='#Monkey-D-Luffy'
          className='text-[#0068b8] transition duration-200 ease-in hover:underline hover:cursor-pointer'>
          Monkey D. Luffy
          </a>{' '}
          figures come without a box. Each figure is shipped with only the
          figure itself and a base for display.
          </p>
          <div className='flex flex-row gap-x-2 items-center'>
          <img
          src={IGLogo}
          className='md:w-7 md:h-7 w-5 h-5'
          />
          <img
          src={WALogo}
          className='md:w-8 md:h-8 w-5 h-5'
          />
          <span className='transition ease-in duration-200 hover:text-[#0068b8] cursor-copy items-center md:text-md text-base'>
          6424-5895
          </span>
          </div>
          </div> */}
      </header>
    </div>
  )
}

export default Header

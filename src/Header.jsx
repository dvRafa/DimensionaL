import Bowing from '/Bowing.webp'

function Header() {
  return (
    <header className='flex flex-col justify-center items-center mt-2'>
      <div className='flex items-center justify-center'>
        <h1 className='font-bold text-xl'>こんにちは</h1>
        <img
          src={Bowing}
          className='w-16 h-14 items-center hover: cursor-pointer'
          alt='Bowing man'
          loading='lazy'
        />
      </div>
      <div className='bg-[#222] mt-4 text-lg py-[70px] px-4 md:px-56'>
        <h1 className='text-[#f6f7f8] uppercase text-3xl font-roboto font-bold'>
          Authentic products from
          <span className='text-[#eaa224]'> Japan</span>
        </h1>
        <h1 className='text-[#f6f7f8] text-pretty pt-4 font-roboto font-medium'>
          All the mangas were originally printed in
          <span className='text-[#eaa224]'> Japan</span> with Japanese as the
          primary language. Each manga includes a readstopper, as shown in the
          pictures, ensuring they retain their original quality and
          authenticity.
        </h1>
        <div className='flex flex-row pt-8 items-center'>
          <a
            href='https://instagram.com/thenotoriousrafa'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram Profile'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='object-contain fill-[#FFFFFF] transition ease-in-out duration-200 hover:fill-[#a70404]'
              x='0px'
              y='0px'
              width={40}
              height={40}
              alt='Instagram Icon'
              viewBox='0 0 64 64'>
              <path d='M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z'></path>
            </svg>
          </a>
          <span className='ml-2 text-[#f6f7f8] font-medium transition ease-in-out duration-200 hover:text-[#a70404] font-roboto cursor-pointer tracking-tighter text-md'>
            +1 910-318-9001
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header

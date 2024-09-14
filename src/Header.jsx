import Bowing from '/Bowing.webp'
import IGLogo from '/IGLogo.svg'
import WALogo from '/WALogo.svg'

function Header() {
  return (
    <header className='flex flex-col justify-center items-center bg-[#fafafa]'>
      <div className='flex w-full flex-row py-2 px-10'>
        <div className='flex w-screen flex-row items-center'>
          <h1 className='md:text-sm text-[10px] font-bold'>こんにちは</h1>
          <img
            src={Bowing}
            className='md:w-16 md:h-12 w-8 h-8 drop-shadow-lg'
            alt='Bowing man'
          />
        </div>
      </div>
      <div className='bg-[#ffffff] w-[350px] md:w-[1000px] md:h-[245px] md:p-6 md:my-10 my-5 p-3 md:rounded-lg md:shadow-lg shadow-sm border'>
        <h1 className='md:text-xl text-lg font-robotoo tracking-[1.05px]'>
          Authentic Products from{' '}
          <a
            href='https://www.japan.go.jp/'
            rel='noopener noreferrer'
            target='_blank'
            className='underline hover:text-[#0068b8] md:cursor-pointer md:transition md:duration-200 md:ease-in'>
            JAPAN
          </a>
        </h1>
        <h1 className='text-balance pt-2 font-robotooo md:text-base text-xs'>
          All the mangas were originally printed in Japan with Japanese as the
          primary language. Each manga includes a readstopper, as shown in the
          pictures, ensuring they retain their original quality and
          authenticity.
        </h1>
        <p className='text-balance py-2 font-robotooo md:text-base text-xs'>
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
          <span className='text-xs'>or</span>
          <img
            src={WALogo}
            className='md:w-8 md:h-8 w-5 h-5'
          />
          <span className='transition ease-in duration-200 hover:text-[#0068b8] font-roboto cursor-pointer tracking-tighter items-center md:text-md text-base'>
            6424-5895
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header

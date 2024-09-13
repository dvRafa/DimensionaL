import Bowing from '/Bowing.webp'

function Footer() {
  return (
    <footer className='flex flex-col bg-[#fafafa] text-[#121212]'>
      <div className='border-[1px] w-screen md:w-[1000px] mx-auto border-neutral-500 opacity-30 shadow-lg' />
      <div className='flex flex-col pt-6 items-center justify-center'>
        <h1 className='text-sm md:text-base font-roboto'>
          Rafa & Noa
          <span>💌</span>
        </h1>
      </div>
      <div className='flex justify-center hover:cursor-pointer items-center mb-1'>
        <h1 className='text-[10px] md:text-sm font-bold text-[#111]'>
          ありがとう ございます
        </h1>
        <img
          src={Bowing}
          className='h-12 w-16 items-center'
          alt='Bowing man'
          loading='lazy'
        />
      </div>
    </footer>
  )
}

export default Footer

import Bowing from '/Bowing.webp'

function Footer() {
  return (
    <footer className='flex flex-col bg-[#fafafa] text-[#121212] pt-16'>
      <div className='border w-[260px] md:w-full mx-auto'/>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-sm md:text-base font-robotooo pt-4'>
          Rafa & Noa <span>💌</span>
        </h1>
      </div>
      <div className='flex justify-center hover:cursor-pointer items-center mb-1'>
        <h1 className='text-[10px] md:text-sm font-bold'>
          ありがとう ございます
        </h1>
        <img
          src={Bowing}
          className='h-12 w-16 items-center drop-shadow-lg'
          alt='Bowing man'
          loading='lazy'
        />
      </div>
    </footer>
  )
}

export default Footer

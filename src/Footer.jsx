import Bowing from '/Bowing.webp'

function Footer() {
  return (
    <footer className='flex flex-col bg-[#fafafa] md:pt-[65px] pt-[50px] w-full gap-y-2'>
      <div className='flex items-center justify-center border-t md:pt-[65px] pt-[50px]'>
        <h3 className='text-sm font-bold -tracking-[1px]'>
          Rafa <span className='font-normal'>Noa</span>
        </h3>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='md:text-lg text-[16px] leading-[16px] -tracking-[2px]'>ありがとう ございます</h3>
        <img
          src={Bowing}
          className='md:w-16 md:h-12 w-10 h-10 items-center drop-shadow object-cover'
          alt='Bowing man'
          loading='lazy'
        />
      </div>
    </footer>
  )
}

export default Footer

import Bowing from '/Bowing.webp'

function Footer() {
  return (
    <footer className='flex flex-col bg-[#fcfeff] text-[#121212]'>
      <div className='border w-96 mx-auto border-neutral-500 opacity-30' />
      <div className='flex flex-col pt-6 items-center justify-center'>
        <h1 className='text-sm md:text-base font-robotoo' >Rafa</h1>
        <h1 className='text-sm md:text-base font-robotoo' >Noa</h1>
        <span>💌</span>
      </div>
      <div className='flex justify-center hover:cursor-pointer items-center mb-1'>
        <h1 className='text-sm md:text-lg font-kanji'>
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

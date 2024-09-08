import Bowing from '/Bowing.webp'

function Footer() {
  return (
    <footer className='flex flex-col bg-[#222]'>
      <div className='flex flex-col text-[#f6f7f8] py-12'>
        <span className='text-center items-center justify-center font-roboto tracking-[1.05px]'>
          Peace & Love
        </span>
        <span className='items-center justify-center text-center'>💓</span>
        <span className='text-center items-center justify-center font-roboto tracking-[1.05px]'>
          Rafael Alvarez
        </span>
        <span className='text-center items-center justify-center font-roboto tracking-[1.05px]'>
          Noa Kobayashi
        </span>
      </div>
      <div className='border opacity-10 mb-3'/>
      <div className='flex justify-center items-center mb-1'>
        <h1 className='text-lg font-bold text-[#f6f7f8]'>ありがとう ございます</h1>
        <img
          src={Bowing}
          className='h-14 w-16 items-center cursor-pointer'
          alt='Bowing man'
          loading='lazy'
        />
      </div>
    </footer>
  )
}

export default Footer

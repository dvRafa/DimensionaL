
function Footer() {
  return (
    <footer className='flex flex-col bg-[#fafafa] md:pt-[65px] pt-[50px] w-full gap-y-2'>
      <div className='flex md:flex-row flex-col border-t justify-end w-full px-[25px] gap-x-[150px] md:pt-[45px] pt-[25px] md:pb-[45px] pb-[25px] gap-y-10'>
        <div className='flex flex-row gap-x-12 justify-center'>
          <ul>
            <li className='text-[10px] leading-[10px] tracking-[0.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:-tracking-[1px] hover:text-blue-800 duration-200 ease-in-out'>
              <a href='/Anime-Goods/About'>About - soon</a>
            </li>
            <li className='text-[10px] leading-[10px] gothic-a1-light md:text-[16px] md:leading-[16px] hover:text-blue-800 duration-200 ease-in-out tracking-[0.5px] gothic-a1-light md:-tracking-[1px] md:pt-1 pt-2'>
              <a href='/Anime-Goods/Contact-Us'>
              Contact Us - soon
              </a>
            </li>
            <li className='text-[10px] leading-[10px] gothic-a1-light md:text-[16px] md:leading-[16px] hover:text-blue-800 duration-200 ease-in-out tracking-[0.5px] gothic-a1-light md:-tracking-[1px] md:pt-1 pt-2'>
              <a href='/Anime-Goods/Terms-Conditions'>Terms + Conditions - soon</a>
            </li>
          </ul>
          <ul>
            <li className='lowercase text-[10px] leading-[10px] tracking-[1.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:tracking-[3px] hover:text-blue-800 duration-200 ease-in-out'>
              <a
                href='https://instagram.com/thenotoriousrafa'
                rel='noopener noreferrer'
                target='_blank'>
                instagram
              </a>
            </li>
            <li className='lowercase text-[10px] leading-[10px] tracking-[1.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:tracking-[3px] hover:text-blue-800 duration-200 ease-in-out md:pt-1 pt-2'>
              <a href='mailto:rafaeldejesus694@outlook.com'>
                email
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className='gothic-a1-light text-[14px] leading-[14px] tracking-[0.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:-tracking-[1px] text-center md:text-left'>
            Everything start with a Small Dream🌟.
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center px-[25px] md:pt-[25px] pb-[25px] pt-[2px]'>
        {/* <span className='md:text-[30px] md:leading-[30px] text-[16px] leading-[16px] tracking-[2px] yuji-syuku-regular drop-shadow-xl'>
          ありがとう ございます
        </span> */}
        <span className='text-[14px] leading-[14px] tracking-[0.5px] font-bold md:-tracking-[1px] md:text-[16px] md:leading-[16px]'>
          Rafa <span className='font-normal'>Noa</span>
        </span>
        <span className='text-[14px] leading-[14px] tracking-[0.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:-tracking-[1px]'>
          Current Location: Panama-PTY
        </span>
      </div>
    </footer>
  )
}

export default Footer

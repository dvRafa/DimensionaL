function SubHeader() {
  return (
    <footer className='md:pt-[65px] pt-[50px]'>
      <div className='flex flex-row gap-x-[30px] w-full md:max-w-[1300px] max-w-[350px] mx-auto md:pt-[45px] pt-[25px] md:pb-[75px] pb-[45px] justify-between'>
        <div>
          <p className='md:text-[32px] text-[32px] gothic-a1-light tracking-normal md:leading-[48px] leading-[38.4px] md:mb-0 mb-[16px] capitalize'>
            Everything start with a Small Dream.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[25px] md:gap-y-[50px]'>
          <div>
            <p className='uppercase text-[12px] leading-[12px] tracking-[0.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:-tracking-[1px] pb-2 opacity-70'>
              follow us
            </p>
            <ul>
              <li className='lowercase text-[12px] leading-[12px] tracking-[1.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:tracking-[3px] hover:text-blue-800 duration-200 ease-in-out'>
                <a
                  href='https://instagram.com/thenotoriousrafa'
                  rel='noopener noreferrer'
                  target='_blank'>
                  instagram
                </a>
              </li>
              <li className='lowercase text-[12px] leading-[12px] tracking-[1.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:tracking-[3px] hover:text-blue-800 duration-200 ease-in-out md:pt-1 pt-2'>
                <a href='mailto:rafaeldejesus694@outlook.com'>email</a>
              </li>
            </ul>
          </div>
          <div>
            <p className='uppercase text-[12px] leading-[12px] tracking-[0.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:-tracking-[1px] pb-2 opacity-70'>
              us
            </p>
            <ul>
              <li className='text-[12px] leading-[12px] tracking-[0.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:-tracking-[1px] hover:text-blue-800 duration-200 ease-in-out'>
                <a href='/Anime-Goods/About'>About - soon</a>
              </li>
              <li className='text-[12px] leading-[12px] gothic-a1-light md:text-[16px] md:leading-[16px] hover:text-blue-800 duration-200 ease-in-out tracking-[0.5px] gothic-a1-light md:-tracking-[1px] md:pt-1 pt-2'>
                <a href='/Anime-Goods/Terms-Conditions'>
                  Terms + Conditions - soon
                </a>
              </li>
              <li className='text-[12px] leading-[12px] gothic-a1-light md:text-[16px] md:leading-[16px] hover:text-blue-800 duration-200 ease-in-out tracking-[0.5px] gothic-a1-light md:-tracking-[1px] md:pt-1 pt-2'>
                <a href='/Anime-Goods/Contact-Us'>Contact Us - soon</a>
              </li>
            </ul>
          </div>
          <div>
            <p className='text-[12px] leading-[12px] tracking-[0.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:-tracking-[1px]'>
              Current Location: Panama - PTY
            </p>
          </div>
          <div>
            <p className='text-[12px] leading-[12px] tracking-[0.5px] font-bold md:-tracking-[1px] md:text-[16px] md:leading-[16px]'>
              Rafa <span className='font-normal'>Noa</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SubHeader

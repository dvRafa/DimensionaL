import { Link } from 'react-router-dom'
import scketchupgreen from '/sketchupgreen.svg'

export default function Header() {
  return (
    <div className='bg-darkbg'>
      <div>
        <h1 className='px-4 sm:px-0 bg-cardbg text-lightgray text-[11.5px] md:text-[12.5px] text-center justify-center opensans leading-[16px] md:leading-[20px] tracking-[0.1px] py-[10px] md:py-[14px]'>
          All products are sourced directly from Japan & All inquiries can be
          send to Instagram
          <span className='ml-1 text-white'>{'> '}</span>
          <a
            href='https://www.instagram.com/Thenotoriousrafa'
            target='_blank'
            rel='nonrefereer noopener'
            className='ml-[2px] text-blanco hover:text-green hover:underline'>
            @thenotoriousrafa
          </a>
        </h1>
      </div>
      <header className='flex flex-col max-w-none md:max-w-[1200px] mx-auto px-4 md:px-6 py-2'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-row items-end justify-center py-2'>
            <img
              src={scketchupgreen}
              width={30}
              height={30}
              alt='dimm Logo'
            />
            <Link to='/dimm/'>
              <h1 className='exo-2 text-[11.5px] text-blanco sm:text-[13.5px] tracking-[1.5px]'>
                DIMM
              </h1>
            </Link>
          </div>
          <div className='flex gap-x-3 h-12'>
            <div className='flex items-center'>
              <a
                href='https://www.instagram.com/Thenotoriousrafa'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blanco bg-blanco border rounded-full border-blanco hover:border-blanco hover:ring-4 hover:ring-blanco hover:bg-black p-2'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Instagram</title>
                  <path
                    d='M15.9948 11.1087C13.3017 11.1087 11.1039 13.3065 11.1039 15.9997C11.1039 18.6928 13.3017 20.8906 15.9948 20.8906C18.6879 20.8906 20.8856 18.6928 20.8856 15.9997C20.8856 13.3065 18.6879 11.1087 15.9948 11.1087ZM30.6637 15.9997C30.6637 13.9743 30.6821 11.9673 30.5683 9.94558C30.4546 7.59733 29.9189 5.51326 28.2018 3.7961C26.481 2.07527 24.4006 1.54324 22.0524 1.4295C20.0271 1.31575 18.0201 1.3341 15.9984 1.3341C13.9731 1.3341 11.9661 1.31575 9.94445 1.4295C7.59624 1.54324 5.5122 2.07894 3.79507 3.7961C2.07428 5.51693 1.54226 7.59733 1.42852 9.94558C1.31478 11.971 1.33312 13.978 1.33312 15.9997C1.33312 18.0214 1.31478 20.0321 1.42852 22.0538C1.54226 24.402 2.07795 26.4861 3.79507 28.2033C5.51587 29.9241 7.59624 30.4561 9.94445 30.5699C11.9698 30.6836 13.9768 30.6653 15.9984 30.6653C18.0238 30.6653 20.0307 30.6836 22.0524 30.5699C24.4006 30.4561 26.4847 29.9204 28.2018 28.2033C29.9226 26.4824 30.4546 24.402 30.5683 22.0538C30.6857 20.0321 30.6637 18.025 30.6637 15.9997V15.9997ZM15.9948 23.5251C11.8304 23.5251 8.46948 20.1642 8.46948 15.9997C8.46948 11.8352 11.8304 8.47426 15.9948 8.47426C20.1592 8.47426 23.52 11.8352 23.52 15.9997C23.52 20.1642 20.1592 23.5251 15.9948 23.5251ZM23.8282 9.92357C22.8559 9.92357 22.0707 9.13837 22.0707 8.16605C22.0707 7.19372 22.8559 6.40853 23.8282 6.40853C24.8005 6.40853 25.5857 7.19372 25.5857 8.16605C25.586 8.39693 25.5408 8.6256 25.4525 8.83896C25.3643 9.05233 25.2349 9.24619 25.0716 9.40945C24.9084 9.57271 24.7145 9.70216 24.5011 9.79038C24.2878 9.8786 24.0591 9.92386 23.8282 9.92357V9.92357Z'
                    fill='currentColor'></path>
                </svg>
              </a>
            </div>
            <div className='border-r border-[#1f1e1e] hidden sm:block'></div>
            <div className='flex text-blanco hover:cursor-pointer items-center exo-2 text-[12px] sm:text-[16px] gap-x-1 group'>
              <span>EN</span>
              <svg
                className='w-[10px] group-hover:translate-y-[1.5px] ease-in-out duration-200 transition-transform'
                viewBox='0 0 1024 1024'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                fill='#'>
                <g
                  id='SVGRepo_bgCarrier'
                  stroke-width='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  stroke-linecap='round'
                  stroke-linejoin='round'></g>
                <g id='SVGRepo_iconCarrier'>
                  <path
                    d='M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z'
                    fill='#fff'></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

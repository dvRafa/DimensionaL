import { Link } from 'react-router-dom'

import Panama from './assets/Panama.png'

const Discovers = [
  {
    name: 'Naruto Shippuden',
    link: `/Anime-Goods/Collectibles/NarutoShippuden`,
  },
  {
    name: 'Shingeki No Kyojin',
    link: `/Anime-Goods/Collectibles/ShingekiNoKyojin`,
  },
  {
    name: 'Kimetsu No Yaiba',
    link: `/Anime-Goods/Collectibles/KimetsuNoYaiba`,
  },
  {
    name: 'One Piece',
    link: `/Anime-Goods/Collectibles/OnePiece`,
  },
]
const Shops = [
  {
    name: 'Mangas',
    link: `/Anime-Goods/Mangas/Options`,
  },
  {
    name: 'Collectibles Figures',
    link: `/Anime-Goods/Collectibles/Figures`,
  },
  {
    name: 'Keychains',
    link: `/Anime-Goods/Keychains/Options`,
  },
]

export default function Header() {
  return (
    <div>
      <h1 className='bg-slate-900 text-white text-sm items-center justify-center flex py-3 inter'>
        All products are sourced directly from Japan & Mangas are written in Japanese
      </h1>
      <header className='flex flex-col max-w-[320px] md:max-w-[1200px] mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-row items-center justify-center gap-x-7 py-4'>
            <Link to='/Anime-Goods/'>
              <h1 className='text-4xl font-yakin'>Wapping</h1>
            </Link>
            <div className='relative group'>
              <button
                disabled
                className='cursor-not-allowed uppercase text-[12px] tracking-[1.32px] gothic-a1-regular font-semibold text-stone-700/95'>
                Shop <br/> <span className='capitalize text-[11px]'>Soon!</span>
              </button>
              {/* <div className='absolute group-hover:block bg-[#f1f1f1] mt-6 w-[800px] h-[30rem] z-10'>
                {Shops.map((shop, index) => (
                  <Link
                  key={index}
                    to={`${shop.link}`}
                    className='block border-b-2 border-black p-4 cursor-pointer hover:bg-gray-100'>
                    {shop.name}
                  </Link>
                ))}
              </div> */}
            </div>
            <div className='relative group'>
              <button
                disabled
                className='cursor-not-allowed uppercase text-[12px] tracking-[1.32px] gothic-a1-regular font-semibold text-stone-700/95'>
                Discover <br/> <span className='capitalize text-[11px]'>Soon!</span>
              </button>
              {/* <div className='absolute left-0 hidden group-hover:block bg-white border border-gray-300 z-10'>
                {Discovers.map((discover, index) => (
                  <Link
                  key={index}
                    to={`${discover.link}`}
                    className='block px-4 py-2 cursor-pointer hover:bg-gray-100'>
                    {discover.name}
                  </Link>
                ))}
              </div> */}
            </div>
          </div>
          <div className='flex gap-x-8 h-12'>
            <div className='flex gap-x-6 items-center'>
              <a
                href='#'
                className='hover:text-[#386601] ease-in-out duration-300 transition-colors'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Facebook</title>
                  <path
                    d='M24.8031 0H20.0031C17.8814 0 15.8466 0.842855 14.3463 2.34315C12.846 3.84344 12.0031 5.87827 12.0031 8V12.8H7.20312V19.2H12.0031V32H18.4031V19.2H23.2031L24.8031 12.8H18.4031V8C18.4031 7.57565 18.5717 7.16869 18.8718 6.86863C19.1718 6.56857 19.5788 6.4 20.0031 6.4H24.8031V0Z'
                    fill='currentColor'></path>
                </svg>
              </a>
              <a
                href='https://www.instagram.com/Thenotoriousrafa'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-[#386601] ease-in-out duration-300 transition-colors'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Instagram</title>
                  <path
                    d='M15.9948 11.1087C13.3017 11.1087 11.1039 13.3065 11.1039 15.9997C11.1039 18.6928 13.3017 20.8906 15.9948 20.8906C18.6879 20.8906 20.8856 18.6928 20.8856 15.9997C20.8856 13.3065 18.6879 11.1087 15.9948 11.1087ZM30.6637 15.9997C30.6637 13.9743 30.6821 11.9673 30.5683 9.94558C30.4546 7.59733 29.9189 5.51326 28.2018 3.7961C26.481 2.07527 24.4006 1.54324 22.0524 1.4295C20.0271 1.31575 18.0201 1.3341 15.9984 1.3341C13.9731 1.3341 11.9661 1.31575 9.94445 1.4295C7.59624 1.54324 5.5122 2.07894 3.79507 3.7961C2.07428 5.51693 1.54226 7.59733 1.42852 9.94558C1.31478 11.971 1.33312 13.978 1.33312 15.9997C1.33312 18.0214 1.31478 20.0321 1.42852 22.0538C1.54226 24.402 2.07795 26.4861 3.79507 28.2033C5.51587 29.9241 7.59624 30.4561 9.94445 30.5699C11.9698 30.6836 13.9768 30.6653 15.9984 30.6653C18.0238 30.6653 20.0307 30.6836 22.0524 30.5699C24.4006 30.4561 26.4847 29.9204 28.2018 28.2033C29.9226 26.4824 30.4546 24.402 30.5683 22.0538C30.6857 20.0321 30.6637 18.025 30.6637 15.9997V15.9997ZM15.9948 23.5251C11.8304 23.5251 8.46948 20.1642 8.46948 15.9997C8.46948 11.8352 11.8304 8.47426 15.9948 8.47426C20.1592 8.47426 23.52 11.8352 23.52 15.9997C23.52 20.1642 20.1592 23.5251 15.9948 23.5251ZM23.8282 9.92357C22.8559 9.92357 22.0707 9.13837 22.0707 8.16605C22.0707 7.19372 22.8559 6.40853 23.8282 6.40853C24.8005 6.40853 25.5857 7.19372 25.5857 8.16605C25.586 8.39693 25.5408 8.6256 25.4525 8.83896C25.3643 9.05233 25.2349 9.24619 25.0716 9.40945C24.9084 9.57271 24.7145 9.70216 24.5011 9.79038C24.2878 9.8786 24.0591 9.92386 23.8282 9.92357V9.92357Z'
                    fill='currentColor'></path>
                </svg>
              </a>
              <a
                href='#'
                className='hover:text-[#386601] ease-in-out duration-300 transition-colors'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>X</title>
                  <path
                    d='M19 13.5 30.6 0h-2.8l-10 11.8L9.7 0H.3l12.2 17.8L.3 32h2.8l10.7-12.4L22.3 32h9.3L19 13.5zm-3.8 4.4L14 16.2 4.1 2.1h4.2l8 11.4 1.2 1.8L27.9 30h-4.2l-8.5-12.1z'
                    fill='currentColor'></path>
                </svg>
              </a>
              <a
                href='#'
                className='hover:text-[#386601] ease-in-out duration-300 transition-colors'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>TikTok</title>
                  <path
                    d='M27.7436 7.50617C26.2186 7.15534 24.839 6.30812 23.8028 5.0861C22.7666 3.86408 22.1271 2.33007 21.9761 0.704204V0H16.6981V21.8783C16.6992 22.8491 16.4082 23.7956 15.8665 24.5838C15.3248 25.372 14.5598 25.9619 13.6798 26.27C12.7998 26.578 11.8495 26.5886 10.9634 26.3002C10.0774 26.0118 9.30051 25.4391 8.74288 24.6631C8.24331 23.9763 7.9374 23.1569 7.85975 22.2976C7.78209 21.4384 7.9358 20.5736 8.30348 19.8009C8.67116 19.0283 9.23814 18.3787 9.94031 17.9256C10.6425 17.4725 11.4518 17.234 12.2768 17.237C12.7331 17.2343 13.1871 17.3044 13.6231 17.445V11.8434C13.1157 11.7777 12.6044 11.7509 12.0933 11.7634C10.2105 11.816 8.38324 12.4419 6.83529 13.5644C5.28734 14.6868 4.08586 16.2571 3.37798 18.0831C2.67009 19.909 2.48654 21.9112 2.84978 23.8446C3.21303 25.778 4.10731 27.5586 5.42311 28.9684C6.77165 30.4027 8.49733 31.3853 10.3809 31.7913C12.2644 32.1972 14.2208 32.0083 16.0015 31.2484C17.7821 30.4885 19.3067 29.192 20.3814 27.5236C21.4561 25.8552 22.0325 23.8902 22.0373 21.8783V10.6751C24.166 12.2659 26.7186 13.1168 29.3346 13.1078V7.66622C28.8208 7.66843 28.3081 7.6148 27.8048 7.50617H27.7436Z'
                    fill='currentColor'></path>
                </svg>
              </a>
            </div>
            <div className='border-r'></div>
            <div className='flex items-center'>
              <svg
                className='mr-2'
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='25'>
                <rect
                  fill='#f3f3f3'
                  width='40'
                  height='25'
                />
                <circle
                  fill='#bc002d'
                  cx='20'
                  cy='12.5'
                  r='7'
                />
              </svg>
              <img
                alt='Panama - PTY flag'
                className='w-[40px] h-[25px]'
                src={Panama}
              />
            </div>
          </div>
        </div>
      </header>
      <div className='border-b shadow-sm'></div>
      {/* <div className='border-t h-[2px] borders-background w-full'></div> */}
    </div>
  )
}

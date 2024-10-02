import { Link } from 'react-router-dom'

export default function DetailCard() {
  return (
    <div className='w-[400px] bg-[#f1f1f1] border rounded shadow p-4'>
      <div className='w-fit'>
        <Link to='/Anime-Goods/'>
          <svg
            className='h-6 w-6 hover:cursor-pointer hover:opacity-50 duration-200 ease-in-out transition-opacity md:visible invisible'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'>
            <g
              id='SVGRepo_bgCarrier'
              strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              <path
                d='M5 1H4L0 5L4 9H5V6H11C12.6569 6 14 7.34315 14 9C14 10.6569 12.6569 12 11 12H4V14H11C13.7614 14 16 11.7614 16 9C16 6.23858 13.7614 4 11 4H5V1Z'
                fill='#00000'></path>
            </g>
          </svg>
        </Link>
      </div>
      <h1 className='text-[64px] tracking-normal leading-[76.8px] mt-4 gothic-a1-regular'>
        {character.name}
      </h1>
      <div className='flex flex-row md:gap-x-8 gap-x-4'>
        <p className='mt-[10px] uppercase text-[12px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal border-b pb-1'>
          popular
        </p>
        <p className='mt-[10px] uppercase text-[12px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal  border-b pb-1'>
          {character.price} USD
        </p>
        <p className='mt-[10px] uppercase text-[12px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal  border-b pb-1'>
          in-stock
        </p>
        <p className='mt-[10px] uppercase text-[12px] tracking-[1.32px] leading-[16px] gothic-a1-regular font-normal  border-b pb-1'>
          {character.design}
        </p>
      </div>
      <div className='flex flex-col mt-[24px]'>
        <h1 className='mb-[2px] uppercase text-[11px] tracking-[1.32px] leading-[14px] gothic-a1-regular font-normal text-stone-700/50'>
          Description
        </h1>
        <p className='text-[20px] tracking-normal leading-[28.8px] gothic-a1-light'>
          {character.data}
        </p>
      </div>
      <div className='flex flex-row mt-16'>
        <a
          className='text-[16px] border py-6 border-stone-700/50 border-opacity-50 px-8 lowercase leading-[12px] tracking-[1.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:tracking-[3px] duration-200 ease-in-out hover:bg-blue-800/90 transition-colors hover:text-white'
          href='https://wa.me/50764245895'
          rel='noopener noreferrer'
          target='_blank'
          aria-label='Whatsapp Number'>
          whatsapp
        </a>
        <a
          className='text-[16px] border-y border-r py-6 border-stone-700/50 border-opacity-50 px-8 lowercase leading-[12px] tracking-[1.5px] gothic-a1-light md:text-[16px] md:leading-[16px] md:tracking-[3px] duration-200 ease-in-out hover:bg-blue-800/90 transition-colors hover:text-white'
          href='https://instagram.com/thenotoriousrafa'
          rel='noopener nonrefereer'
          target='_blank'
          aria-label='Instagram account'>
          instagram
        </a>
      </div>
    </div>
  )
}

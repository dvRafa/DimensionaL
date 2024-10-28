// import { Link } from 'react-router-dom'
// import Heart from '../public/Heart.svg'

export default function Footer() {
  return (
    <div className='w-fit mx-auto mb-6'>
      {/* <div className='border-t h-[2px] borders-background w-full'></div> */}
      {/* <div className='border-t shadow-sm'></div>
      <div className='flex md:max-w-[980px] max-w-[320px] mx-auto py-[60px] justify-between'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[25px] md:gap-y-[50px] items-start'>
          <div className='flex flex-col'>
            <p className='mb-2 uppercase text-[12px] tracking-[1.32px] gothic-a1-regular font-semibold'>
              contact
            </p>
            <ul className='inter text-[#666]'>
              <li className='text-[12px] tracking-[05.px] leading-[20px] md:text-[15px] md:leading-[30px]'>
                <a
                  className='hover:text-[#386601] ease-in-out duration-300 transition-colors'
                  href='https://instagram.com/thenotoriousrafa'
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label='Instagram Account'>
                  Instagram
                </a>
              </li>
              <li className='text-[12px] tracking-[0.5px] leading-[20px] md:text-[15px] md:leading-[30px]'>
                <a
                  className='hover:text-[#386601] ease-in-out duration-300 transition-colors'
                  href='https://wa.me/50764245895'
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label='Whatsapp Number'>
                  Whatsapp
                </a>
              </li>
              <li className='text-[12px] tracking-[0.5px] leading-[20px] md:text-[15px] md:leading-[30px]'>
                <a
                  className='hover:text-[#386601] ease-in-out duration-300 transition-colors'
                  href='mailto:rafaeldejesus694@outlook.com'
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label='Email Account'>
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <p className='mb-2 uppercase text-[12px] tracking-[1.32px] gothic-a1-regular font-semibold'>
              Wapping
            </p>
            <ul className='inter text-[#666]'>
              <li>
                <Link className='text-[12px] leading-[20px] md:text-[15px] md:leading-[30px] tracking-[0.5px] hover:text-[#386601] ease-in-out duration-300 transition-colors cursor-not-allowed'>
                  About
                </Link>
              </li>
              <li>
                <Link className='text-[12px] leading-[20px] md:text-[15px] md:leading-[30px] tracking-[0.5px] hover:text-[#386601] ease-in-out duration-300 transition-colors cursor-not-allowed'>
                  Terms + Conditions
                </Link>
              </li>
              <li>
                <Link className='text-[12px] leading-[20px] md:text-[15px] md:leading-[30px] tracking-[0.5px] hover:text-[#386601] ease-in-out duration-300 transition-colors cursor-not-allowed'>
                  Contact Us <br />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-[12px] tracking-[1.32px] md:text-[12.5px] md:tracking-normal font-bold'>
          <span className='font-normal inter'>Located in</span> Panama, Panama
          City
        </p>
        <p className='text-[12.5px] inter'>
          Created by <span className='font-yakin'>Wapping</span>
        </p>
      </div> */}
      <h1 className='text-[#0000008f] text-base montserrat tracking-tight'>
        Service Only Available in{' '}
        <span className='text-indigo-700 underline'>Panama City</span>
      </h1>
    </div>
  )
}

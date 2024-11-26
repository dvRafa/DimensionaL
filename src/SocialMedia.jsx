export default function SocialMedia() {
  return (
    <div className='flex mt-16 gap-x-3'>
      <a
        className='w-32 md:w-36 text-[11px] rounded uppercase border py-4 md:py-5 border-[#b3b3b3] text-center leading-[12px] tracking-[1.5px] font-bold md:text-[14px] md:leading-[16px] md:tracking-tight md:duration-200 md:ease-in-out md:hover:bg-cardlightgray md:transition-colors bg-transparent text-[#b3b3b3]'
        href='https://wa.me/50764245895'
        rel='noopener noreferrer'
        target='_blank'
        aria-label='Whatsapp Number'>
        whatsapp
      </a>
      <a
        className='w-32 md:w-36 text-[11px] rounded uppercase border py-4 md:py-5 text-center leading-[12px] tracking-[1.5px] font-bold md:text-[14px] md:leading-[16px] md:tracking-tight md:duration-200 md:ease-in-out bg-blanco md:transition-colors text-black hover:bg-blanco/85'
        href='https://instagram.com/thenotoriousrafa'
        rel='noopener noreferrer'
        target='_blank'>
        instagram
      </a>
    </div>
  )
}

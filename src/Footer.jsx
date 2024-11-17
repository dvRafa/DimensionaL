export default function Footer() {
  return (
    <div className='flex flex-col items-center justify-center py-6 bg-darkbg'>
      <div className='md:w-[1200px] mb-12 pt-12 md:border-darkgray md:border-t rounded-3xl justify-items-center'>
        <p className='text-[12.5px] text-tight text-lightgray montserrat mb-10 md:mb-4 px-6 md:px-0 md:max-w-[700px] leading-5'>
          <span className='montserrat-med text-blanco'>
            *Price Negotiation Policy:
          </span>{' '}
          We understand that everyone's budget is different, and we strive to
          make our products accessible to all anime fans. While the prices
          listed on our website are standard, we are open to respectful and
          reasonable price negotiations. If you're interested in negotiating a
          price or making an offer, please feel free to contact us directly
          through Instagram or Whatsapp. We're happy to discuss your needs and
          work with you to find a mutually beneficial arrangement.
        </p>
        <h1 className='text-blanco text-[9px] tracking-[1.5px] exo-2 uppercase'>
          Service Only Available in{' '}
          <span className='text-green underline'>Panama City ª2024</span>
        </h1>
      </div>
    </div>
  )
}

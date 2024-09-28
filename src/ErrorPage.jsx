import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='mx-auto w-fit text-center py-24 flex flex-col'>
      <h1 className='text-xl'>404 Page not found.</h1>
      <Link
        className='text-xl hover:text-blue-800 duration-200 ease-in-out'
        to='/Anime-Goods'>
        Go Back
      </Link>
    </div>
  )
}

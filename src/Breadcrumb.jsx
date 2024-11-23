import { Link } from 'react-router-dom'

export default function Breadcrumb({ path }) {
  return (
    <nav className='px-[22px] text-blanco'>
      <ul className='flex space-x-2'>
        {path.map((item, index) => (
          <li key={index}>
            {index > 0 && <span> {'>'} </span>}
            <Link
              to={item.link}
              className='font-semibold text-sm'>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

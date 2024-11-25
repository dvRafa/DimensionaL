import { Link } from 'react-router-dom'

export default function Breadcrumb({ path }) {
  return (
    <nav className='text-lightgray pb-4 text-[12.5px] font-semibold'>
      <ul className='flex space-x-1'>
        {path.map((item, index) => (
          <li key={index}>
            {index > 0 && <span>{'> '}</span>}
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

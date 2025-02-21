import {Link} from 'react-router-dom'
import './css/navbar.css'
const nav=()=>
{
  return(
    <header>
      <nav>
        <ul>
        <li><Link className='li' to="/">Home</Link></li>
        <li><Link className='li' to="/about">About</Link></li>
        <li><Link className='li' to="/skills">Skills</Link></li>
        <li><Link className='li' to="/skills">Projects</Link></li>
        <li><Link className='li' to="/contact">Contact</Link></li>
        </ul>
        </nav>
    </header>
  )
}
export default nav
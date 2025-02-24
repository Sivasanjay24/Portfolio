import { Link } from 'react-scroll'
import './css/navbar.css'
const nav=()=>
{
  return(
    <header>
      <nav>
          <li ><Link to ="home" smooth={true} duration={500} className="link" >Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="link" >About </Link></li>
          <li><Link to="skills" smooth={true} duration={500} className="link" >Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500}  className="link" >Projects </Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="link" >Contact</Link></li>
        </nav>
    </header>
  )
}
export default nav
import './css/home.css'
import Glitch from './glitch'
function home()
{
  return (
    <div className="home">
      <div className='con'>
      <div className="content">
      <span className="h"> Hi,I'm <Glitch
   speed={0.6}
   enableShadows={true}
   enableOnHover={true}
   className='custom-class'>Sivasanjay</Glitch></span>
      <span className="h4">Computer Science and Engineering Undergrad</span>
      </div>
      <img className="imga"src='/me.jpg'></img>
      </div >
    </div>
  )
}
export default home
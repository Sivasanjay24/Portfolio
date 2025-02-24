// import './App.css'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useRef } from 'react';
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/project'
import Contact from './components/contact'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <BrowserRouter>
//     <Nav/>
//     <Routes>
//        <Route path='/' element={<Home/>}/>
//        <Route path='/about' element={<About/>}/>
//        <Route path='/skills' element={<Skills/>}/>
//        <Route path='/projects' element={<Projects/>}/>
//        <Route path='/contact' element={<Contact/>}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }
  function App() {
  
    const goRef= useRef(null);
  
  
    const goTo=()=>{
       goRef.current.scrollIntoView({behavior : "smooth"});
    };
    return (
      <>
       <div className="app-container"> 
      <Navbar/>
  
      <section id="home"><Home onScroll={goTo} /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section  ref={goRef} id="contact"><Contact /></section>
      </div>      
      </>
    );
  }

export default App

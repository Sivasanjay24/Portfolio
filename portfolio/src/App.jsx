import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
//import Projects from './components/projects'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/skills' element={<Skills/>}/>
       <Route path='/contact' element={<Contact/>}/>
    </Routes>
    {/* <About/>
       <Skills/>
       <Contact/> */}
    </BrowserRouter>
  )
}

export default App

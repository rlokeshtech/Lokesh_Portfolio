import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import NavBar from './NavBar'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-cyan-50">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Project' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Skills' element={<Skills/>} />
          <Route path='/Experience' element={<Experience/>} />
          <Route path='/Education' element={<Education/>} />
        </Routes>
      </div>
    </>
  )
}

export default App

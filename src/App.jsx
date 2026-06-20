import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import NavBar from './NavBar'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'

function App() {
  return (
    <div className="bg-cyan-50">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </div>
  )
}

export default App
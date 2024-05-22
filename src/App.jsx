import Navbar from "./components/Navbar"
import Index from "./pages/Index"
import { Route,Routes } from "react-router-dom"
import About from "./pages/About"
import Project from "./pages/Project"
import Experience from "./pages/Experience"
import { Contact } from "./pages/Contact"
function App() {

  return (
    <div className="">
      <Navbar/>
      <Routes >
        <Route path='/'  element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/experience" element={<Experience/>} />
      </Routes>
      
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BrowserInfo from './pages/BrowserInfo'
import ChuckNorris from './pages/ChuckNorris'
import About from './pages/About'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BrowserInfo />} />
        <Route path="/chuck" element={<ChuckNorris />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
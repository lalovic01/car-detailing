import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import useScrollToTop from './hooks/useScrollToTop'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Services from './pages/Services'

function AppRoutes() {
  const location = useLocation()
  useScrollToTop()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

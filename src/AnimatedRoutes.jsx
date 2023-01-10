import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Projects from './components/assets/Projects';
import About from './components/assets/About';
import Contact from './components/assets/Contact';
import App from './App';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    //<Router>
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
            <Route path='/' element={<App/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </AnimatePresence>
    //</Router>
  )
}

export default AnimatedRoutes
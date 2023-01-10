import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
import logo from '../../icons/logo.png'
import {useState} from 'react'
import {motion} from 'framer-motion'

const headerVariants = {
    hover: {
        y: "-3px",
        scale: 1.1,
        transition: {
            duration: 0.1,
        },
        
    },
    tap:{
        scale: 0.85
    },
    hoverLogo: {
        x:[0,-7,7,-4,4,-1,1,0],
        
    }
}

const Header = () => {
    const [isNavbarOpened, setNavbarOpened] = useState(false)

  return (
    <header className='header__container'
    >
        <motion.div className='header__left'
            variants={headerVariants}
            whileHover='hoverLogo'
        >
            <Link to='/'><img src={logo} alt='Logo' width='120px'></img></Link>
        </motion.div>
        <nav className={`header__right ${isNavbarOpened  && 'open'}`}>
            <ul>
                <motion.li variants={headerVariants} whileHover='hover' whileTap="tap" onClick={() => setNavbarOpened(false)}>
                    <Link to='/'>Home</Link>
                </motion.li>
                <motion.li variants={headerVariants} whileHover='hover' whileTap="tap" onClick={() => setNavbarOpened(false)}>
                    <Link to='/projects'>Projects</Link>
                </motion.li>
                <motion.li variants={headerVariants} whileHover='hover' whileTap="tap" onClick={() => setNavbarOpened(false)}>
                    <Link to='/about'>About</Link>
                </motion.li>
                <motion.li variants={headerVariants} whileHover='hover' whileTap="tap" onClick={() => setNavbarOpened(false)}>
                    <Link to='/contact'>Contact Me</Link>
                </motion.li>
            </ul>
            <div className={`header__toggle ${isNavbarOpened && 'open'}`} onClick={() => setNavbarOpened(!isNavbarOpened)}>
                <div className="bar"></div>
            </div>
        </nav>        
    </header>
    
  )
}

export default Header
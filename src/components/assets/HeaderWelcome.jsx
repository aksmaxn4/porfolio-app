import React from 'react'
import '../styles/header_welcome.css'
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
        }
    },
    tap:{
        scale: 0.85
    },
    hoverLogo: {
        x:[0,-7,7,-4,4,-1,1,0],
    }
}

const HeaderWelcome = () => {
    const [isNavbarOpened, setNavbarOpened] = useState(false)

  return (
    <header className='welcome__header__container'>
        <motion.div className='welcome__header__left'
            variants={headerVariants}
            whileHover='hoverLogo'
        >
            <Link to='/'><img src={logo} alt='Logo' width='120px'></img></Link>
        </motion.div>
        <nav className={`welcome__header__right ${isNavbarOpened  && 'open'}`}>
            <ul>
                <motion.li variants={headerVariants} whileHover='hover' whileTap='tap' onClick={() => setNavbarOpened(false)}>
                    <Link to='/'>Home</Link>
                </motion.li>
                <motion.li variants={headerVariants} whileHover='hover' whileTap='tap' onClick={() => setNavbarOpened(false)}>
                    <Link to='/projects'>Projects</Link>
                </motion.li>
                <motion.li variants={headerVariants} whileHover='hover' whileTap='tap' onClick={() => setNavbarOpened(false)}>
                    <Link to='/about'>About</Link>
                </motion.li>
                <motion.li variants={headerVariants} whileHover='hover' whileTap='tap' onClick={() => setNavbarOpened(false)}>
                    <Link to='/contact'>Contact Me</Link>
                </motion.li>
            </ul>
            <div className={`welcome__header__toggle ${isNavbarOpened && 'open'}`} onClick={() => setNavbarOpened(!isNavbarOpened)}>
                <div className="welcome__bar"></div>
            </div>
        </nav>        
    </header>
    
  )
}

export default HeaderWelcome
import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import Footer from './Footer'
import '../styles/navpage.css'

const Navpage = () => {
    
    return (
        <motion.div exit={{
            x: ['-10vw', '10vw', '-100vw'],
            transition: {
                duration: 0.8,
            }
        }}>
            <div className='container'>
               <div className= 'box' >
                <h1>
                    <Link to='/about'>
                    <span>
                    About Me
                    </span>
                    </Link>
                </h1>
                </div>
               <div className= 'box' >
                    <h1>
                        <Link to='/projects'><span>Projects</span></Link>
                    </h1>
                </div>
               <div className= 'box'><h1><span > 
                    <a target='_blank'
                    href='https://drive.google.com/file/d/1GtbA40gD_Ol2BQJQfiRacyi6WaxJmH5d/view?usp=share_link'
                    >Download CV</a>
                </span></h1>
                </div>
               <div className= 'box'>
                <h1><Link to='/contact'><span >Contact Me</span></Link></h1>
                </div>
            </div>
            <Footer/>
        </motion.div>
      )
}


export default Navpage


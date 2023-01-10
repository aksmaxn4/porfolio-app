import React from 'react'
import '../styles/about.css'
import myImg from '../photo-about.jpg'
import Footer from './Footer'
import Header from './Header'
import jsLogo from '../../icons/javascript.png'
import csharpLogo from '../../icons/c-sharp.png'
import htmlLogo from '../../icons/html5.png'
import cssLogo from '../../icons/css3.png'
import nodeLogo from '../../icons/nodejs.png'
import sqlLogo from '../../icons/sql.png'
import reactLogo from '../../icons/react.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
    const framerVariants = {
        init: {
            //x: '-50vw',
            opacity: 0,
        },
        animate: {
            //x: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                // damping: 15,
                // type: 'spring',
                // mass: 0.4,
            }
        },
        exit: {
            //x: '50vw',
            //x: '100vw',
            opacity: 0,
            transition: {
                duration: 0.2,
                
           }
        }
    }

    function getElementsVariants(axis, direction, delay){
        return {
            init: {
                [axis] : direction,
                transition: {
                    when: 'beforeChildren'
                }
            },
            animate: {
                [axis] : 0,
                transition: {
                    duration: 0.8,
                    delay: 0.15 * delay,
                    ease: 'easeInOut'
                }
            }, exit: {
                [axis] : direction,
                opacity: 0,
                transition: {
                    duration: 1
                }
            }
        }
    }

    return (
         (
            <>
            <Header/>
      <motion.div 
        className='about__container'
        variants={framerVariants}
        initial='init'
        animate='animate'
        exit='exit'
        >
            <motion.p
            variants={getElementsVariants('y','-100vh',1)}
            initial='init'
            animate='animate'
            exit='exit'
             className='about__intro'> My name is <span>Maksim Aksenov</span> <br></br> I am a 23-year-old web developer originally from the city of Perm in Russia
             </motion.p>
            <div className="about__main">
                <motion.div className="about__paragrahs"
                variants={getElementsVariants('x','500vh',3)}
                initial='init'
                animate='animate'
                exit='exit'
                >
                        <p className='about__p'>I am currently working on projects related to JavaScript, React and Node. I am constantly expanding my knowledge and skills in these areas and always open to learning about new technologies. In addition to my main area of focus, I also have a strong interest in web3 and crypto technologies.</p>
                    <h2>⏮️ Background</h2>
                        <p className='about__p'>My educational background in Business Informatics from <a href='https://www.hse.ru/en/' target='_blank'><i><u>HSE University</u></i></a> where I spent three years studying, has provided me with a strong foundation and has been instrumental in fueling my love for programming and computer science.</p>
                    <h2>💻 Last Job</h2>
                        <p className='about__p'>With my previous job as an <u>Integration Specialist</u> at <i><a href='https://greendata.store/' target='_blank'>GreenData, Russia</a></i> I gained valuable experience working with databases, writing SQL requests, creating ETL processes, and developing algorithms on Groovy.</p>
                        <p className='about__p'>I am currently seeking new career opportunities in the country of Israel and am excited to take on new challenges and contribute to the growth of a company. If you have any job openings that align with my skills and interests, please do not hesitate to <Link to='/contact'><u>contact me</u></Link>. I am highly motivated and ready to take the next step in my career.</p>
                </motion.div>
                <motion.div className="about__image"
                variants={getElementsVariants('x','-100vh',4)}
                initial='init'
                animate='animate'
                exit='exit'
                >
                    <img src={myImg}></img>
                </motion.div>
            </div>
            <div className="about__stack">
                <span>Technologies I am familiar with:</span>
            <div>
                <span className='about__ticker'>
                    <img src={csharpLogo}></img>
                    <img src={htmlLogo}></img>
                    <img src={jsLogo} alt='JavaScript'></img>
                    <img src={cssLogo}></img>
                    <img src={nodeLogo}></img>
                    <img src={sqlLogo}></img>
                    <img src={reactLogo}></img>
                </span>
                <span className='about__ticker'>
                    <img src={csharpLogo}></img>
                    <img src={htmlLogo}></img>
                    <img src={jsLogo}></img>
                    <img src={cssLogo}></img>
                    <img src={nodeLogo}></img>
                    <img src={sqlLogo}></img>
                    <img src={reactLogo}></img>
                </span>
                </div>
            </div>
      </motion.div>
      <Footer/>
      </>
        )
    );
}

export default About
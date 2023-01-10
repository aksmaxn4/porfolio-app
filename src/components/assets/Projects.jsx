import React from 'react'
import '../styles/projects.css'
import {data} from '../data'
import Footer from './Footer'
import githubLogo from '../../icons/icons8-github-50.png'
import linkLogo from '../../icons/icons8-link-50.png'
import Header from './Header'
import { motion } from 'framer-motion'

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


const projectVariants = (num) =>  {
    return {
        init: {
            scale: 0
        },
        animate: {
            scale: 1,
            transition: {
            duration: 0.4,
            delay: 0.6 + num * 0.15
            }
        }
    }
}

const Projects = () => {
    const projectDiv = []
    data.forEach((el, id) => {
        console.log(el.img)
        const div = (
            <motion.div key={id} className={`project n${id+1}`} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${el.img}'   )`}}  
            variants={projectVariants(id+2)}
            initial='init'
            animate='animate'
            >
                <div className='project__image'>
                    {/* <img src={el.img}></img> */}
                    <span style={{backgroundImage: `url('${el.img}'   )`}} />
                    <span style={{backgroundImage: `url('${el.img}'   )`}}/>
                    <span style={{backgroundImage: `url('${el.img}'   )`}}/>
                    <span style={{backgroundImage: `url('${el.img}'   )`}}/>
                </div>
                <div className={`project__content`}>
                    {/* <div> */}
                        <h3>{el.title}</h3>
                        <p>{el.content}</p>
                        <div>
                            {el.github ? <a href={`${el.github}`} target="_blank"><img src={githubLogo}></img></a> : ''}
                            {el.hosting  ? <a href={`${el.hosting}`} target="_blank"><img src={linkLogo}></img></a> : ''}
                        </div>
                        
                    {/* </div> */}
                </div>
            </motion.div>
        )
        projectDiv.push(div)
    })

  return (
    <>
    <Header/>
    <motion.div className='projects__container'
        variants={framerVariants}
        initial='init'
        animate='animate'
        exit='exit'
    >
        <motion.div className='projects__header'
        variants={projectVariants(-1)}>
            <p>🛠️ Here are the projects that I've made<br/>Check out for more on my <a target='_blank' href='https://github.com/aksmaxn4?tab=repositories'>GitHub</a></p>
        </motion.div>
        <div className='projects__main'>
            {projectDiv}
        </div>
    </motion.div>
    <Footer/>
    </>
  )
}

export default Projects
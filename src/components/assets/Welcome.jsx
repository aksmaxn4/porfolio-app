import React from 'react'
import '../styles/welcome.css'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { motion } from 'framer-motion'
import bgVideo from '../../video/Background - 4422.mp4'
import HeaderWelcome from './HeaderWelcome'

const framerVariants = {
  init: {
      opacity: 0,
  },
  animate: {
      opacity: 1,
      transition: {
          duration: 0.8,
          when: 'beforeChildren',
      }
  },
  exit: {
      opacity: 0
  }
}

const buttonVariants = {
  init: {
      y: '50vh',
      opacity: 0
  },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
          type: 'spring',
          duration: 0.5,
          delay: 1.3,
          ease: 'easeInOut',
          mass: 0.7,
          stiffness: 25,
          
      }
  },
  exit: {
      y: '50vh',
      opacity: 0,
  },
  hover: {
      scale: 1.2,
  }
}

function getIconVariant(num){
  return {
      init: {
          y: '50vh',
          opacity: 0
      },
      animate: {
          y: 0,
          opacity: 1,
          rotate: 360,
          transition: {
              delay: 2 + (0.35 * num),
              ease: 'easeInOut',
              mass: 2,
              stiffness: 25,
              rotate: { duration : 1, delay: 2.3 + (0.35 * num), ease: 'easeInOut'}
          }
      },
      exit: {
          y: '50vh',
          opacity: 0,
      },
      hover: {
          scale: 1.2, 
      }
  }
}

const Welcome = ({pageScroll}) => {
  const el = useRef(null)
  const typed = useRef(null)

  useEffect(() => {
    const options = {
        strings: [
            'MAKSIM<BR/>AKSENOV'
        ],
        typeSpeed: 35,
        showCursor: false,
        smartBackspace: true,
        delay: 1
    }

    typed.current = new Typed(el.current, options)

    return () => {
        typed.current.destroy()
    }
}, [])

  return (
    <>
    <HeaderWelcome/>
      <motion.div
    variants={framerVariants}
    initial='init'
    animate='animate'
    exit='exit'
     className='welcome__container'>
        {/* <span className='welcome__greetings' ref={el}></span> */}
        <div className='showcase'>
            <video src={bgVideo} type="video/mp4" autoPlay loop muted></video>
            <h2  ref={el}></h2>
        </div>
        <motion.div className='welcome__secondary'
            variants={buttonVariants}
            initial='init'
            animate='animate'
            exit='exit'
        >
            Beginner web-developer<br/> Dream it // Build it // Share it
        </motion.div>
        <motion.button
        variants={buttonVariants}
        initial='init'
        animate='animate'
        exit='exit'
        whileHover='hover'
        onClick={() => pageScroll(1)}
        whileTap={{scale: 0.9}}
        >See More</motion.button>
        <div className='welcome__icons'>
            <a href='https://t.me/Maksim_Aksenov' target='_blank'>
                <motion.svg
                 variants={getIconVariant(1)}
                 initial='init'
                 animate='animate'
                 exit='exit'
                 whileHover='hover'
                 xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#0f2862" class="bi-telegram" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                </motion.svg>
            </a>
            <a href='https://github.com/aksmaxn4' target='_blank'>
                <motion.svg
                variants={getIconVariant(2)}
                initial='init'
                 animate='animate'
                 exit='exit'
                 whileHover='hover'
                xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#0f2862" class="bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </motion.svg>
            </a>
            <a href='https://drive.google.com/file/d/1GtbA40gD_Ol2BQJQfiRacyi6WaxJmH5d/view?usp=share_link' 
            target='_blank'
            >
                <motion.svg
                 variants={getIconVariant(3)}
                 initial='init'
                 animate='animate'
                 exit='exit'
                 whileHover='hover'
                 xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#0f2862" class="bi-file-cv" viewBox="0 0 16 16">
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
                </motion.svg>
            </a>
        </div>
    </motion.div>
    </>
  )
}

export default Welcome
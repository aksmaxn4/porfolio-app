import React, {useRef, useState} from 'react'
import '../styles/contact.css'
import facebookLogo from '../../icons/facebook-icon.png'
import instagramLogo from '../../icons/instagram-icon.png'
import telegramLogo from '../../icons/telegram-icon.png'
import linkedinLogo from '../../icons/linkedin-icon.png'
import whatsappLogo from '../../icons/whatsapp-icon.png'
import emailjs from '@emailjs/browser'
import Header from './Header'
import Footer from './Footer'
import { motion } from 'framer-motion'
import Modal from './Modal'

const framerVariants = {
    init: {
        //x: '-50vw',
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            // damping: 15,
            // type: 'spring',
            // mass: 0.4,
            // stiffness: 170
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

const logoVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.4,
            yoyo: Infinity,
        }
    },
    tap: {
        scale: 0.7
    }
}

function getElementsVariants(axis, direction, delay){
    return {
        init: {
            [axis]: direction,
            transition: {
                when: 'beforeChildren'
            }
        },
        animate: {
            [axis]: 0,
            transition: {
                duration: 0.6,
                delay: 0.15 * delay,
                ease: 'easeInOut'
            }
        },
        exit: {
            [axis]: direction,
            opacity: 0,
            transition: {
                duration: 1
            }
        }
    }
}

const Contact = () => {
    const form = useRef()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              setModalIsOpen(true)
              form.current.reset()

          }, (error) => {
              alert(error.text);
        });
    };

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const changeHeightOnInput = (e) => {
        e.target.style.height = 0;
        e.target.style.height = (e.target.scrollHeight) + 'px'
    }

  return (
    <>
    <Header/>
    <motion.div className='contact__container'
        variants={framerVariants}
        initial='init'
        animate='animate'
        exit='exit'
    >
        <Modal isOpen={modalIsOpen} onClose={closeModal}/>
        <motion.div className="contact__logos"
        variants={getElementsVariants('y','-50vh', 3)}
        initial='init'
        animate='animate'
        exit='exit'
        >
        <p>Here are my socials. Reach out to me any time! ✌️</p>
        <a className='contact__logo' href="https://www.facebook.com/profile.php?id=100087140635856" target='_blank'><motion.img variants={logoVariants} whileHover='hover' whileTap='tap' src={facebookLogo} alt='Facebook' width='70px'></motion.img></a>
                    <a className='contact__logo' href="https://t.me/Maksim_Aksenov" target='_blank'><motion.img variants={logoVariants} whileHover='hover' whileTap='tap' src={telegramLogo} alt='Telegram' width='70px'></motion.img></a>
                    <a className='contact__logo' href="https://instagram.com/aksmax_" target='_blank'><motion.img variants={logoVariants} whileHover='hover' whileTap='tap' src={instagramLogo} alt='Instagram' width='70px'></motion.img></a>
                    <a className='contact__logo' href="https://www.linkedin.com/in/maksim-aksenov-a5b8b124b/" target='_blank'><motion.img variants={logoVariants} whileHover='hover' whileTap='tap' src={linkedinLogo} alt='LinkedIn' width='70px'></motion.img></a>
                    <a className='contact__logo' href="https://wa.me/79127879227" target='_blank'><motion.img variants={logoVariants} whileHover='hover' whileTap='tap' src={whatsappLogo} alt='WhatsApp' width='70px'></motion.img></a>
        </motion.div>
        <div className='contact__main'>
            <motion.div className='contact__map'
            variants={getElementsVariants('x','-100vh', 9)}
            initial='init'
            animate='animate'
            exit='exit'
            >
                <p>Currently I live here<br/> &#128071;</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108373.16109574249!2d34.761573828225536!3d31.915799199842446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b129fc7ed9a5%3A0xa936114e7e166430!2sAyanot!5e0!3m2!1sru!2sil!4v1667989197379!5m2!1sru!2sil" 
            width="450" 
            height="300" 
            style={{borderRadius: '15px'}} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
      </iframe>
        </motion.div>
        <motion.div className="contact__info"
        variants={getElementsVariants('x','100vh', 6)}
        initial='init'
        animate='animate'
        exit='exit'>
                <div className="contact__email">
                    <p>📧 Drop me a mail even to ask how I am!<br/> I will be happy to hear from you anytime</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <motion.input whileFocus={{scale: 1.1}} type='text' name='user_name' placeholder='Your name' required />
                        <motion.input whileFocus={{scale: 1.1}} type='email' name='user_email' placeholder='Your e-mail' required />
                        {/* <input type='text' name='message' placeholder='Your message' required/> */}
                        <motion.textarea whileFocus={{scale: 1.1}} style={{resize: 'none'}} name='message' placeholder='Your message' onInput={(e) => changeHeightOnInput(e)} />
                        <input type='submit' value='Send 📨'/>
                    </form>
                    
                </div>  
        </motion.div>
        </div>
    </motion.div>
    <Footer/>
    </>
  )
}

export default Contact
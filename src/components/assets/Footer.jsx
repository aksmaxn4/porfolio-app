import React from 'react'
import '../styles/footer.css'
import tgLogo from '../../icons/telegram-icon.png'

const Footer = () => {
  return (
    <footer className='footer__container'>
      <div className='footer__left'>
        <a className='footer__link' href='https://t.me/Maksim_Aksenov' target='_blank'><img width='15px' src={tgLogo}></img> Maksim Aksenov</a> <br/>
        <a className='footer__link' href='mailto:aksmaxn4@gmail.com'>aksmaxn4@gmail.com</a> 
        <a className='footer__link' href='tel:+952534237710'> &nbsp;053-423-7710</a> <br/>
        <a className='footer__link' href='https://goo.gl/maps/gPLENPvCt9pZW15C7' target='_blank'>Ayanot, IL</a>
      </div>
      <div className='footer__right'>
        <a href='#' className='footer__link face'>Facebook</a> <span className='footer__star'>&#11088;</span> 
        <a href='#' className='footer__link inst'>Instagram</a> <span className='footer__star'>&#11088;</span> 
          <a href='#' className='footer__link linkedin'>LinkedIn</a> 
      </div>
    </footer>
  )
}

export default Footer
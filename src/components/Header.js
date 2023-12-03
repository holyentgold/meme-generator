import React from 'react';
import HG from '../images/HG.png';
import '../style.css'



const Header = () => {
  return (
    <header className='header'>
      <img className='header-image' src={HG} alt='img' />
      <h2 className='header-title'>Meme Generator</h2>
      <h4 className='header-page'>Demo Meme APP by Holyentgold</h4>
    </header>
  )
}


export default Header
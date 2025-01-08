import React from 'react'
import '../Styles/Banner.scss'

import cathy1 from '/Users/fidelbriandava/Documents/PortoProject/Porto/src/assets/img/cathy1.jpg';
import cathy2 from '/Users/fidelbriandava/Documents/PortoProject/Porto/src/assets/img/cathy2.jpg';
import cathy3 from '/Users/fidelbriandava/Documents/PortoProject/Porto/src/assets/img/cathy3.jpeg';
import cathy4 from '/Users/fidelbriandava/Documents/PortoProject/Porto/src/assets/img/cathy4.jpeg';

export const Banner = () => {
  return (
    <div className="banner">
        <div className='slider' style={{"--quantity": 5}}>
        <div className='item' style={{"--position": 1}}><img src={cathy1}/></div>
        <div className='item' style={{"--position": 2}}><img src={cathy2}/></div>
        <div className='item' style={{"--position": 3}}><img src={cathy3}/></div>
        <div className='item' style={{"--position": 4}}><img src={cathy4}/></div>
        <div className='item' style={{"--position": 5}}><img src={cathy1}/></div>
        <div className='item' style={{"--position": 6}}><img src={cathy2}/></div>
        </div>
        </div>
  )
}

export default Banner;
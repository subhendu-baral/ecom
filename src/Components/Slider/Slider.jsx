import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Slider.scss'
import { Transform } from '@mui/icons-material';

var img = ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=full',
  'https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80',
  'https://images.unsplash.com/photo-1426024120108-99cc76989c71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80'
]
export const Slider = () => {
  const [currentSlide, setcurrentSlide] =useState(0);
  const prevSlide = () =>{
    setcurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    console.log(currentSlide);
  }
  const nextSlide = () => {
    setcurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)
  }
  return (
    <div className='slider'>
      <div className='slider-container' style={{transform:`translate(-${currentSlide * 100}vw)`}}>
        <img src={img[0]} alt="img" />
        <img src={img[1]} alt="img" />
        <img src={img[2]} alt="img" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  )
}

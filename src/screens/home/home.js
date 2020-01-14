
import React from "react";
import { Link } from '@k-redux-router/react-k-ramel'
import { useStyles } from './home.style'


import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} 
    interval={6000}
    withAutoplay={true}
  >
    <div data-src="/souvenangecolored.jpg" />
    <div data-src="/photographe.jpg" />
    <div data-src="/Vannes.jpg" />
  </AutoplaySlider>
);

export const Home = () => {
  const classes = useStyles()
  return (
  <div className={classes.ensemble}>
     <div className={classes.partie3}>
        <div className={classes.slider}>
            {slider}
        </div>
      </div>
      <hr /> 

      <div className={classes.partie2}>
        <Link code="DONATIONS">
         <div className="donations"> 
          <img src="/donate.png" alt="donate" /> 
         </div>
        </Link>
        <Link code="CONTACT">
        <img src="/contact.png" alt="contact" />
        </Link>
        <Link code="APROPOS">
        <img src="/a-propos.png" alt="about" />
        </Link>
      </div>
      <hr /> 

      <div className={classes.partie1}>
      Souvenange offre gratuitement aux parents qui le souhaitent :
      <p></p>
      des photographies de qualité professionnelle de leur bébé décédé, en intervenant à la maternité
      <p></p>
      un service de retouche des photographies existantes
      </div> 
      <hr /> 
      <div className={classes.partie4}>
      <p>« Nous ne photographions pas la mort, nous immortalisons l’amour »</p>
      </div> 

  </div>
  )
}

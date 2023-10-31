import React from 'react';

import { ImageMinha } from '../styles/style';
import Image from '../assets/img/eu.png'
import TextoSobre from '../componets/About/TextoAbout';

function About() {
  
  
  return (
    <>
     
    
    
      <ImageMinha src={Image} alt="Eu lindo para você professor"/>
    

    {/* Importanto o texto */}
      <TextoSobre/>

    </>
  );
}

export default About;
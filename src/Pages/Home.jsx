import React from 'react';
import Header from '../componets/Header/Header';
import SaudeMental from "../assets/img/saudemental.png"
import styled from 'styled-components';


function Home() {
  

  const ResizeImage = styled.img`
  max-width: 100%;
  `;
  
  return (
    <>
        

    <div>
      <ResizeImage src={SaudeMental} alt="Saúde Mental" />
    </div>
    </>
  );
}

export default Home;
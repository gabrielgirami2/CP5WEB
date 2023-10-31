import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, lightTheme, darkTheme, Button } from './styles/style';
import { ThemeProvider } from 'styled-components';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import MentalHealth from './Pages/MentalHealth';
import Header from './componets/Header/Header';



function App() {
  //Criando o useState para o tema
  const [theme, setTheme] = useState('light');
  //Fazendo a função mudar o tema
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
    {/* Trocando os temas */}
    <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
      <Container>
        <Header />
        {/* Botão ao clicar muda o tema */}
        <Button onClick={toggleTheme}>Mode</Button>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mentalhealth' element={<MentalHealth />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>

    
    </>
  );
}

export default App;
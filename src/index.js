import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import NavbarMain from './Navbar/NavbarMain';
import './main.scss';
import { Container, Row } from 'react-bootstrap';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './MainPages/Home';
import Playstation from './MainPages/Playstation';
import Xbox from './MainPages/Xbox';
import PC from './MainPages/PC';
import Nintendo from './MainPages/Nintendo';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem('cartId')) {
      axios.post("http://localhost:3001").then(res => {
        localStorage.setItem('cartId', res.data);
      });
    }
    console.log(localStorage.getItem('cartId'))
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <NavbarMain />
        </Row>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/playstation/:page' element={<Playstation />} />
          <Route path='/xbox/:page' element={<Xbox />} />
          <Route path='/pc/:page' element={<PC />} />
          <Route path='/nintendo/:page' element={<Nintendo />} />
        </Routes>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
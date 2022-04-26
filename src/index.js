import React from 'react';
import ReactDOM from 'react-dom';
import NavbarMain from './Navbar/NavbarMain';
import './main.scss';
import CarouselMain from './Carousel/CarouselMain';
import { Container, Row } from 'react-bootstrap';
import RecentGamesList from './RecentGames/RecentGamesList';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './MainPages/Home';
import Playstation from './MainPages/Playstation';
import Xbox from './MainPages/Xbox';
import PC from './MainPages/PC';
import Nintendo from './MainPages/Nintendo';

const App = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <NavbarMain />
        </Row>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/playstation' element={<Playstation />} />
          <Route path='/xbox' element={<Xbox />} />
          <Route path='/pc' element={<PC />} />
          <Route path='/nintendo' element={<Nintendo />} />
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
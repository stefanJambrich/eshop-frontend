import React from 'react';
import ReactDOM from 'react-dom';
import NavbarMain from './Navbar/NavbarMain';
import './main.scss';
import CarouselMain from './Carousel/CarouselMain';
import { Container, Row } from 'react-bootstrap';
import RecentGamesList from './RecentGames/RecentGamesList';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <NavbarMain />
        </Row>
        <Row>
          <CarouselMain />
        </Row>
        <Row>
          <RecentGamesList />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}

ReactDOM.render(<App /> , document.getElementById('root'));
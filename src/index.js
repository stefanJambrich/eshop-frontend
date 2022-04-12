import React from 'react';
import ReactDOM from 'react-dom';
import NavbarMain from './Navbar/NavbarMain';
import './main.scss';
import CarouselMain from './Carousel/CarouselMain';
import { Container, Row } from 'react-bootstrap';

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
      </Container>
    </>
  );
}

ReactDOM.render(<App /> , document.getElementById('root'));
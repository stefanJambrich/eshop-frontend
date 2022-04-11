import React from 'react';
import ReactDOM from 'react-dom';
import NavbarMain from './Navbar/NavbarMain';
import './main.scss';

const App = () => {
  return (
    <>
      <NavbarMain />
    </>
  );
}

ReactDOM.render(<App /> , document.getElementById('root'));
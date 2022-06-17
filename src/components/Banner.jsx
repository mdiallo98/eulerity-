import React from 'react';
import { Link } from 'react-router-dom';
function Banner({ text }) {
  const bannerStyle = {
    height: '500px',
    backgroundColor: 'aqua',
  };
  return (
    <header
      style={{ width: '100vw', background: 'aqua' }}
      className=" text-danger p-5 hero-container"
    >
      <h1 className="hero-text" style={{ fontFamily: 'cursive' }}>
        {text}
      </h1>
      <Link to="/about">about</Link>
    </header>
  );
}

export default Banner;

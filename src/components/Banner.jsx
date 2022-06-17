import React from 'react';

function Banner() {
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
        Eulerity Pet Gallery
      </h1>
    </header>
  );
}

export default Banner;

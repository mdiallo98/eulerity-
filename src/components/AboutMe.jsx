import React from 'react';
import { Link } from 'react-router-dom';
function AboutMe() {
  return (
    <div>
      <h1 style={{ color: 'black' }}>About</h1>
      <p style={{ color: 'black' }}>
        Hello, I am Mamadou Diallo. I am most described as curious, it's made
        evident when you look at my college course History, i tried to take as
        many diverse courses as i could in order to find my passion. Programing
        took my attention and hasnt given it back ever since. I began learning
        the basics of Programing with C, then learned the basics of OOP with
        Java. Now i am honing my skills with Html, CSS, Javascript, and React.
      </p>
      <Link to="/">Return</Link>
    </div>
  );
}

export default AboutMe;

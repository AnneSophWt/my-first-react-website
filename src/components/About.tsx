// src/components/About.tsx
import React from 'react';
import "./About.css";


const About: React.FC = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src='About.jpg'></img>
      <p>I'm Anne-Sophie, 25 years old living in cologne. I have a bachelor degree in media and marketing management and currently working as a production assistent and in the festival management. In september I'm going to start my master in UX design and hopefully become one in the furute. I started with coding in march and I have a lot of fun with it. I would love to become a frontend developer too.  </p>
    </section>
  );
};

export default About;

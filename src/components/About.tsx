// src/components/About.tsx
import React from 'react';
import "./About.css";
import aboutImage from '../assets/aboutImage.jpg';


const About: React.FC = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src={aboutImage} alt='About Me' className='about-image'></img>
      <p>I'm Anne-Sophie, 25 years old living in cologne. I have a bachelor degree in media and marketing management and currently working as a production assistent and in the festival management. In september I'm going to start my master in UX design and hopefully become one in the furute. I started with coding in march and since then it is one of my favorite hobbys to do, I would love to work in the tech industry! I have many different hobbys, from baking and cooking to reading books/manga, drawing and generally be creative. </p>
    </section>
  );
};

export default About;

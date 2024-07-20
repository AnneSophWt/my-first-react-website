// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
       <About />
       <Projects />
       <Contact />
      </main>
    </div>
  );
};

export default App;

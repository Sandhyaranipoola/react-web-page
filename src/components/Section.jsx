import React from 'react';
import './Section.css';


const Section = () => (
  <section id="hero" className="hero-section">
    <div className="home-section">
      <div className="fixed">
        <div className="flex full-height full-width bg-blue">
        
          <div className="absolute content-wrapper">
            <h1 className="title">OPERATIONAL</h1>
            <h1 className="title">
              <span>COFOUNDER</span>
              <span className="typed-cursor">|</span>
            </h1>
            <p className="description">
              We collaborate with exceptional <span>'<span className="underline">Entrepreneurs</span>'</span> and <span>'<span className="underline">Intrapreneurs</span>'</span> to bring meaningful ideas to reality. We encourage collaboration through validation, talent, resources, and investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Section;

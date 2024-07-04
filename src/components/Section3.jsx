import React from 'react';
import './Section3.css'; 

const Section3 = () => {
  return (
    <section className="section-container">
      <div className="column">
        <div className="content py-8 px-4">
          <h1 className="heading">5+</h1>
          <p className="description">YEARS <span className="block">ENGAGEMENTS</span></p>
        </div>
      </div>

      <div className="column">
        <div className="content py-8 px-4">
          <h1 className="heading">10+</h1>
          <p className="description">IDEATION TO <span className="block">GROWTH</span></p>
        </div>
      </div>

      <div className="column">
        <div className="content py-8 px-4">
          <h1 className="heading">6+</h1>
          <p className="description">GCC'S <span className="block">SPIN-OFF</span></p>
        </div>
      </div>
    </section>
  );
};

export default Section3;

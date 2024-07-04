import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>BUILD - GROW - SCALE</h3>

      <p style={styles.paragraph}>We collaborate with exceptional 'Entrepreneurs' and 'Intrapreneurs' to bring meaningful ideas to reality. We encourage collaboration through validation, talent, resources, and investment. We are the best co-founders and believe in co-creation, which enhances the likelihood of success significantly. Great teams made of world-class talent and ideas clash at Studio. We build capability-capitalTM inherently for high-impact differentiation -The Guild Factor.</p>
      <p style={styles.paragraph}>We are a multidisciplinary team of entrepreneurs, developers, designers, and investors who have built companies from scratch. We believe in an outcome-driven process to test assumptions, eliminate confirmation biases, and operate with passion. We enjoy collaborating with dreamers who have a strong desire to tackle real-world problems and advance humanity.</p>
      </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'justify',
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '1.5em',
    color: 'pink',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.1em',
    color: '#666',
    marginBottom: '15px',
  },
};

export default About;


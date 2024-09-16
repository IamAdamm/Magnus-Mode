import React from 'react';
import '../styles/About.css';
import Tshirt from '../assets/Tshirt.png';

const About = () => {
    return (
      <div className="about-container">
        <div className="about-text">
          <h1>About the Artist</h1>
          <p>
            Welcome to Strife for Peace, the online gallery of Milano, a passionate painter dedicated to capturing the beauty of the world through vibrant colors and expressive brushstrokes.
          </p>
          <p>
            With over 8 years of experience, Milano has developed a unique style that blends realism with abstract elements, creating artworks that are both thought-provoking and visually stunning. Each painting is a reflection of Milanos's deep love for art and the inspiration drawn from nature, people, and the future.
          </p>
          <p>
            Whether you're looking for a piece to complete your home decor or a unique gift, you'll find something special in our collection. All paintings are created with high-quality materials and come with a certificate of authenticity.
          </p>
        </div>
        <div className="about-image">
          <img src={Tshirt} alt="Featured Painting" />
          <figcaption>"Creation" - A featured work by Milano</figcaption>
        </div>
      </div>
    );
  };

export default About

import React from 'react';
import { Link } from 'react-router-dom';
import './cover.css';

const Cover = () => {
  return (
    <>
      <div style={{ display: 'flex', height: '100vh', alignItems: 'stretch' }}>
        <img
          src="https://wallpapers.com/images/hd/gaming-collage-cover-e6t8u59yad2bgiit.jpg"
          alt="Background"
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="container">
        <div className="header">
          <h1>Games</h1>
        </div>
        {/* Rest of your component code */}
      </div>
    </>
  );
};

export default Cover;
// src/FlowerField.js
import React, { useEffect, useState, useRef } from 'react';
import './FlowerField.css';
import music from './music.mp3'; // Import the audio file

const FlowerField = () => {
  const [loaded, setLoaded] = useState(false); // Start as false
  const audioRef = useRef(null);
  const play = () => {
    const audio = audioRef.current;
    if (audio) {    
      audio.play();
      setLoaded(true);
    }
  };

  return (
    <>
  
  <audio autoPlay ref={audioRef} controls src={music} /> 
    <div className={loaded ? "" : "not-loaded"}>
        <div>
            
        </div>
      <div className="night" >   
      <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}
        >
       <button
        onClick={play}
        className='play'
        style={{
        marginBottom: '10px',
        backgroundColor: '#f0f0f0', // Default background color
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for background, scale, and shadow
        }}
        onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgb(135, 206, 235)';
        e.currentTarget.style.transform = 'scale(1.05)'; // Slightly scale up
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(135, 206, 235, 0.5)'; // Add shadow for lighting effect
        }}
        onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#f0f0f0';
        e.currentTarget.style.transform = 'scale(1)'; // Reset scale
        e.currentTarget.style.boxShadow = 'none'; // Remove shadow
        }}
    >
            Yes
        </button>
        </div>
      </div>
      
      <div className="flowers">
       
        {Array.from({ length: 3 }, (_, i) => (
          <div className={`flower flower--${i + 1}`} key={i}>
            <div className={`flower__leafs flower__leafs--${i + 1}`}>
              {Array.from({ length: 4 }, (_, j) => (
                <div className={`flower__leaf flower__leaf--${j + 1}`} key={j}></div>
              ))}
              <div className="flower__white-circle"></div>
              {Array.from({ length: 8 }, (_, j) => (
                <div className={`flower__light flower__light--${j + 1}`} key={j}></div>
              ))}
            </div>
            <div className="flower__line">
              {Array.from({ length: i === 0 ? 6 : 4 }, (_, j) => (
                <div className={`flower__line__leaf flower__line__leaf--${j + 1}`} key={j}></div>
              ))}
            </div>
          </div>
        ))}

        <div className="grow-ans" style={{ '--d': '1.2s' }}>
          <div className="flower__g-long">
            <div className="flower__g-long__top"></div>
            <div className="flower__g-long__bottom"></div>
          </div>
        </div>

        {Array.from({ length: 2 }, (_, i) => (
          <div className="growing-grass" key={i}>
            <div className={`flower__grass flower__grass--${i + 1}`}>
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              {Array.from({ length: 8 }, (_, j) => (
                <div className={`flower__grass__leaf flower__grass__leaf--${j + 1}`} key={j}></div>
              ))}
              <div className="flower__grass__overlay"></div>
            </div>
          </div>
        ))}

        {Array.from({ length: 4 }, (_, i) => (
          <div className="grow-ans" style={{ '--d': `${2.4 + i * 0.4}s` }} key={i}>
            <div className={`flower__g-right flower__g-right--${i + 1}`}>
              <div className="leaf"></div>
            </div>
          </div>
        ))}

        <div className="grow-ans" style={{ '--d': '2.8s' }}>
          <div className="flower__g-front">
            {Array.from({ length: 8 }, (_, i) => (
              <div className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${i + 1}`} key={i}>
                <div className="flower__g-front__leaf"></div>
              </div>
            ))}
            <div className="flower__g-front__line"></div>
          </div>
        </div>

        {Array.from({ length: 8 }, (_, i) => (
          <div className={`long-g long-g--${i}`} key={i}>
            {Array.from({ length: 4 }, (_, j) => (
              <div className="grow-ans" style={{ '--d': `${4 + j * 0.2 + i * 0.2}s` }} key={j}>
                <div className={`leaf leaf--${j}`}></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default FlowerField;

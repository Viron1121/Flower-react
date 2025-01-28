// src/FlowerField.js
import React, { useEffect, useState, useRef } from 'react';
import './FlowerField.css';
import music from './music.mp3'; // Import the audio file

const FlowerField = () => {
  const [loaded, setLoaded] = useState(false); // Start as false
  const audioRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const [displayText, setDisplayText] = useState('');
  const fullText = 'I have something for you...'; // Type your text here

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length - 1) {
        setDisplayText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, []);



  const [displayTextMessage, setDisplayTextMessage] = useState('');
  const message = ' Happy Anniversary to my girlfriend, mommy, and Disney princess! Thank you for your love I have something for you really in my heart.'; // Type your message here

  useEffect(() => {
    const typingIntervalRef = { current: null }; // Using an object to hold the reference

    const startTyping = () => {
      let index = 0;
      typingIntervalRef.current = setInterval(() => {
        if (index < message.length -1) {
          setDisplayTextMessage((prev) => prev + message[index]);
          index++;
        } else {
          clearInterval(typingIntervalRef.current);
          // Set a timeout to clear the message after typing is complete
          setTimeout(() => {
            setDisplayTextMessage(''); // Clear the message
          }, 3000); // Delay before disappearing (3000ms = 3 seconds)
        }
      }, 100); // Typing speed
    };

    const timeout = setTimeout(() => {
      startTyping();
    }, 6000); // Initial delay before starting typing

    return () => {
      clearTimeout(timeout); // Cleanup the timeout if the component unmounts
      clearInterval(typingIntervalRef.current); // Clear the typing interval on unmount
    };
  }, []);

  const play = () => {
    setIsVisible(false); 
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
         
         {isVisible ? (
          <div className='container'>
            <h1>{displayText}</h1>
            <button
              onClick={play}
              className='play'
              style={{
                marginBottom: '10px',
                backgroundColor: '#f0f0f0',
                border: 'none',
                borderRadius: '5px',
                padding: '10px 20px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease, visibility 0.3s ease',
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(135, 206, 235)';
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(135, 206, 235, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f0f0f0';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Open
            </button>
          </div>
        ) : (
          <div className='message'>
            <h1>{displayTextMessage}</h1>
          </div>
        )}
          
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

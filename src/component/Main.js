// import React from 'react'

// function Main() {
//   return (
//     <div className='Super'>
//         <h1>Super Over</h1>
//       <div className='SuperMain'>
//         <p>Quiz your way to glary</p>
//         <button>Start Quiz</button>
//       </div>
//     </div>
//   )
// }

// export default Main

import React, { useState, useEffect } from 'react';
// import Question from './Question/Question';

import { Navigate, useNavigate } from 'react-router-dom';

import './Main.css'


function Main() {
  const Navigate = useNavigate()

  const CountdownTimer = ({ seconds, onComplete }) => {
    const [count, setCount] = useState(seconds);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
  
      if (count === 0) {
        clearInterval(timer);
        onComplete();
      }
  
      return () => clearInterval(timer);
    }, [count, onComplete]);
  
    return <div style={{ fontSize: '3em', fontWeight: 'bold', margin: '20px' }}>{count}</div>;
  };
  const [startCountdown, setStartCountdown] = useState(false);

  const handleCountdownComplete = () => {
    console.log('Countdown complete!');
    Navigate('/question')
    
  };

  return (
    <>
    <div className='Super'>
      <div className='superMain'>
       <h1>Super Over</h1>     
        
       <p>Quiz your way to glary</p>
      
     
  
    {/* <div className='countdown'> */}
      {!startCountdown ? (
        <button onClick={() => setStartCountdown(true)}>Start Quiz</button>
      ) : (
        <CountdownTimer seconds={3} onComplete={handleCountdownComplete} />
      )}
    {/* </div> */}
    </div>
    </div>
    {/* <Question/> */}
    </>
  );
};

export default Main;


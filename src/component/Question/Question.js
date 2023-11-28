


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Question.css'

function Question() {
  const [allData, setAllData] = useState([]);
const [counter , setCounter] = useState(15);
const [currentQuestion , setCurrentQuestion] = useState(0)
const[userAnswer , setUserAnswer] = useState()
  
  useEffect(() => {
    axios.get('http://localhost:4000/quiz')
    .then((result) => {
      setAllData(result.data);
    });
  }, []);


 //........................................for next question ...............................................//
  const nextQuestion=()=>{

    setUserAnswer(null);
if(currentQuestion < allData.length-1){
  setCurrentQuestion(currentQuestion+1)
}
  }
//.........................................//for previous question .....................................
  const previousQuestion = ()=>{

    setUserAnswer(null);
    if (currentQuestion > 0){
      setCurrentQuestion(currentQuestion-1)
    }
  }



  //..............................counter..........................................

  useEffect(()=>{

    const interval = setInterval(()=>{
      if(counter>= 1){
        setCounter((prevcounter)=> prevcounter - 1)
      }
      if(counter === 0 ){
        if(currentQuestion < allData.length - 1){
          setCurrentQuestion((prevQuestion)=>prevQuestion+1);
          setCounter(15)
        }
      }
    },1000)
    return ()=> clearInterval(interval)

  },
  
  
  [counter, currentQuestion , allData])

///////....................................for correct Answer.....................................//

// const checkAnswer = (selectedOption)=>{
//   const correctAnswer =allData[currentQuestion]?.answer;

//   if(selectedOption === correctAnswer){
//     setUserAnswer('correct')

//   }
//   else{
//     setUserAnswer('wrongAnswer')
//   }
// }
// console.log(userAnswer)


const checkAnswer = (selectedOption) => {
  const correctAnswer = allData[currentQuestion]?.answer;
console.log(correctAnswer)
  if (selectedOption === correctAnswer) {
    setUserAnswer('correct');
  } else {
    setUserAnswer('Wrong Answer');
  console.log(checkAnswer)

  }
};  
// console.log(checkAnswer)

  return (
 

<div>
      <div>
        <h1>{counter}</h1>
        <h1>{allData[currentQuestion]?.question}</h1>
        <button  className={userAnswer === 'correct' ? 'correct' : userAnswer === 'Wrong Answer' ? 'wrong' : ''} onClick={() => checkAnswer(allData[currentQuestion]?.option[0])}>{allData[currentQuestion]?.option[0]} 
        </button><br />
        <button   className={userAnswer === 'correct' ? 'correct' : userAnswer === 'Wrong Answer' ? 'wrong' : ''} onClick={() => checkAnswer(allData[currentQuestion]?.option[1])}>{allData[currentQuestion]?.option[1]} 
        </button><br />
        <button className={userAnswer === 'correct' ? 'correct' : userAnswer === 'Wrong Answer' ? 'wrong' : ''} onClick={() => checkAnswer(allData[currentQuestion]?.option[2])}>{allData[currentQuestion]?.option[2]}</button><br />

        <button   className={userAnswer === 'correct' ? 'correct' : userAnswer === 'Wrong Answer' ? 'wrong' : ''} onClick={() => checkAnswer(allData[currentQuestion]?.option[3])}>{allData[currentQuestion]?.option[3]}</button><br />



<p>{userAnswer}</p>
        <button onClick={previousQuestion}>Previous</button>
        <button onClick={nextQuestion}>Next</button>


        
      </div>
    </div>
  )

}

export default Question;

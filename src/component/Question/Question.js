// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// function Question() {

//     const [AllData, setAllData] = useState([])
//     const [question, setQuestion] = useState('')
//     const [option, setOption] = useState('')
// const [time , setTime] = useState(0)



//     // useEffect(()=>{
//     //     axios.get('http://localhost:4000/data',{question,option} )
//     //     .then((result)=>{
//     //         setAllData(result.data)
//     //         console.log('hello')
//     //     })
//     // },[question,option])
//     useEffect(() => {
//         axios.get('http://localhost:4000/quiz')
//             .then((result) => {
//                 setAllData(result.data)
//                 console.log(result)
//             })


            
//     },[])

//     useEffect(()=>{
//         if(time <AllData.length){
//             const timeoutId =setTimeout(()=>{
//             setTime(time+1)
//             },15000)
//             return clearTimeout(timeoutId)
//         }  
//     },[time])

//     return (
//         <div>



//             {
//                 AllData.map((data, index) => {
//                     return (
//                         <div key={index}>
//                             <h1 onClick={() => setQuestion(data.question)}>{data.question}</h1>
//                             {/* <option > */}
//                                 <ul>
//                                     <li onClick={() => setOption}>{data.option[0]}</li>
//                                     <li onClick={() => setOption}>{data.option[1]}</li>
//                                     <li onClick={() => setOption}>{data.option[2]}</li>
//                                     <li onClick={() => setOption}>{data.option[3]}</li>
//                                 </ul>
//                             {/* </option> */}
//                         </div>
//                     )
//                 })
//             }

//         </div>
//     )
// }

// export default Question


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Question() {
  const [allData, setAllData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [currentOptions, setCurrentOptions] = useState([]);
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    axios.get('http://localhost:4000/quiz').then((result) => {
      setAllData(result.data);
    });
  }, []);

  useEffect(() => {
    if (time < allData.length) {
      const timeoutId = setTimeout(() => {
        setCurrentQuestion(allData[time].question);
        setCurrentOptions(allData[time].options);
        setTime(time + 1);
        setTimer(15);
      }, 15000);

      // Update timer every second
      const timerIntervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      // Cleanup function to clear the timeout and interval when the component unmounts or when the next question is shown
      return () => {
        clearTimeout(timeoutId);
        clearInterval(timerIntervalId);
      };
    }
  }, [time, allData]);

  

  return (
    <div>
      {/* {All && (
        <div>
          <h1>{currentQuestion}</h1>
          <p>Time remaining: {timer}s</p>
          <ul>
            {currentOptions.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )} */}

{
    allData.map((data,index)=>{
        return(
            <div key={index}>
                           <h1 onClick={() => setCurrentQuestion(data.question)}>{data.question}</h1>                         {/* <option > */}
                              <ul>
                                      {/* <li onClick={() => setCurrentOptions}>{data.option[0]}</li>                                    <li onClick={() => setOption}>{data.option[1]}</li> */}
                                     <li onClick={() => setCurrentOptions}>{data.option[0]}</li>
                               <li onClick={() => setCurrentOptions}>{data.option[1]}</li>
                               <li onClick={() => setCurrentOptions}>{data.option[2]}</li>
                               <li onClick={() => setCurrentOptions}>{data.option[3]}</li>
                               
                              </ul>
           
                        </div>
        )
    })
}

      </div>

)
}

export default Question;

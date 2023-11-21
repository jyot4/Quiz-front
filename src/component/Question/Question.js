import React, { useState,useEffect } from 'react'
import axios from 'axios'

function Question() {
    
const [AllData , setAllData] = useState([])



useEffect(()=>{
    axios.post('http://localhost:4000/question' )
    .then((result)=>{
        setAllData(result.data)
    })
},[])
    

  return (
    <div>



        {
            AllData.map((data ,index)=>{
return(
    <div>
        <p>{data.question}</p>
        <button>{data.option}</button>
    </div>
)
            })
        }
   
    </div>
  )
}

export default Question

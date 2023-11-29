import React, {useEffect} from 'react'

function Option() {
    useEffect(() => {
        axios.get('http://localhost:4000/quiz')
        .then((result) => {
          setAllData(result.data);
        });
      }, []);
    
    
  return (
    <div>
      
    </div>
  )
}

export default Option

import React from 'react'


const Suggestions = (props) => {
// console.log(props.results)

  const options = props.results.map(r => (

 
    <span key={r._id}>
      {r.bizname}
    
      
    </span>
 

  ))
  return <small>{options}</small>
}

export default Suggestions
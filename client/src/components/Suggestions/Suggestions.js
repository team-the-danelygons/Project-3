import React from 'react'
// import Search from "../Search/Search"

const Suggestions = (props) => {
// console.log(props.results)

  const options = props.results.map(r => (

 
    <li key={r._id}>
      {r.bizname}
    </li>
 

  ))
  return <ul>{options}</ul>
}

export default Suggestions
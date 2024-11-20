import React from 'react'

const Addtodo = ({inp, add}) => {

// console.log(props);


  return (
    <div>
        <input onChange={(e)=>inp(e.target.value)} type="text" />
        <button onClick={add}>Addtodo</button>
    </div>
  )
}

export default Addtodo
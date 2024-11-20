import React from 'react'

const Distodo = ({allinp}) => {
  const deel = () =>{
    allinp.splice(0, 1)
  }
  return (
    <div>{allinp.map((el)=>(
     <>
      <h1>{el}</h1>
      <button onClick={deel}>Delete</button>
     </>
    ))
    }</div>
  )
}

export default Distodo
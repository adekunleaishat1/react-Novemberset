import React from 'react'
import './App.css'

const App = () => {
  const Name = "Temmy"
  const mysty ={
    color:"blue",
     backgroundColor:"black",
     header:{
      fontFamily:"san-serif",
      fontWeight:700,
      color:"yellow",
      fontSize:"28px"
     }
  }
  return (
    <>
      <div style={{color:"red", backgroundColor:"black"}}>{Name}</div>
       <h1 style={mysty}>{Math.random()}</h1>
       <p style={mysty.header}>Internal styling</p>
       <button className='btn btn-dark'>click</button>
    </>
   
  )
}

export default App
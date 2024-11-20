import React ,{useState}from 'react'
import './App.css'
import Addtodo from './Addtodo'
import Distodo from './Distodo'
import Navbar from './Navbar'

const App = () => {
  const [inp,setinp] = useState("")
  const [allinp, setallinp ] = useState([])
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
  console.log(inp);
  
  const addtodo = () =>{
    console.log(inp);
    setallinp([...allinp, inp])
    console.log(allinp);
    
  }

  return (
    <>
    {/* <Navbar/> */}
      <div style={{color:"red", backgroundColor:"black"}}>{Name}</div>
       <h1 style={mysty}>{Math.random()}</h1>
       <p style={mysty.header}>Internal styling</p>
       <button className='btn btn-dark'>click</button>
       <Addtodo inp={setinp} add={addtodo}/>
      <Distodo allinp={allinp}/>
    </>
   
  )
}

export default App
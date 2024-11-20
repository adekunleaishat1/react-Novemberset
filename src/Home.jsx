import { Bs0SquareFill,Bs3CircleFill } from "react-icons/bs";
import Firstimg from "./Images/customer-support.png"
import { useState } from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";


const  Home = () => { 
    const [name, setname] = useState("lolade")
    const [input, setinput] = useState("")
    const [input2, setinput2] = useState("")
    const [users, setusers] = useState({
        name:"tolu", class:"React"
    })
    const [alluser, setalluser] = useState([])
    let username = "Tolani"

    const clickme = (el) =>{
     const userdetail = {
        username:input,
        email:input2
     }
     setalluser([...alluser,userdetail])
     console.log(alluser);
     
    }
    console.log(input);
    
    const handleinputchange = (e) =>{
      setinput2(e.target.value)
      
    }

  const Click = () =>{
    alert("working")
  }

    return(
        <div>
          <Navbar/>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"1200px"}} >
            <div style={{backgroundColor:"blue", height:"900px", width:"200px"}}>
              <Link className="text-light" to="/home/todo">Todo</Link>
              <Link className="text-light"   to="">Profile</Link>
              <Link  className="text-light"  to="">About</Link>
              <Link className="text-light"  to="">Resources</Link>
            </div>
            <div style={{backgroundColor:"white", height:"900px", width:"800px"}}>
                <Outlet/>

                <button onClick={()=>clickme(67)}>CLick</button>
            </div>
          </div>
            {/* <h1 className="text-[30px] text-[#fff] bg-gray-500">WELCOME TO REACT CLASS</h1>
            <h1>{username}</h1>
            <p>{name}</p>
            <p>{users.class}</p>
            <input onChange={(e)=>setinput(e.target.value)} type="text" />

            <input onChange={(e)=>handleinputchange(e)} type="text" /> */}
           
            {/* <Bs0SquareFill />
            <Bs3CircleFill />
           <img src={Firstimg} alt="" />
           <img src={require("./Images/customer-support.png")} alt="" /> */}
        </div>
    )
}







export default Home
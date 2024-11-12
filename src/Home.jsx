import { Bs0SquareFill,Bs3CircleFill } from "react-icons/bs";
import Firstimg from "./Images/customer-support.png"
import { useState } from "react";


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



    return(
        <div>
            <h1 className="text-[30px] text-[#fff] bg-gray-500">WELCOME TO REACT CLASS</h1>
            <h1>{username}</h1>
            <p>{name}</p>
            <p>{users.class}</p>
            <input onChange={(e)=>setinput(e.target.value)} type="text" />

            <input onChange={(e)=>handleinputchange(e)} type="text" />


            <button onClick={()=>clickme(67)}>CLick</button>
            {/* <Bs0SquareFill />
            <Bs3CircleFill />
           <img src={Firstimg} alt="" />
           <img src={require("./Images/customer-support.png")} alt="" /> */}
        </div>
    )
}







export default Home
import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Signup = () => {
   const [Formdetails, setFormdetails] = useState({
      firstname:"",
      lastname:"",
      email:"",
      password:""
   })
   const [isloading, setisloading] = useState(false)
   const [alluser, setalluser] = useState([])
   useEffect(() => {
    axios.get("http://localhost:3456/users")
    .then((res)=>{
      console.log(res);
      setalluser(res.data)
    }).catch((err)=>{
      console.log(err);
      
    })
   }, [isloading])
   

  const signup = () =>{
    console.log(Formdetails);
    setisloading(true)
    try {
     const existuser = alluser.find((user)=> user.email == Formdetails.email)
     console.log(existuser);
     if (existuser) {
      alert("User alredy exist")
      setisloading(false)
     }else{
        axios.post("http://localhost:3456/users",Formdetails)
      .then((res)=>{
          console.log(res);
          setisloading(false)
          
      }).catch((err)=>{
        setisloading(false)
          console.log(err);
          
      })
     }
     
     
    } catch (error) {
      console.log(error);
      
    }
  
  }

  return (
    <>
       <div className='w-50 mx-auto px-3 py-3 shadow-sm'>
        <div className='form-group mt-3'>
          <label htmlFor="">Firstname</label>
          <input onChange={(e)=>setFormdetails({ ...Formdetails, firstname:e.target.value})} className='form-control' type="text" />
        </div>
        <div className='form-group mt-3'>
          <label htmlFor="">Lastname</label>
          <input onChange={(e)=>setFormdetails({...Formdetails, lastname:e.target.value})} className='form-control' type="text" />
        </div>
        <div className='form-group mt-3'>
          <label htmlFor="">Email</label>
          <input onChange={(e)=>setFormdetails({...Formdetails, email:e.target.value})} className='form-control' type="email" />
        </div>
        <div className='form-group mt-3'>
          <label htmlFor="">Password</label>
          <input onChange={(e)=>setFormdetails({...Formdetails, password:e.target.value})} className='form-control' type="password" />
        </div>
        <button disabled={isloading} onClick={signup} className='btn btn-primary'>{isloading? "Loading..." : "Register"}</button>
       </div>  
    </>
  )
}

export default Signup

// create a product
// create an endpiont inside your json-server
// Display all product on the screen
// View one product


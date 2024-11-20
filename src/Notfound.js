import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    const Gohome = () =>{
      navigate("/")
    }
  return (
    <div>
       <div className='mx-auto w-50 px-3 py-3 shadow-sm '>
       <h1>This is not the page You are looking for </h1>
       <button onClick={Gohome} className='btn btn-danger'>Go Home</button>
       </div>
    </div>
  )
}

export default Notfound
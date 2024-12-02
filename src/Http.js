import React,{useState, useEffect, startTransition} from 'react'
import axios from 'axios'

const Http = () => {
    const [onedata, setonedata] = useState({})
    const [data, setalldata] = useState([])
    const [change, setchange ] = useState(false)
    const [page, setpage] = useState(1)
    const [perpage, setperpage] = useState(20)
    const [currentpage, setcurrentpage] = useState(1)
    let totalpage = Math.ceil(data.length / perpage)
    console.log(totalpage);
    
    // fetch("https://jsonplaceholder.typicode.com/todos")
    // .then(res=>res.json())
    // .then((data)=>setalldata(data)
    // )
    useEffect(() => {
    
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then((res)=>{
            console.log(res.data);
            setalldata(res.data)
        }).catch((err)=>{
            console.log(err);
            
        })
     
    }, [page])
    
    
    const endindex = currentpage * perpage
    const startindex = endindex - perpage
    const newdata = data.slice(startindex, endindex)
    console.log(newdata);
   
    const show = () =>{
        setchange(!change) 
    }
  
  const next =()=>{
     setcurrentpage((prev)=> prev < totalpage ? prev + 1 : prev = 1)
  }

  const prev =()=>{
    setcurrentpage((prev)=> prev > 1 ? prev - 1 : prev = 1)
 }
    
  return (
    <>
      {newdata.map((el, index)=>
        
        (
          <>
          <div key={index} style={{display:"flex",justifyContent:"flex-start", alignItems:"center",gap:"10px"}}>
          <h1>{el.id}</h1>
          <p>{el.title} </p>
          
          </div>
          </>
        )
      )}
        <button onClick={next}>next</button>
        <button onClick={prev}>prev</button>
      {/* <button onClick={()=>setpage(page + 1)}>next</button> */}

      <button onClick={show}>Show</button>
    </>
  )
}

export default Http
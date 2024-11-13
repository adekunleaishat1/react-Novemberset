import React,{useState} from 'react'

const Todo = () => {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [alltodo, setalltodo] = useState([])
    const [index, setindex] = useState(0)
    const [onetodo, setonetodo] = useState({})

    const Addtodo = () =>{
      console.log(title, content);
      let todoobj = {
        title,
        content
      }
      setalltodo([...alltodo, todoobj])
      console.log(alltodo);
      
    }
    // {conditional expression ? true expression : false expression}

    const deletetodo = (i) =>{
      console.log(i);
     alltodo.splice(i, 1)
      setalltodo([...alltodo])
    }
    const edittodo = (i) =>{
      setindex(i)  
     console.log(alltodo[i] );
     setonetodo(alltodo[i])
     
    }

    const updatetodo = () =>{
        alltodo[index] = onetodo
        setalltodo([...alltodo])
    }
  return (
    <div> 
        <div className='w-50 mx-auto shadow px-3 py-3'>
        <input onChange={(e)=>settitle(e.target.value)} className='form-control mt-3' type="text" placeholder='Title' />
        <input onChange={(e)=>setcontent(e.target.value)} className='form-control mt-3' type="text" placeholder='Content' />
        <button onClick={Addtodo}>Addtodo</button>
        </div> 
        <div className='w-75 mx-auto shadow px-3 py-3'>
        {alltodo.length == 0 ? "No currently does not have any todo" : alltodo.map((todo, index)=>(
            <>
            <div>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
                <button onClick={()=>deletetodo(index)} className='btn btn-danger'>Delete</button>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>edittodo(index)}>Edit</button>
            </div>
            </> 
        ))}
        </div>

   



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input value={onetodo.title} onChange={(e)=>setonetodo({...onetodo, title:e.target.value})} className='form-control mt-3' type="text" placeholder='Title' />
      <input value={onetodo.content} onChange={(e)=>setonetodo({...onetodo, content:e.target.value})} className='form-control mt-3' type="text" placeholder='Content' />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={updatetodo} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
       
    </div>
  )
}

export default Todo
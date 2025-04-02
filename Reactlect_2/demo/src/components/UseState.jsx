import React, { useState } from 'react'


const UseState = () => {
    const [count , setCount]= useState(0)
    const [a , setA] = useState(10)
    const [title , setTitle] =useState("hello ")
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h1>{a}</h1>
      <button onClick={()=>setA(a+1)}>Add</button>
      <h1>{title}</h1>
      <button onClick={()=>setTitle("Jerry here..")}>Login</button>
    </div>
  )
}

export default UseState

import React, { useState } from 'react'
import axios from "axios"

function Create() {

  const [task, setTask] = useState();

  const handleAdd = () => {
    // pass the database to the server
    axios.post('http://localhost:3000/add', {task})
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err));    
  }
  return (
    <div className='inputDiv'>
      <input className='input' 
      type="text" onChange={(e) => setTask(e.target.value)} />
      <button className='Button' type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
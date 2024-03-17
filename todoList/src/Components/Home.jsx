import React, { useEffect, useState }
  from 'react'
import { BsCircleFill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

import Create from './Create'
import axios from 'axios';

function Home() {

  const [todos, setTodos] = useState([]);

  // Using the useEffect hook to get all the task[here get route configured]
  useEffect(() => {

    axios.get("http://localhost:3000/get", { todos })
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));

  }, [todos])

  const handleOnComplete = (id) => {
    axios.put("http://localhost:3000/update/" + id)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err));
  }

  const handleOnDelete = (id) => {
    axios.delete("http://localhost:3000/delete/" + id)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err));
  }


  return (
    <>
      <div className='mainDiv'>
        <h1>To DO List</h1>
        <Create />

        {
          todos.length === 0
            ?
            <div><h2>No List To Complete</h2></div>
            :
            todos.map(todo => (
              <div className='listItems'>
                <div onClick={() => handleOnComplete(todo._id)} className='tickMark'>
                  {
                    todo.done ? <FaCircleCheck /> :
                      <BsCircleFill className="icon" />
                  }

                  <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                </div>
                <div onClick={() => handleOnDelete(todo._id)}>
                  <FaRegTrashAlt />
                </div>
              </div>
            ))
        }

      </div>
    </>
  )
}

export default Home
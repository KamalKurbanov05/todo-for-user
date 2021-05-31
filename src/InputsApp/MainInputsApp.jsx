import React, {useState} from 'react';
import "./MainInputsApp.css"

 export default  function MainInputs(props){
  const [heading, setHeading] = useState("")
  const [task, setTask] = useState("")

  let dataHeading = (el) => {
    let heading = el.target.value;
    setHeading(heading);
    console.log("heading" , heading)
  }

  let dataTask = (el) => {
    let task = el.target.value;
    setTask(task);
    console.log("task", task)
  }

  let createTask = () => {
    const date = new Date();
    const objTask = {
      id: Date.now(),
      heading: heading,
      task: task,
      done: false,
      time: `${date.getHours()}: ${date.getMinutes().toString().length === 1? 0 + date.getMinutes().toString(): date.getMinutes().toString()}`,
      date: `${date.getDate()}.${(date.getMonth() + 1).toString().length ===1? 0 + (date.getMonth() + 1).toString():(date.getMonth() + 1).toString()}.${date.getFullYear()}`

    }


  props.putHolderTodo(props.holderTodo, objTask);

  setHeading("");
  setTask("");
  
  }
    return(
        <div className="block">
            <input
              className="inputHeading" 
              onChange={dataHeading}
              placeholder="Описание"
              type="text"
              value={heading}
              />
            <div className="inputsBlockTask">
              <textarea
                disabled={heading.length > 3 ? false: true}
                style={heading.length > 3 ? {cursor: 'pointer'}: {cursor: 'no-drop'}}
                className ="inputTask"
                onChange={dataTask}
                placeholder="Введите задачу"
                type="text"
                value={task}
              />
              
            <button 
              disabled={heading.length > 3 ? false: true}
              style={heading.length > 3 ? {cursor: 'pointer' }: {cursor: 'no-drop', backgroundColor: '#FFCA86'}}
              className="inputBtn"
              onClick={createTask}>
               Создать 
               </button>
            </div>
        </div>
        )
}
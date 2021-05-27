import React, {useState} from "react";
import Card from "./CardTask";


export default function ListTask(props) { 
  const [idForDelete, setIdForDelete] = useState(0);
  const [IdForStateDone, setIdForStateDone] = useState(0);
  console.log('aaaaaarrrr' , props);
  let listTodo = props.holderFilter.length !== 0? props.holderFilter.map(val => val) : props.holderTodo.map(val => val);

  
  if (idForDelete !== 0) {
    let newListTodoAfterDel = props.holderTodo.filter(todo => todo.id !== idForDelete);
    let filterNewListTodoAfterDel = props.holderFilter.filter(todo => todo.id !== idForDelete);
    props.changeTaskFilterHolder(filterNewListTodoAfterDel);
    props.changeHolderTodoForUser(newListTodoAfterDel);
    setIdForDelete(0);
  }

  if (IdForStateDone !== 0) {
      let newListTodo = props.holderTodo.map(
        todo => {
      let todoCopy = Object.assign({}, todo);
      if (todoCopy.id === IdForStateDone) {
        todoCopy.done ? todoCopy.done = false: todoCopy.done = true;
        return todoCopy;
      } else {
        return todoCopy;
      } 
    }
    )
    if (props.holderFilter !== 0) {
      let newFilterTodo = props.holderFilter.map(
        todo => {
          let todoCopy = Object.assign({}, todo);
        if (todoCopy.id === IdForStateDone) {
          todoCopy.done ? todoCopy.done = false: todoCopy.done = true;
          return todoCopy;
        } else {
          return todoCopy;
        }

        }
      )
      props.changeTaskFilterHolder(newFilterTodo) 
    }
    props.changeHolderTodoForUser(newListTodo);
    setIdForStateDone(0) 
  } 


  let getIdForDeleteEl = (todoId) => {
    setIdForDelete(todoId)
  }

  let getIdForDoneUpdate = (todoId) => {
    setIdForStateDone(todoId)
  }
 
    return(
          <ul>
            {listTodo.map((todo, index) => <Card getIdForDoneUpdate={getIdForDoneUpdate} getIdForDeleteEl={getIdForDeleteEl}  todo={todo} index={index}/>)} 
          </ul>
        )
}
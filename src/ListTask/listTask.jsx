import React from "react";
import Card from "./CardTask";


export default function ListTask(props) { 
  
  let listTodo = props.holderFilter.length !== 0? props.holderFilter.map(val => val) : props.holderTodo.map(val => val);

 
    return(
          <ol>
            {listTodo.map((todo, index) => 
            <Card 
            holderTodo={props.holderTodo}
            holderFilter={props.holderFilter}
            changeTaskFilterHolder={props.changeTaskFilterHolder}
            changeHolderTodoForUser={props.changeHolderTodoForUser}
            todo={todo} key={index}
            />
            )
            } 
          </ol>
        )
}
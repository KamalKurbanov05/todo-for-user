import React, { useState } from "react";
import MainInputs from "./InputsApp/MainInputsApp";
import Statistics from "./ContentApp/StatisticContent";
import DeleteHighlight from "./BtnDeleteHighlight/DeleteAndHighlightAll";
import ListTask from "./ListTask/listTask";
import Filter from "./FilterComponents/Filter";
import "./Todo.css"



export default function Todo() {
  const [holderTodo, setHolderTodo] = useState([]);
  const [holderFilter, setHolderFilter] = useState([]);
  
  let putHolderTodo = (holder, todo) => {
    let newHolder = holder.concat([todo]);
    setHolderTodo(newHolder);
  }

  let holderHighlightAllAndDelete = (holderTodo, holderFilterTodo ) => {
    setHolderTodo(holderTodo);
    setHolderFilter(holderFilterTodo);
  }

  let changeHolderTodoForUser = (listAfterChangeHolderTodo) => {
    console.log('мы сейчас в Todo');
    setHolderTodo(listAfterChangeHolderTodo);
  }

  let changeTaskFilterHolder = (listFilter) => {
    setHolderFilter(listFilter);
  }

  return (
          <div className={"blockMain"}>
              <MainInputs holderTodo={holderTodo} putHolderTodo={putHolderTodo}/>
              <DeleteHighlight holderTodo={holderTodo} holderHighlightAllAndDelete={holderHighlightAllAndDelete} />
              <Statistics holderTodo={holderTodo}/>
              <ListTask holderTodo={holderTodo} holderFilter={holderFilter} changeHolderTodoForUser={changeHolderTodoForUser} changeTaskFilterHolder={changeTaskFilterHolder}/>
              <Filter holderFilter={holderFilter} holderTodo={holderTodo} changeTaskFilterHolder={changeTaskFilterHolder}/>
            </div>
           )
}
 

import React, { useState } from "react";
import MainInputs from "./components/MainInputsApp/MainInputsApp";
import Statistics from "./components/StatisticContent/StatisticContent";
import DeleteHighlight from "./components/DeleteAndHighlightAll/DeleteAndHighlightAll";
import ListTask from "./components/ListTask/ListTask";
import Filter from "./components/FilterComponents/Filter";
import "./todo.css"

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
 

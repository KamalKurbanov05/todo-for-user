import React, { useState } from "react";
import MainInputs from "./InputsApp/MainInputsApp";
import Statistics from "./ContentApp/StatisticContent";
import DeleteAdnHighlightAll from "./BtnDeleteHighlight/DeleteAdnHighlightAll";
import ListTask from "./ListTask/listTask";
import FilterByName from "./FilterList/FilterByName";
import FilterByDone from "./FilterList/FIlterByDoneTask";
import "./Todo.css"


export default function Todo() {
  const [holderTodo, setHolderTodo] = useState([]);
  const [holderFilter, setHolderFilter] = useState([]);
  
  let putHolderTodo = (holder, todo) => {
    let newHolder = holder.concat([todo]);
    setHolderTodo(newHolder);
  }

  let holderHiglightAllAndDelete = (holder) => {
    setHolderTodo(holder); 
  }

  let changeHolderTodoForUser = (listAfterChange) => {
    setHolderTodo(listAfterChange);
  }
  
  let changeTaskFilterHolder = (listFilter) => {
    setHolderFilter(listFilter);
  }
 

  return (
          <div className={"blockMain"}>
              <MainInputs holderTodo={holderTodo} putHolderTodo={putHolderTodo}/>
              <DeleteAdnHighlightAll holderTodo={holderTodo} holderHiglightAllAndDelete={holderHiglightAllAndDelete} />
              <Statistics holderTodo={holderTodo}/>
              <ListTask holderTodo={holderTodo} holderFilter={holderFilter} changeHolderTodoForUser={changeHolderTodoForUser} changeTaskFilterHolder={changeTaskFilterHolder}/>
              <FilterByName holderTodo={holderTodo} changeTaskFilterHolder={changeTaskFilterHolder}/>
              <FilterByDone changeTaskFilterHolder={changeTaskFilterHolder} holderTodo={holderTodo} holderFilter={holderFilter}/>
            </div>
           )
}
 

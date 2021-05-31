import React from "react";
import "./css/FilterByDoneTask.css"

export default function FilterByDone(props) {
    let listTodo = props.holderTodo.map(val => val);

    let handlerButtonDoneComplete = () => {
        props.changeWordInput("");
        props.changeTypeFilter("byName");
        props.changeTaskFilterHolder([]);
        
        let filterListDoneComplete = listTodo.filter(todo => todo.done === true);
        props.changeTaskFilterHolder(filterListDoneComplete);
    }

    let handlerButtonDoneNotComplete = () => {
        props.changeWordInput("")
        props.changeTaskFilterHolder([]);
        props.changeTypeFilter("byName");
        
        let filterListDoneNotComplete = listTodo.filter(todo => todo.done === false);
        console.log('look bro', filterListDoneNotComplete)
        props.changeTaskFilterHolder(filterListDoneNotComplete);
       
    }

    return (
        <div className="Block">
            <button 
            className="Btn"
            style={props.holderTodo.length === 0? {cursor: "no-drop"}: {cursor: "pointer"}} 
            onClick={handlerButtonDoneComplete}>
                Показать выполненные
                </button>
            <button
            className="Btn"
            style={props.holderTodo.length === 0? {cursor: "no-drop"}: {cursor: "pointer"}} 
            onClick={handlerButtonDoneNotComplete}>
                Показать невыполненные
                </button>
        </div>
    )
}
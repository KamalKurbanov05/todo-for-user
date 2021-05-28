import React from "react";

export default function FilterByDone(props) {
    let listTodo = props.holderTodo.map(val => val);

    
    
    let handlerButtonDoneComplete = () => {
        props.changeTaskFilterHolder([]);
        
        let filterListDoneComplete = listTodo.filter(todo => todo.done === true);
        props.changeTaskFilterHolder(filterListDoneComplete);
    }

    let handlerButtonDoneNotComplete = () => {
        props.changeTaskFilterHolder([]);
         
        let filterListDoneNotComplete = listTodo.filter(todo => todo.done === false);
        console.log('look bro', filterListDoneNotComplete)
        props.changeTaskFilterHolder(filterListDoneNotComplete);
       
    }

    return (
        <div>
            <button onClick={handlerButtonDoneComplete}>Показать выполненные</button>
            <button onClick={handlerButtonDoneNotComplete}>Показать невыполненные</button>
        </div>
    )
}
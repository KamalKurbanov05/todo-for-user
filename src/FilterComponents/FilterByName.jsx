import React, {useState} from "react";
import "./css/FilterByName.css"

export default function FilterByName (props) {

    let lisTodo = props.holderTodo.map(todo => todo);

    let filterList;
    let filterText;
    let handlerInputText = (el) => {
        filterText = el.target.value;
        console.log("we come here");
        
        if (filterText.length === 0) {
            props.changeTypeFilter("byName");
            props.changeTaskFilterHolder([]);
        }

        props.changeWordInput(filterText);
        if (filterText.length >= 3) {

            if (props.typeFilter === "byName"){
                props.changeTaskFilterHolder([]);
                filterList =  lisTodo.filter(todo => todo.heading.includes(filterText));
                props.changeTaskFilterHolder(filterList);

            } else if (props.typeFilter === "byText") {
                props.changeTaskFilterHolder([]);
                filterList = lisTodo.filter(todo => todo.task.includes(filterText));
                console.log("we here now");
                props.changeTaskFilterHolder(filterList);
            }
        }
    }
    
    let classChangebyText;
    let handlerFilter = (el) => {
        console.log('handlerFilter', el)
        props.changeTypeFilter(el.target.value);
        props.changeTaskFilterHolder([]);
        if (el.target.value === "byName") {
            let filterList = lisTodo.filter(todo => todo.heading.includes(props.wordInput));
            props.changeTaskFilterHolder(filterList);

        } else if (el.target.value === "byText") {
            let filterList = lisTodo.filter(todo => todo.task.includes(props.wordInput));
            props.changeTaskFilterHolder(filterList);
        } 
    }

    return (
        <div>
            <label htmlFor="formForFilter">
                <input type="text" name="formForFilter" placeholder="Текст или слово" value={props.wordInput} onChange={handlerInputText}/>
                Фильтровать 
            </label>
            <label className={classChangebyText}>
                По названию задачи
                <input 
                
                disabled={props.wordInput.length >= 3? false: true} 
                type="radio" 
                value="byName" 
                name="filterTask" 
                onChange={handlerFilter} 
                checked={props.typeFilter !=="byName"? false: true}
                />
            </label>
            <label className={classChangebyText}>
                по тексту задачи
                <input 
                disabled={props.wordInput.length >= 3? false: true} 
                type="radio" 
                value="byText" 
                name="filterTask" 
                onChange={handlerFilter}
                />
            </label>
        </div>
    )
    }

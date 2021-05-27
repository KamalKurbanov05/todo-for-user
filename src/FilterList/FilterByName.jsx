import React, {useState} from "react";

export default function FilterByName (props) {
    const [typeFilter, setTypeFilter] = useState("");
    const [wordInput, setWordInput] = useState("");


    let lisTodo = props.holderTodo.map(todo => todo);

    let filterList;
    let filterText;
    let handlerInputText = (el) => {
        filterText = el.target.value;
        setWordInput(filterText);
    }
    
    
    let handlerFilter = (el) => {
        console.log('we here little boy', el.target.value);
        setTypeFilter(el.target.value);
        let response = el.target.value;
        console.log("response", response);

        if (wordInput.length >= 3) {

            if (response === "byName"){
                console.log('WE HERE yac', wordInput);
                filterList =  lisTodo.filter(todo => todo.heading.includes(wordInput));
                props.changeTaskFilterHolder(filterList);
                console.log('WE HERE yac', wordInput);

            } else if (response === "byText") {
                console.log('WE HERE vac', wordInput);
                filterList = lisTodo.filter(todo => todo.task.includes(wordInput));
                console.log('WE HERE vac', filterList)
                props.changeTaskFilterHolder(filterList);
            }
            
        }
    }

    let handlerButtonFilter = () => {
        setWordInput("");
        setTypeFilter("");
        props.changeTaskFilterHolder([]);
    }

    return(
        <div>
            <label htmlFor="formForFilter">
                <input type="text"  name="formForFilter" placeholder="Текст или слово" value={wordInput} onChange={handlerInputText}/>
                Филтровать 
            </label>
            <label>
                По названию задачи
                <input disabled={wordInput.length >= 3? false: true} type="radio" value="byName" name="filterTask" onChange={handlerFilter} checked={typeFilter !=="byName"? false: true}/>
            </label>
            <label>
                по тексту задачи
                <input disabled={wordInput.length >= 3? false: true} type="radio" value="byText" name="filterTask" onChange={handlerFilter} checked={typeFilter==="byText"? true: false}/>
            </label>
            <button onClick={handlerButtonFilter}> сбросить фильтр </button>
        </div>
    )
}
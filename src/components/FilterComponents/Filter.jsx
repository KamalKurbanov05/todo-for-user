import React, {useState} from "react";
import DropingFilter from "./components/DropingFilter";
import FilterByDone from "./components/FIlterByDoneTask";
import FilterByName from "./components/FilterByName";


export default function Filter(props) {
    const [typeFilter, setTypeFilter] = useState("byName");
    const [wordInput, setWordInput] = useState("");

    let changeTypeFilter =  (typeFilte) => {
        setTypeFilter(typeFilte);
    }

    let changeWordInput = (wordInput) => {
        setWordInput(wordInput);
    }

    return (
        <div>
            <DropingFilter 
            changeTypeFilter={changeTypeFilter} 
            changeWordInput={changeWordInput} 
            holderFilter={props.holderFilter} 
            holderTodo={props.holderTodo} 
            changeTaskFilterHolder={props.changeTaskFilterHolder} 
            />
            <FilterByDone 
            holderFilter={props.holderFilter} 
            holderTodo={props.holderTodo} 
            changeTaskFilterHolder={props.changeTaskFilterHolder}
            changeWordInput={changeWordInput}
            changeTypeFilter={changeTypeFilter}
            />
            <FilterByName 
            typeFilter={typeFilter} 
            wordInput={wordInput} 
            changeWordInput={changeWordInput}  
            changeTypeFilter={changeTypeFilter} 
            holderFilter={props.holderFilter} 
            holderTodo={props.holderTodo} 
            changeTaskFilterHolder={props.changeTaskFilterHolder}
            />
        </div>
    )
}
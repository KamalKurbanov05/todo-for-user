import React, {useState} from "react";
import "./css/FilterByName.css"

export default function FilterByName (props) {
    const [classNameForRadioBtnByName, setClassNameForRadioBtnByName] = useState("");
    const [classNameForRadioBtnByText, setClassNameForRadioBtnByText] = useState("");

    let lisTodo = props.holderTodo.map(todo => todo);

    let filterList;
    let filterText;
    let handlerInputText = (ev) => {
        filterText = ev.target.value;
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
                
                if (filterList.length === 0) {
                    setClassNameForRadioBtnByName("notFound");
                    setClassNameForRadioBtnByText("filterSearch")
                } else {
                    setClassNameForRadioBtnByName( "filterSearch");
                }

            } else if (props.typeFilter === "byText") {
                props.changeTaskFilterHolder([]);
                filterList = lisTodo.filter(todo => todo.task.includes(filterText));
                console.log("we here now");
                props.changeTaskFilterHolder(filterList);
                
            }
        }
    }
    
    
    let handlerFilter = (ev) => {
        props.changeTypeFilter(ev.target.value);
        props.changeTaskFilterHolder([]);
        if (ev.target.value === "byName") {
            let filterList = lisTodo.filter(todo => todo.heading.includes(props.wordInput));
            props.changeTaskFilterHolder(filterList);
            
            if (filterList.length === 0) {
                setClassNameForRadioBtnByName("notFound");
                setClassNameForRadioBtnByText("filterSearch");

            } else {
                setClassNameForRadioBtnByName( "filterSearch");
                setClassNameForRadioBtnByText("filterSearch");
            }
        
        } else if (ev.target.value === "byText") {
            let filterList = lisTodo.filter(todo => todo.task.includes(props.wordInput));
            props.changeTaskFilterHolder(filterList);
            
            if (filterList.length === 0) {
                setClassNameForRadioBtnByText("notFound");
                setClassNameForRadioBtnByName( "filterSearch");
            } else {
                setClassNameForRadioBtnByText("filterSearch");
                setClassNameForRadioBtnByName("filterSearch");
            }
        }
        
        
    }

    return (
        <div>
            <label htmlFor="formForFilter">
                <input type="text" name="formForFilter" placeholder="Текст или слово" value={props.wordInput} onChange={handlerInputText}/>
                Фильтровать 
            </label>
            <label className={classNameForRadioBtnByName}>
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
            <label className={classNameForRadioBtnByText}>
                по тексту задачи
                <input 
                disabled={props.wordInput.length >= 3? false: true} 
                type="radio" 
                value="byText" 
                name="filterTask" 
                onChange={handlerFilter}
                checked={props.typeFilter !== "byText"? false: true}
                />
            </label>
        </div>
    )
    }

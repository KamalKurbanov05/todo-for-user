import React, {useState} from "react";
import "./css/FilterByName.css"

export default function FilterByName (props) {
    const [notFoundMsgByName, setNotFoundMsgByName] = useState({__html:" "});
    const [notFoundMsgByText, setNotFoundMsgByText] = useState({__html:" "});

    const notFoundMsg = "по данному заросу ничего не обноруженно с помощью этого фильтра"

    let lisTodo = props.holderTodo.map(todo => todo);

    if (props.holderTodo.length === 0) {
        props.changeWordInput("");
    }

    let filterList;
    let filterText;
    let handlerInputText = (ev) => {
        filterText = ev.target.value;
        if (filterText.length === 0) {
            props.changeTypeFilter("byName");
            props.changeTaskFilterHolder([]);
            setNotFoundMsgByName({__html:" "});
            setNotFoundMsgByText({__html:" "});
        }

        props.changeWordInput(filterText);
        
        if (filterText.length >= 3) {

            if (props.typeFilter === "byName"){
                props.changeTaskFilterHolder([]);
                filterList =  lisTodo.filter(todo => todo.heading.includes(filterText));
                props.changeTaskFilterHolder(filterList);
                
                if (filterList.length === 0) {
                    setNotFoundMsgByName({__html: notFoundMsg});
                    setNotFoundMsgByText({__html: " "})
                }  else{
                    setNotFoundMsgByText({__html: " "});
                    setNotFoundMsgByName({__html: " "});
                }

            } else if (props.typeFilter === "byText") {
                props.changeTaskFilterHolder([]);
                filterList = lisTodo.filter(todo => todo.task.includes(filterText));
                props.changeTaskFilterHolder(filterList);
                
                if (filterList.length === 0) {
                    setNotFoundMsgByText({__html: notFoundMsg});
                    setNotFoundMsgByName({__html: " "});
                } else{
                    setNotFoundMsgByText({__html: " "});
                    setNotFoundMsgByName({__html: " "});
                }
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
                setNotFoundMsgByName({__html: notFoundMsg});
                setNotFoundMsgByText({__html: " "})
            } else{
                setNotFoundMsgByText({__html: " "});
                setNotFoundMsgByName({__html: " "});
            }

        } else if (ev.target.value === "byText") {

            let filterList = lisTodo.filter(todo => todo.task.includes(props.wordInput));
            props.changeTaskFilterHolder(filterList);
            console.log('byText')
            
            if (filterList.length === 0) {
                setNotFoundMsgByText({__html: notFoundMsg});
                setNotFoundMsgByName({__html: " "});
            } else{
                setNotFoundMsgByText({__html: " "});
                setNotFoundMsgByName({__html: " "});
            }
        }
        }
    
        return (
        <div>
            <label className="labelFilter" htmlFor="formForFilter">
                Фильтровать
                <input
                className="inputFilter input" 
                style={props.holderTodo.length === 0? {cursor: "no-drop"}: {cursor: "pointer"}} 
                disabled={props.holderTodo.length === 0? true: false}
                type="text" 
                name="formForFilter" 
                placeholder="Текст или слово" 
                value={props.wordInput} 
                onChange={handlerInputText}/>
            </label>
            <p 
            className={notFoundMsgByName.__html.length > 1 && props.holderTodo.length !== 0? "notFound": ""} 
            dangerouslySetInnerHTML={props.holderTodo !== 0?notFoundMsgByName: " "} 
            />
            <label className="labelFilter">
                По названию задачи
                <input
                className="inputFilter" 
                disabled={props.wordInput.length >= 3? false: true} 
                type="radio" 
                value="byName" 
                name="filterTask" 
                onChange={handlerFilter}
                style={props.holderTodo.length === 0? {cursor: "no-drop"}: {cursor: "pointer"}}
                checked={props.typeFilter !=="byName"? false: true}
                />
            </label>
            <p 
            className={notFoundMsgByText.__html.length > 1 && props.holderTodo.length !== 0? "notFound": ""} 
            dangerouslySetInnerHTML={props.holderTodo !== 0? notFoundMsgByText: " "} 
            />
            <label className="labelFilter">
                По тексту задачи
                <input
                style={props.holderTodo.length === 0? {cursor: "no-drop"}: {cursor: "pointer"}}
                className="inputFilter"
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

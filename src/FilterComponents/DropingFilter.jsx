import React from "react";
import "./css/DropingFilter.css"

export default function DropingFilter(props){
    let styleForBtn;
    if (props.holderFilter.length !== 0) {
        styleForBtn = "dropFilterBtnActive";
    } else {
        styleForBtn = "dropFilterBtnNotActive";
    }
    
    let handlerButtonFilter = () => {
        
        props.changeTaskFilterHolder([]);
        props.changeWordInput("");
        props.changeTypeFilter("byName");
    }

    return(
        <div>
            <button
            disabled={props.holderFilter.length !== 0 ? false: true}
            style={props.holderFilter.length === 0? {cursor: "no-drop"}: {cursor: "pointer"}}
            className={styleForBtn}
            onClick={handlerButtonFilter}>
                 Сбросить фильтр 
            </button>
        </div>
    )
}
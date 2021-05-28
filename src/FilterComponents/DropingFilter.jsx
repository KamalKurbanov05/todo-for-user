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
        console.log("see on props", props);
        props.changeWordInput("");
        props.changeTypeFilter("byName");
    }

    return(
        <div>
            <button
            disabled={props.holderFilter.length !== 0 ? false: true}
            className={styleForBtn}
            onClick={handlerButtonFilter}>
                 сбросить фильтр 
            </button>
        </div>
    )
}
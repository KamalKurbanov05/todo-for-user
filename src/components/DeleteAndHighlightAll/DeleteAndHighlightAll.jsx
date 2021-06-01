import React from "react";
import "./deleteAndHighlightAll.css"

export default function DeleteHighlight (props) {

    let handlerSetAll = () => {
        let listDoneAll;
        let holderTodo = props.holderTodo.map(todo => todo);
        let stateList;


        if (holderTodo.filter(val => val.done).length === holderTodo.length) {
            stateList = "снять";
            listDoneAll = holderTodo.map(val => {
            val.done = false;
            return val;
          }
          )
        } else {
          stateList = "выделить"
          listDoneAll= holderTodo.map((val) => {
            if (val.done !== false){
              return val;
            } else {
              val.done = true;
              return val;
            }
          }
          )
        }
        
        let response = window.confirm(`Вы действитель хотите ${stateList} все здачи ?`)
        
        if (response) {
          props.holderHighlightAllAndDelete(holderTodo, listDoneAll);
        }
      }

     let handlerDeleteAll = () => {
        let response = window.confirm("Вы действительно хотите удалить все сообщения ?");
        
        if (response) {
          props.holderHighlightAllAndDelete([], []);
        }
      }
    
    return(
        <div className={"blockBtn"}>
              <button 
              disabled={props.holderTodo.length === 0? true: false} 
              style={props.holderTodo.length === 0? {cursor: "no-drop", backgroundColor: "rgb(255, 202, 134)"} : {cursor: "pointer"}} 
              className={"Btn"} 
              onClick={handlerSetAll}>{props.holderTodo.filter(val => val.done).length === props.holderTodo.length? "Снять все":  "Выделить все"}
              </button>
              <button 
              disabled={props.holderTodo.length === 0? true: false} 
              style={props.holderTodo.length === 0? {cursor: "no-drop", backgroundColor: "rgb(255, 202, 134)"} : {cursor: "pointer"}} 
              className={"Btn"} 
              onClick={handlerDeleteAll}> 
              Удалить все 
              </button>
        </div>
    )
}

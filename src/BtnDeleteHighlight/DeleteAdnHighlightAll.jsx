import React from "react";

export default function DleteHighlight (props) {
  console.log('we here bro', props.holderTodo)

    let handlerSetAll = () => {
        let listDoneAll;
        let holderTodo = props.holderTodo.map(todo => todo);

        if (holderTodo.filter(val => val.done).length === holderTodo.length) {
          listDoneAll = holderTodo.map(val => {
            val.done = false;
            return val;
          }
          )
          console.log('we here brother', listDoneAll)
        
        } else {
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
        props.holderHiglightAllAndDelete(listDoneAll)
      }

     let handlerDeleteAll = () => {
    
        props.holderHiglightAllAndDelete([])
      }
    
    return(
        <div className={"blockBtn"}>
              <button className={"Btn"} onClick={handlerSetAll}>{props.holderTodo.filter(val => val.done).length === props.holderTodo.length? "Снять все":  "Выделить все"}</button>
              <button className={"Btn"} onClick={handlerDeleteAll}> Удалить все </button>
        </div>
    )
}

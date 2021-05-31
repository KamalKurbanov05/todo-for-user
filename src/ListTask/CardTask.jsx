import React from "react";
import "./CardTask.css"

export default function Card(props) {

    let todo = Object.assign({} ,props.todo);
    
    let handlerDelete = () => {
        
      let response = window.confirm(`Вы действительно хотите удалить ${todo.heading !== '' ? todo.heading : todo.task} ?`)

        if (response) {
          props.getIdForDeleteEl(todo.id)
        }
    }

    let handlerChangeDone = () => {
        props.getIdForDoneUpdate(todo.id)
    }

    return(
        <li
          className="inputBlock"
          style={todo.done? {backgroundColor: "#98FB98"}: {backgroundColor: "white"}}
        >
            <div className="topContent" >
                <div className="labelBlock">
                  <label className="labelFilter" htmlFor="inputTextCheckbox">Выполнено</label>
                  <input
                    id="inputTextCheckbox"
                    type="checkbox"
                    className="itemCheckbox"
                    checked={todo.done}
                    onChange={handlerChangeDone}
                    />
                  </div>
                  <div className="itemContenBlock">
                    <h4> Описание: {todo.heading}</h4>
                    <p className={"itemCardText"}> <span style={{fontWeight: 'bold'}}>Задача:</span> {todo.task}</p>
                </div>
            </div>

              <div className="bottomContent">
                        <div>
                          <p> Время: {todo.time}</p>
                          <p style={{margin: 0}}>Дата : {todo.date}</p>
                        </div>
                        <button
                          className="Btn"
                          onClick={
                              handlerDelete
                          }
                          // callback функция
                        >
                            Удалить
                        </button>
                      </div>
                    </li>
                  )
                }


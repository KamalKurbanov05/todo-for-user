import React from "react";

export default function Card(props) {
        
    let todo = Object.assign({} ,props.todo);
    
    let handlerDelete = () => {
        let response = window.confirm(`Вы действительно хотите удалить ${todo.heading !== '' ? todo.heading : todo.task} ?`)
        if (response) {
        props.getIdForDeleteEl(todo.id)
        } 
    }

    let handlerChangeDone = (el) => {
        props.getIdForDoneUpdate(todo.id)
    }

    return(
        <li
        >
            <div className="inputBlock">
                <div className="labelBlock">
                  <label className="checkboxLabel" htmlFor="inputTextCheckbox">Выполнено</label>
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
                  
              <div className={"ItemBottomContent"}>
                        <div>
                          <p> Время: {todo.time}</p>
                          <p style={{margin: 0}}>Дата : {todo.date}</p>
                        </div>
                        <button
                          className={"itemBtn"}
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
    

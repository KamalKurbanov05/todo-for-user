import React from "react";
import "./cardTask.css"

export default function Card(props) {

    let todo = Object.assign({} ,props.todo);
    let listAfterChange = props.holderTodo.map(todo => todo);
    let listFilterAfterChange = props.holderFilter.map(todo => todo);

    let handlerDelete = () => {
        
      let response = window.confirm(`Вы действительно хотите удалить ${todo.heading !== '' ? todo.heading : todo.task} ?`)
        
      if (response) {
          
          props.changeTaskFilterHolder(listAfterChange.filter(val => val.id !== todo.id));
          props.changeHolderTodoForUser(listFilterAfterChange.filter(val => val.id !== todo.id));
        }
    }

    let handlerChangeDone = () => {
      props.changeTaskFilterHolder(listFilterAfterChange.map(valTodo => {
        let copyTodo = Object.assign({}, valTodo);
        if (copyTodo.id === todo.id){
          copyTodo.done? copyTodo.done = false: copyTodo.done = true;
          return copyTodo;
        } else {
          
          return copyTodo;
        }
      }
      )
      )

      props.changeHolderTodoForUser(listAfterChange.map(valTodo => {
        let copyTodo = Object.assign({}, valTodo);
        if (copyTodo.id === todo.id){
          copyTodo.done? copyTodo.done = false: copyTodo.done = true;
          return copyTodo;
        } else {
          
          return copyTodo;
        }
      }
      )
      )
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


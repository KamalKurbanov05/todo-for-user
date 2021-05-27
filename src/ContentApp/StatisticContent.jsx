import React from 'react';

export default function Statistics(props) {

    return (
            <p>
              {
                props.holderTodo.length !==0 ? 
              `колличество задач ${props.holderTodo.length}, всего задач осталось ${props.holderTodo.filter(val => val.done === false).length},
              выполненно ${props.holderTodo.filter(val => val.done ===  true).length}`
              :'задач нет'
              }
            </p>
        )
}
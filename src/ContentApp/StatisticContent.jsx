import React from 'react';
import './StatisticContent.css'

export default function Statistics(props) {

    return (
            <p className="content">
              {
                props.holderTodo.length !==0 ? 
              `Колличество задач ${props.holderTodo.length}, всего задач осталось ${props.holderTodo.filter(val => val.done === false).length},
              выполненно ${props.holderTodo.filter(val => val.done ===  true).length}`
              :'Задач нет'
              }
            </p>
        )
}
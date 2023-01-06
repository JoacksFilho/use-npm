import React, { useState } from "react";
import Item from "./item";

import style from './Lista.module.scss';


function Lista(){//Nome do componente sempre em maisculo.
   const [tarefas, setTarefas] = useState([{
    tarefa: 'React',
    tempo: '02:00:00'
}, {
    tarefa: 'Javascript',
    tempo: '01:00:00'
}, {
    tarefa: 'Typescript',
    tempo: '01:00:00'
}]);

    return (
    <aside className={style.listaTarefas}>
        <h2 onClick={() =>{           
            setTarefas( [...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}])
        }}>Estudos do dia</h2>
        <ul>
        {tarefas.map((item, index) => (
            <Item
                key={index} 
                {...item}
            />
        ))}
            {/* <li>
                <h3>
                React
                </h3>
                <span>
                02:00:00
                </span>   
            </li>
            <li>
                <h3>
                Javascript
                </h3>
                <span>
                01:00:00
                </span>
            </li> */}
        </ul>
    </aside>
    )
}

export default Lista;
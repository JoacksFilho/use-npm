
import { Itarefa } from "../../types/tarefa";
import Item from "./item";
import style from './Lista.module.scss';

function Lista({tarefas}: {tarefas:Itarefa[] }){//Nome do componente sempre em maisculo.
 
    return (
    <aside className={style.listaTarefas}>
       <h2>Estudos do dia </h2>
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
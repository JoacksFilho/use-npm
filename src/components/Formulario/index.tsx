import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { Itarefa } from './../../types/tarefa';
import {v4 as uuidv4} from 'uuid';

class Formulario extends React.Component<{
    setTarefas:  React.Dispatch<React.SetStateAction<Itarefa[]>>
}> {
    state = { // colocar todo o state do class componente
        tarefa: "",
        tempo: "00:00"

    }

    addTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render(){ // render é a função obrigatoria
        return(
            <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                    Adicione um novo estudo
                    </label>
                    <input 
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                    placeholder="O que você quer estudar"
                    required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                    type="time"
                    step="1"
                    name="tempo"
                    value = {this.state.tempo} // valores do input
                    onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:30"
                    required
                    />
                </div>
                <Botao type="submit">
                Adicionar
                </Botao>
            
                                               
            </form>
        )    
    }
}
export default Formulario;
import React from 'react';
import style from  './Botao.module.scss';

class Botao extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined; // ponto de interrogação demonstra que essa propriedade é opcional.
    children?: React.ReactNode
}>{
    render(){
        // const backgroundColor = 'yellow';
        // const styles = {
        //     backgroundColor
        // }
        // const color = 'red'; // Podemos usar variáveis para definir cores.
        const{type = "button"} = this.props;
        return(
            
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }    
}
//abertura de chaves servem para poder usar javascript
export default Botao;
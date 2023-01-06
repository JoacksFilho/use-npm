import React from 'react';
import style from  './Botao.module.scss';

class Botao extends React.Component<{children: string}>{
    render(){
        // const backgroundColor = 'yellow';
        // const styles = {
        //     backgroundColor
        // }
        // const color = 'red'; // Podemos usar variáveis para definir cores.
        return(
            
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }    
}
//abertura de chaves servem para poder usar javascript
export default Botao;
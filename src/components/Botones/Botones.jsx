import React, {Component} from 'react'

export default class Botones extends Component{
    render(){
        const {handleClick} = this.props;
        return(
            <div className="opciones">
                <div className="opcion">
                    <button id="A" className="botones" onClick={handleClick}>A</button>
                    <h2>{this.props.opcionA}</h2>
                </div>
                <div className="opcion">
                    <button id="B" className="botones" onClick={handleClick}>B</button>
                    <h2>{this.props.opcionB}</h2>
                </div>
            </div>
        )
    }
}
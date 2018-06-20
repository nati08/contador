import React, { Component } from 'react';

class Cronometro extends Component {
    constructor() {
        super();

        this.interval = null;       

        this.state = {
            count: 0,
        };
        
        this.start = this.start.bind( this );
        this.stop = this.stop.bind( this );
        this.stresetearop = this.resetear.bind( this );
    }
    start() {       
        this.interval = window.setInterval( this.incrementar, 1000 );
    }   
    incrementar = () => {
        this.setState({
            count: this.state.count + 1
        });
      };
    stop() {
        window.clearInterval( this.interval );
    }
    resetear = () => {
        this.setState({
            count: 0
        });
      };
    render() {
        return <div className="crono">
           <h1>{this.state.count}</h1>
           <button className="btn" onClick={this.resetear}>Resetear</button>    
            <button className="btn" onClick={this.start}>Iniciar</button>
            <button className="btn" onClick={this.stop}>Parar</button>          
        </div>;
    }
}
export default Cronometro;
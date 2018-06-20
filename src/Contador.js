import React, { Component } from 'react';

class Contador extends Component {
  state = {
    count: 0
  }

  incrementar = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrementar = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  resetear = () => {
    this.setState({
      count: 0
    });
  };
  render(){
    return (
      <div className="contador">
        <h1>{this.state.count}</h1>
        <button className="btn" onClick={this.resetear}>Resetear</button>
        <button className="btn" onClick={this.incrementar}>Incrementar</button>
        <button className="btn" onClick={this.decrementar}>Decrementar</button>
      </div>
    );
  }
};

export default Contador;

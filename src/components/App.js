import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    this.props.store.dispatch({type: 'INCREMENT'})
  }
  decrement(){
    this.props.store.dispatch({type: 'DECREMENT'})
  }

  render() {
    console.log(this.props.store.getState());
    return (
      <p>
        clicked: {this.props.value}
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>
      </p>
    );
  }
}

export default App;

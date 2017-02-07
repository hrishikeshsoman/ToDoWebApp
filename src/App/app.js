import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/actions/index.js'
const { number } = PropTypes;
@connect(state => ({
  counter: state.counter
}))
export default class App extends Component {

  static propTypes = {
    counter: number
  };

  increment = () => {
    console.log('In incrementCounter');
    this.props.dispatch(incrementCounter());
  }

  decrement = () => {
    console.log('In decrementCounter');
    this.props.dispatch(decrementCounter());
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <br/>
        <br/>
        <button onClick={this.decrement}>Decrement</button>
        <br/>
        <br/>
        <span>Counter value:</span>{this.props.counter}
      </div>
    );
  }
}

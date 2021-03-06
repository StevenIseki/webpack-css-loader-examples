import './style.css';
import React, { Component } from 'react';
import { render } from 'react-dom';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="counter">
	      <h1 className={`counter--${this.props.color}`}>
	        Counter ({this.props.increment}): {this.state.counter}
	      </h1>
      </div>
    );
  }
}

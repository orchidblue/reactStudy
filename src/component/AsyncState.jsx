import React, { Component } from 'react';

class AsyncState extends Component {
  state = {
    counter: 0,
  };

  render() {
    console.log('AsyncState render');
    return <div>{this.state.counter}</div>;
  }

  componentDidMount() {
    this.setState((prevState, props) => {
      return { counter: prevState.counter + 1 };
    });
    this.setState((prevState, props) => {
      return { counter: prevState.counter + 1 };
    });
    this.setState((prevState, props) => {
      return { counter: prevState.counter + 1 };
    });
    this.setState((prevState, props) => {
      return { counter: prevState.counter + 1 };
    });
  }
}

export default AsyncState;

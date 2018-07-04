import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LectureGoalList from './component/LectureGoalList';
import Timer from './component/Timer';

const goals = [
  '1. React 개발에 필요한 환경을 구축한다.',
  '2. 새로운 자바스크립트 문법을 익힌다.',
  '3. 개발 편의를 위한 VSCODE IDE를 익힌다.',
  '3. 개발 편의를 위한 VSCODE IDE를 익힌다.',
];

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     x:1
  //   };

  //   //this.handleClick = this.handleClick.bind(this);
  // }

  state = {
    x: 1,
  };

  handleClick = (a, b, c) => {
    debugger;
    console.log(this);
    console.log(a);
    console.log(a.target);
    console.log(arguments);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={this.handleClick} src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LectureGoalList items={goals} title={'강의목표'} />

        <Timer expireDate='2018-07-04T17:00:00+09:00'/>
      </div>
    );
  }
}

export default App;

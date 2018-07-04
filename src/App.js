import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LectureGoalList from './component/LectureGoalList';
import Timer from './component/Timer';
import moment from 'moment';

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
    isExpired: false,
  };

  handleClick = (a, b, c) => {
    debugger;
    console.log(this);
    console.log(a);
    console.log(a.target);
    console.log(arguments);
  }

  handleComplete = () => {
    //자식이 종료된 시간의 1초 후에 발생
    console.log("타이머로부터 호출받음");
    this.setState({isExpired: true});

  }

  render() {

    //종료 시점을 App이 판단
    const isExpired2 = moment('2018-07-04T17:00:00+09:00') < moment();
    //종료 시점을 컴포넌트가 판단
    const {isExpired} = this.state;

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

        { !isExpired &&
          <Timer expireDate='2018-07-04T16:08:00+09:00'
          onComplete = {this.handleComplete}
        /> }
      </div>
    );
  }
}

export default App;

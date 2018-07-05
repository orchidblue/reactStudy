import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './component/Todos';
import Timer from './component/Timer';
import moment from 'moment';
import "antd/dist/antd.css";

const goals = [
  { title: '1. React 개발에 필요한 환경을 구축한다.', completed: true},
  { title: '2. 새로운 자바스크립트 문법을 익힌다.', completed: true},
  { title: '3. 개발 편의를 위한 VSCODE IDE를 익힌다.', completed: true},
  { title: '3. 개발 편의를 위한 VSCODE IDE를 익힌다.', completed: true},
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
    dateStr: "2018-07-05T17:00:00+09:00"
  };

  handleClick = (a, b, c) => {
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

  componentDidMount() {
      setTimeout(()=> {
        this.setState({
          dateStr: "2018-07-05T13:00:00+09:00"
        })
      }, 3000);
  }

  render() {
console.log("APP render");
    //종료 시점을 App이 판단
    const isExpired2 = moment('2018-07-05T17:00:00+09:00') < moment();
    //종료 시점을 컴포넌트가 판단
    const {isExpired, dateStr} = this.state;
console.log(dateStr);
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={this.handleClick} src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Todos items={goals} title={'강의목표'} />

        { !isExpired &&
          <Timer expireDate={dateStr}
          onComplete = {this.handleComplete}
        /> }
      </div>
    );
  }
}

export default App;

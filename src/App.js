import React, { Component } from 'react';
import './App.css';
import Todos from './component/Todos';
import Timer from './component/Timer';
import moment from 'moment';
//import 'antd/dist/antd.css';
import Header from './component/Header';
import AsyncState from './component/AsyncState';

const goals = [
  { title: '1. React 개발에 필요한 환경을 구축한다.', completed: true },
  { title: '2. 새로운 자바스크립트 문법을 익힌다.', completed: true },
  { title: '3. 개발 편의를 위한 VSCODE IDE를 익힌다.', completed: true },
  { title: '3. 개발 편의를 위한 VSCODE IDE를 익힌다.', completed: true },
];

const END_TIME1 = '2018-07-05T17:00:00+09:00';
const END_TIME2 = '2018-07-05T13:00:00+09:00';
const END_TIME2_CHANGE = 100000;

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
    dateStr: END_TIME1,
    count: 1,
  };

  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  // imgClick = (a, b, c) => {

  //   console.log(this);
  //   console.log(a);
  //   console.log(a.target);
  //   console.log(arguments);
  // }

  handleComplete = () => {
    //자식이 종료된 시간의 1초 후에 발생
    console.log('타이머로부터 호출받음');
    this.setState({ isExpired: true });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        //dateStr: END_TIME2
      });
    }, END_TIME2_CHANGE);
  }

  render() {
    console.log('APP render');
    //종료 시점을 App이 판단
    //    const isExpired2 = moment(END_TIME1) < moment();
    //종료 시점을 컴포넌트가 판단
    const { isExpired, dateStr } = this.state;
    return (
      <div className="App">
        <Header />
        <Todos items={goals} title={'강의목표'} />
        <AsyncState />
        {!isExpired && (
          <Timer
            key={dateStr}
            expireDate={dateStr}
            //onComplete = {this.handleComplete}
            //onComplete = { e => this.handleComplete}
            onComplete={e => this.handleClick(e)}
          />
        )}
      </div>
    );
  }
  handleClick() {}
}

export default App;

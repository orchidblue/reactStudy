import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.date = moment();
    this.nTimer = setInterval(this.onTick, 1000);
  }

  onTick = () => {
    this.forceUpdate();
  };

  timeChecking = () => {
    const Time = moment(this.props.expireDate).valueOf() - moment().valueOf();
    return this.msToTime(Time);
  };

  msToTime = s => {
    const ms = s % 1000;
    s = (s - ms) / 1000;
    const secs = s % 60;
    s = (s - secs) / 60;
    const mins = s % 60;
    const hrs = (s - mins) / 60;

    return hrs + ':' + mins + ':' + secs;
  };

  render() {
    return (
      <div>
        <div>현재시간: {moment().format('YYYY-MM-DD A hh:mm:ss')} </div>
        <div>{moment(this.props.expireDate).fromNow()}남았습니다.</div>
        <div>{this.timeChecking()} 남았습니다.</div>
      </div>
    );
  }
}

export default Timer;

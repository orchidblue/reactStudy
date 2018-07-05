import React, { PureComponent } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

const TIME_FORMAT = 'YYYY-MM-DD A hh:mm';
class Timer extends PureComponent {
  constructor(props) {
    console.log('Timer Constructor');
    super(props);

    this.state = {
      date: moment(),
    };

    this.nTimer = setInterval(() => {
      this.setState({
        date: moment(),
      });
    }, 10000);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.date.format(TIME_FORMAT) === nextState.date.format(TIME_FORMAT)) return false;
  //   return true;
  // }

  onTick = () => {
    this.forceUpdate();
  };

  timeChecking = () => {
    return 1;

    // const Time = moment(this.props.expireDate).valueOf() - moment().valueOf();
    // return this.msToTime(Time);
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
    console.log('timer Render');
    const { expireDate, onComplete } = this.props;
    const { date } = this.state;
    if (moment(expireDate) < date) {
      // setTimeout(() => {
      //   onComplete && onComplete();
      // }, 1000);
      return <div>종료 되었습니다.</div>;
    }

    return (
      <div>
        <div>현재시간: {date.format(TIME_FORMAT)} </div>
        <div>{moment(expireDate).fromNow()}에 수업이 종료됩니다.</div>
        <div>{this.timeChecking()} 남았습니다.</div>
      </div>
    );
  }

  componentWillUnmount() {
    console.log('Timer unmount');
    if (this.nTimer) {
      clearInterval(this.nTimer);
      this.nTimer = null;
    }
  }
}

export default Timer;

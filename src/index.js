import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Test1 = () => <div>이것도 컴포넌트다!</div>;
const Test2 = () => {
  return <div>이것도 컴포넌트다!</div>;
};

console.log(Test1);
console.log(Test2);
console.log(<Test2 />);
console.log(Test2());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

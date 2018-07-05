import React, { Component } from 'react';
import { Checkbox } from 'antd';

const styles = {
  textAlign: 'left',
  paddingLeft: '20px',
  border: '1px solid red',
  margin: '5px',
};

const ulStyles = {
  listStyle: 'none',
};

const chkStyle = {
  marginRight: '10px',
};

function onCheck(e) {
  console.log('The link was clicked.  index: ' + e);
}

const chkBox = idx => {
  function chkClickEvent(e) {
    //e.preventDefault();
    console.log('The link was clicked.  index: ' + e);
  }

  //return <input type="checkbox" onClick={chkClickEvent} style={chkStyle} />;
  //react를 사용하여 인자값 전달 방법
  //https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
  return (
    <Checkbox
      //onClick = {() => chkClickEvent(idx)}
      onClick={function() {
        chkClickEvent(idx);
      }}
      style={chkStyle}
    />
  );
};

const ListItem = ({ title, completed }) => {
  return (
    <li style={ulStyles}>
      <Checkbox
        defaultChecked={completed}
        onChange={() => {
          onCheck();
        }}>
        {title}
      </Checkbox>
    </li>
  );
};

const LectureGoalList = ({ items, title }) => {
  return (
    <div style={styles}>
      <div>{title}</div>
      <ul>{items.map((item, idx) => <ListItem key={idx} {...item} />)}</ul>
    </div>
  );
};

export default LectureGoalList;

import React, { Component } from 'react';

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

const chkBox = idx => {
  function chkClickEvent(e) {
    //e.preventDefault();
    console.log('The link was clicked.  index: ' + e);
  }

  //return <input type="checkbox" onClick={chkClickEvent} style={chkStyle} />;
  //react를 사용하여 인자값 전달 방법
  //https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
  return (
    <input
      type="checkbox"
      //onClick = {() => chkClickEvent(idx)}
      onClick={function() {
        chkClickEvent(idx);
      }}
      style={chkStyle}
    />
  );
};

const LectureGoalList = ({ items, title }) => {
  return (
    <div style={styles}>
      <div>{title}</div>
      <ul>
        {items.map((item, idx) => {
          return (
            <li key={idx} style={ulStyles}>
              <label>
                {chkBox(idx)}
                {item}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LectureGoalList;

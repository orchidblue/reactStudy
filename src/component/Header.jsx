import React, { Component } from 'react';
import logo from '../logo.svg';

const APP_TITLE = ['Welcome to React', 'StopReact'];
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isImgRotating: true,
    };
  }

  handleimgClick = () => {
    this.setState({ isImgRotating: !this.state.isImgRotating });
  };

  render() {
    const headerTitle = this.state.isImgRotating ? APP_TITLE[0] : APP_TITLE[1];
    const headerClass = this.state.isImgRotating ? 'App-logo App-rotate' : 'App-logo';

    return (
      <header className="App-header">
        <img onClick={this.handleimgClick} src={logo} className={headerClass} alt="logo" />
        <h1 className="App-title">{headerTitle}</h1>
      </header>
    );
  }
}

export default Header;

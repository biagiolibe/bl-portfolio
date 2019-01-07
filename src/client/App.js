import React, { Component } from 'react';
import './app.css';
import Header from './Header';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: null,
    };
}

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const headerData = { 
        name: this.state.username
    };
    return (
      <div>
        <Header headerData={headerData}/>
      </div>
    );
  }
}

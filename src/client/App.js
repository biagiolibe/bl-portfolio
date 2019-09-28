import React, { Component } from 'react';
import './app.css';
import Header from './comps/Header';
import Body from './comps/Body';
import Footer from './comps/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
}

  render() {
    
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

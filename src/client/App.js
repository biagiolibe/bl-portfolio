import React, { Component } from 'react';
import { connect } from 'react-redux'
import { scroll } from './redux/actions';
import './app.css';
import Header from './comps/Header';
import Body from './comps/Body';
import Footer from './comps/Footer';

class App extends Component {
  constructor(props) {
    super(props);
}

componentDidMount() {
  window.addEventListener('scroll', this.handleScroll, { passive: true })
}

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll)
}



handleScroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = winScroll / height;

  const produceScroll = ()=> this.props.dispatch({type:'SCROLL', toHeight:scrolled});
  
  produceScroll();
  
}

  render() {
    return (
      <div>
        <Header />
        <Body/>
        <Footer/>
      </div>
    );
  }
}



export default connect()(App);
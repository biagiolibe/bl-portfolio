import React, { Component } from 'react';
import { connect } from 'react-redux'
import {scroll} from './redux/actions';
import './sass/app.scss';
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
  const windowHeight = window.innerHeight || window.screen.height;
  console.log('scroll -> ',winScroll);
  const scrolled = winScroll;
  const normScrolled = winScroll % windowHeight;

  const produceScroll = ()=> this.props.dispatch(scroll(scrolled, normScrolled));
  
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
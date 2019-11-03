import React, { Component } from 'react';
import { connect } from 'react-redux'
import {scroll} from '../../utils/redux-actions';
import {Header} from '../intro';
import {Footer} from '../footer';
import {AboutContainer} from '../about';
import {SkillsContainer} from '../skills';


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
  const pageHeight = document.body.offsetHeight || document.documentElement.offsetHeight;
  const scrolled = winScroll;
  const normScrolled = winScroll % windowHeight;

  const produceScroll = ()=> this.props.dispatch(scroll(scrolled, normScrolled, windowHeight, pageHeight));
  
  produceScroll();
}

  render() {
    return (
      <div>
        <Header />
        <AboutContainer/>
        <SkillsContainer />
        <Footer/>
      </div>
    );
  }
}

export default connect()(App);
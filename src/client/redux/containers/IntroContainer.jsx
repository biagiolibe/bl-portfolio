import { connect } from 'react-redux'
import Intro from '../../components/intro/Intro'

const mapStateToProps = (state) => {
  return{
    height: state.scrolling.scrolled
  }
};

export default connect(
  mapStateToProps
)(Intro)
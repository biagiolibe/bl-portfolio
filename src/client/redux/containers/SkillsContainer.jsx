import { connect } from 'react-redux'
import {Skills} from '../../components/skills';

const mapStateToProps = (state) => {
  return{
    scrolled: state.scrolling.scrolled,
    normScrolled: state.scrolling.normScrolled
  }
};

export default connect(
  mapStateToProps
)(Skills)
import { connect } from 'react-redux'
import {HeaderSection} from '../../comps/HeaderSection'

const mapStateToProps = (state) => {
  return{
    height: state.scrolling.scrolled
  }
};

export default connect(
  mapStateToProps
)(HeaderSection)
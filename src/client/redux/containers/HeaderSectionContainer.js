import { connect } from 'react-redux'
import {HeaderSection} from '../../comps/HeaderSection'

const mapStateToProps = (state) => {
  console.log(state);
  console.log(state.scrollTo);
  return{
  height: state.scrollTo,
  margin: state.scrollTo
  }
};

export default connect(
  mapStateToProps
)(HeaderSection)
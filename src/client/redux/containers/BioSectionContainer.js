import { connect } from 'react-redux'
import { BioSection } from '../../comps/BioSection';

const mapStateToProps = (state) => {
  console.log('updated ', state.scrollTo);
  return{
    height: state.scrollTo
  }
};

export default connect(
  mapStateToProps
)(BioSection)
import { connect } from 'react-redux'
import { BioSection } from '../../comps/BioSection';

const mapStateToProps = (state) => {
  console.log('updated ', state.scrolling.scrolled);
  return{
    height: state.scrolling.scrolled
  }
};

export default connect(
  mapStateToProps
)(BioSection)
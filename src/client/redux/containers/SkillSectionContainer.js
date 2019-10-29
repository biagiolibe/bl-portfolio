import { connect } from 'react-redux'
import { SkillSection } from '../../comps/SkillSection';

const mapStateToProps = (state) => {
  return{
    scrolled: state.scrolling.scrolled,
    normScrolled: state.scrolling.normScrolled
  }
};

export default connect(
  mapStateToProps
)(SkillSection)
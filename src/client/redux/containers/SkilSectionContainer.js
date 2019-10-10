import { connect } from 'react-redux'
import { SkillSection } from '../../comps/SkillSection';

const mapStateToProps = (state) => {
  console.log('updated ', state.scrolling.scrolled);
  return{
    height: state.scrolling.scrolled
  }
};

export default connect(
  mapStateToProps
)(SkillSection)
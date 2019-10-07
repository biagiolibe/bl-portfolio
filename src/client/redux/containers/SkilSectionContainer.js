import { connect } from 'react-redux'
import { SkillSection } from '../../comps/SkillSection';

const mapStateToProps = (state) => {
  console.log('updated ', state.scrollTo);
  return{
    height: state.scrollTo
  }
};

export default connect(
  mapStateToProps
)(SkillSection)
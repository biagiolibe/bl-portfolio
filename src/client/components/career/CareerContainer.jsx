import { connect } from 'react-redux'
import Career from './Career';

const mapStateToProps = (state) => {
	return{
	  scrolled: state.scrolling.scrolled,
	  normScrolled: state.scrolling.normScrolled
	}
  };

export default connect(
  mapStateToProps
)(Career)
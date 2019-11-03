import { connect } from 'react-redux'
import Intro from './Intro'
import {registerToStore} from '../../utils/redux-actions'

const elementId = 1;

const mapStateToProps = (state) => {
  let element = state.scrolling.translatingOnScroll.find(el => (el.elementId==elementId));
  if(!element) return {yTranslation:0}

  if(element.shouldMove){
    return{
      yTranslation: state.scrolling.yTranslation,
      shouldMove:element.shouldMove
    }
  }
  else{
    return{
      yTranslation: element.whileFixedTranslation,
    }
  }
  
};

const mapDispatchToProps = (dispatch) => {
  return{
    registerToStore: (id, offsetTop, moveFrom, startPosition, endPosition, initialHeight)=> dispatch(registerToStore(id, offsetTop, moveFrom,startPosition, endPosition,initialHeight))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro)
import { connect } from 'react-redux'
import {About} from '../../components/about/About';
import {registerToStore} from '../actions'

const elementId = 2;

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
    registerToStore: (id, offsetTop, moveFrom, startYValue, endYValue, initialHeight)=> dispatch(registerToStore(id, offsetTop, moveFrom,startYValue, endYValue,initialHeight))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
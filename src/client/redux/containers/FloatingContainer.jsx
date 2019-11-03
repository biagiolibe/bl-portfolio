import { connect } from 'react-redux'
import {Floating} from '../../components/styled';
import {registerToStore} from '../actions'

const elementId = 21;

const mapStateToProps = (state) => {
  let element = state.scrolling.translatingOnScroll.find(el => (el.elementId==elementId));
  if(!element) return {translation:{x:0,y:0}}

  if(element.shouldMove){
    return{
      translation: element.translation,
      shouldMove:element.shouldMove
    }
  }
  else{
    return{
      translation: element.whileFixedTranslation,
    }
  }
  
};

const mapDispatchToProps = (dispatch) => {
  return{
    registerToStore: (elementType,id, offsetTop, moveFrom, startYValue, endYValue, initialHeight)=> dispatch(registerToStore(elementType,id, offsetTop, moveFrom,startYValue, endYValue,initialHeight))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Floating)
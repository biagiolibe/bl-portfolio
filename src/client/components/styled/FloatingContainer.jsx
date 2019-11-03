import { connect } from 'react-redux'
import {Floating} from '.';
import {registerToStore} from '../../utils/redux-actions'


const mapStateToProps = (state, ownProps) => {
  var registrId = ownProps.identifier;
  let element = state.scrolling.translatingOnScroll.find(el => (el.elementId==registrId));
  if(!element) return {translation:{x:0,y:0}}

  if(element.shouldMove){
    return{
      translation: element.translation,
      shouldMove:element.shouldMove,
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
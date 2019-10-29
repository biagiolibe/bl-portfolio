import { combineReducers } from 'redux'
import scrolling from './scrolling'
import registerComponent from './registerComponent'

const rootReducer = combineReducers({
  scrolling: scrolling,
})

export default rootReducer
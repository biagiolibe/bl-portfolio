import { combineReducers } from 'redux'
import scrolling from './scrolling'

const rootReducer = combineReducers({
  scrolling: scrolling,
})

export default rootReducer
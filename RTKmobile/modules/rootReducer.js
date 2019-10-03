import { combineReducers } from 'redux'
import { authorization } from './authorization'
import { podcastsList } from './podcasts'

const rootReducer = combineReducers({
  authorization,
  podcastsList,
})

export default rootReducer

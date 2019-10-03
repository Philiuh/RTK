import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import { watchFetchUserToken } from './authorization'
import { watchFetchPodcasts } from './podcasts'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchFetchUserToken)
sagaMiddleware.run(watchFetchPodcasts)

export default store

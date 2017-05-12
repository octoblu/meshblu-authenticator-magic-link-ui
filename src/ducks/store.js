import { routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import magicLink from './magic-link'

const reducers = combineReducers({
  routing: routerReducer,
  magicLink: magicLink,
})

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunk, logger)
const store   = createStore(reducers, createStoreWithMiddleware)

export default store

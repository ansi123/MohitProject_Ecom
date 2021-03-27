import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const MyStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default MyStore

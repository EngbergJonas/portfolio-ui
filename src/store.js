import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import topicReducer from './reducers/topicReducer'
import activeButtonReducer from './reducers/activeButtonSlice'
import themeReducer from './reducers/themeSlice'
import userReducer from './reducers/userSlice'
import loadReducer from './reducers/loadSlice'
import languageReducer from './reducers/languageSlice'
import errorReducer from './reducers/errorSlice'

const reducer = combineReducers({
  theme: themeReducer,
  topic: topicReducer,
  user: userReducer,
  errors: errorReducer,
  activeButton: activeButtonReducer,
  isLoading: loadReducer,
  language: languageReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store

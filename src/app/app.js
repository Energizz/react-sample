import '@voxeet/react-components/dist/voxeet-react-components.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunkMidleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import { ConferenceRoom, reducer as voxeetReducer } from '@voxeet/react-components'

const reducers = combineReducers({
  voxeet: voxeetReducer
})

const configureStore = () => createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMidleware)
)

const settings = {
  consumerKey: "YOUR_KEY",
  consumerSecret: "YOUR_SECRET",
  conferenceAlias: 'Sample2'
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <ConferenceRoom
      isWidget
      consumerKey={settings.consumerKey}
      consumerSecret={settings.consumerSecret}
      conferenceAlias={settings.conferenceAlias}
    />
  </Provider>,
  document.getElementById('app')
)

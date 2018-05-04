import '@voxeet/react-components/dist/voxeet-react-components.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunkMidleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import { StatusButton, StatusCard, ConferenceRoom, reducer as voxeetReducer } from '@voxeet/react-components'
import FakeMessages from './FakeMessages';

const reducers = combineReducers({
  voxeet: voxeetReducer
})

const configureStore = () => createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMidleware)
)

const settings = {
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  conferenceAlias: 'Sample2'
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <div>
      <FakeMessages />
        <StatusButton
        isModal
        conferenceAlias={settings.conferenceAlias}
      />
      <StatusCard
        isModal
        conferenceAlias={settings.conferenceAlias}
       />
      <ConferenceRoom
        isModal
        consumerKey={settings.consumerKey}
        consumerSecret={settings.consumerSecret}
        conferenceAlias={settings.conferenceAlias}
      />
    </div>
  </Provider>,
  document.getElementById('app')
)

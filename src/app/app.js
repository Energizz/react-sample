import '@voxeet/react-widget/dist/voxeet-react-widget.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunkMidleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import { Widget, reducer as voxeetReducer } from '@voxeet/react-widget'

const reducers = combineReducers({
  voxeet: voxeetReducer
})

const configureStore = () => createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMidleware)
)

const settings = {
  consumerKey: "NGZmcHUxYm5hYzNlYQ",
  consumerSecret: "NDJwaDkyZ2MwcHRvc25uMWlsdnA0ZDZlcmo",
  conferenceAlias: 'Sample2'
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <Widget
      consumerKey={settings.consumerKey}
      consumerSecret={settings.consumerSecret}
      conferenceAlias={settings.conferenceAlias}
    />
  </Provider>,
  document.getElementById('app')
)

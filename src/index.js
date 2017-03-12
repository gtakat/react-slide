import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import reducer from './reducers/index'
import { nextPage, prevPage } from './actions'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

document.addEventListener("keydown", (event: React.KeyboardEvent) => {
  switch(event.code){
    case 'ArrowRight':
      store.dispatch(nextPage())
      break

    case 'ArrowLeft':
      store.dispatch(prevPage())
      break;

    default:
      break;
  }
})
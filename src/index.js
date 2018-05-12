import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import rootReducer from './reducers/rootReducer'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

console.log("CURRENT STATE: ", store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();

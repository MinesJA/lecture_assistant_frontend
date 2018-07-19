import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import Moment from 'react-moment';
// import 'moment-timezone';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'


// const store = createStore(rootReducer, devToolsEnhancer(applyMiddleware(thunk)));

const store = createStore(rootReducer,
              composeWithDevTools(applyMiddleware(thunk)));

console.log("STORE: ", store.getState())


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')

);

registerServiceWorker();

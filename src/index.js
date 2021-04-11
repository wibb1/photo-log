import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { database } from "./database/config";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

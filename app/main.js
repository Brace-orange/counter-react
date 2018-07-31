import React from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import reducer from "./reducer.js";
import {Provider} from "react-redux";
import App from "./App.js";

let store =createStore(reducer);

render(
  <Provider store={store}>
  <div>
  <div>{JSON.stringify(store.getState())}</div>
  <App></App>
  </div>
  </Provider>
  ,
  document.querySelector("#app")
)

import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from "mobx-react";
import AppRouter from './router'
import store from "./store/index";
import "./app.less";

class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <AppRouter />
      </Provider>
    )
  }
}
ReactDom.render(<App />, document.getElementById('app'))

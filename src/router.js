import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'

import SliderMenu from './layout/SlideMenu'
import NavigationBar from './layout/NavigationBar'

import Home from './home'
import Blog from './blog'
import Resume from './resume'
import User from './user'

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <NavigationBar />
          <div className="app-content">
            <SliderMenu />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog} />
                <Route exact path="/resume" component={Resume} />
                <Route path="/user" component={User} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

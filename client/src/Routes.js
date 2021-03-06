import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Surfboards from './components/Surfboards'
import AddSurfboard from './components/AddSurfboard'
import About from './components/About'
import Home from './components/Home'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/surfboards" component={Surfboards}>
      <Route path="/surfboards/new" component={AddSurfboard} />
    </ Route>
    <Route path="/about" component={About} />
  </Route>
)

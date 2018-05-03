import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'

export default (
  <Routes path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/surfboards" />
    <Route path="/about" />
  </Route>
)

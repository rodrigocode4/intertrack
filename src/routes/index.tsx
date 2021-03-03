import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from 'pages/Home'
import Vehicle from 'pages/Vehicle'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id(\d+)/positions">
          <Vehicle />
        </Route>
        <Route>
          <Redirect from="*" to="/" />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes

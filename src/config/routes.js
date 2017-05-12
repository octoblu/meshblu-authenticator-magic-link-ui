import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MagicLinkLogin from '../containers/MagicLinkLogin'
import MagicLinkSent from '../containers/MagicLinkSent'
import NotFound from '../components/NotFound'

export default (
  <Route>
    <Route path="/">
      <IndexRoute component={MagicLinkLogin} />
      <Route path="/sent" component={MagicLinkSent} />
    </Route>
    <Route path="*" status={404} component={NotFound} />
  </Route>
)

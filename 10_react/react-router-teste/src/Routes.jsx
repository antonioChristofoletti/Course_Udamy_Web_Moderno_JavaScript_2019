import React from 'react'

import { Redirect, Switch, Route } from 'react-router'

import First from './First'

import Second from './Second'

export default () =>
    <Switch>
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
        <Redirect from="*" to="/first" />
    </Switch>
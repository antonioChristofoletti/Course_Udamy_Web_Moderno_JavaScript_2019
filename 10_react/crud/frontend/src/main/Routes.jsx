import React from 'react'

import { Switch, Route, Redirect } from 'react-router'

import Main from '../components/template/Main'
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import Teste from '../components/Teste'

export default (props) =>
    <Switch>
        <Route path='/' exact component={Teste}></Route>
        <Redirect from='*' to='/'></Redirect>
    </Switch>
import React from 'react'

import { Switch, Route, Redirect } from 'react-router'

import Home from '../template/home/Home'

import PacientInsUpd from '../components/pacient/PacientInsUpd'

import PacientList from '../components/pacient/PacientList'


export default (props) =>
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/pacient/insUpd" component={PacientInsUpd}></Route>
        <Route exact path="/myPacients" component={PacientList}></Route>
        <Redirect from="*" to="/"></Redirect>
    </Switch>

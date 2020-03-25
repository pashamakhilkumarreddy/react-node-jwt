import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import {
    Login,
    SignUp
} from '../containers';
import {
    Users
} from '../components';

export default () =>
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/users">
            <Users />
        </Route>
        <Route path="/users/:userId">

        </Route>
    </Switch>
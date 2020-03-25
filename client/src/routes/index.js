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
    Users,
    NotFound
} from '../components';

export default () =>
    <Switch>
        <Route path="/" component={NotFound} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/users" exact>
            <Users />
        </Route>
        <Route path="/users/:userId" exact >

        </Route>
        <Route path="*" component={NotFound} />
    </Switch>
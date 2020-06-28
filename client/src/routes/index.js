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
  UserProfile,
  NotFound,
  Home
} from '../components';

export default () =>
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/login" component={Login} exact />
    <Route path="/signup" component={SignUp} exact />
    <Route path="/add-user" component={SignUp} exact />
    <Route path="/users" exact>
      <Users />
    </Route>
    <Route path="/users/:userId" exact >
      <UserProfile />
    </Route>
    <Route path="*" component={NotFound} />
  </Switch>
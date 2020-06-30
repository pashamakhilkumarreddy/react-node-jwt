import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import {
  Login,
  Register,
} from '../containers';
import {
  Users,
  UserProfile,
  NotFound,
  Home,
} from '../components';

export default () =>
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/login" component={Login} exact />
    <Route path="/signup" component={Register} exact />
    <Route path="/add-user" component={Register} exact />
    <Route path="/users" exact>
      <Users />
    </Route>
    <Route path="/users/:userId" exact >
      <UserProfile />
    </Route>
    <Route path="*" component={NotFound} />
  </Switch>
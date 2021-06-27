import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthRoute from './components/AuthRoute';
import Home from './pages/Home';
import Login from './pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <AuthRoute>
      <Route exact path="/home" component={Home} />
    </AuthRoute>
  </Switch>
);

export default Routes;

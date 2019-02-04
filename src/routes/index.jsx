import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomeView} exact/>
        <Route path="/login" component={LoginView} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;

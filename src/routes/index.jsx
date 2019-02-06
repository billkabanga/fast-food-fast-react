import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import SignupView from '../views/SignupView';


export const store = configureStore();

const Routes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeView} exact/>
          <Route path="/login" component={LoginView} />
          <Route path="/signup" component={SignupView} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Routes;

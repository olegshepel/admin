// import { subscribeToTimer } from './api';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Layout
import CustomLayout  from './containers/CustomLayout';
// Common
import Landing from './views/Landing';
import Login from './views/Login';
import Register from './views/Register';

import Profile from './views/Profile/Profile';

const loading = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" name="Landing Page" component={Landing} />
        <Route exact path="/login" name="Login Page" component={Login} />
        <Route exact path="/register" name="Register Page" component={Register} />
        <CustomLayout>
          <Route exact path="/profile" name="Profile" component={Profile} />

        </CustomLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

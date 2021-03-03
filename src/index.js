import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/home';
import Formacao from './component/formacao';
import Error404 from './component/error404';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} test={10} />
      <Route path="/formacao" exact={true} component={Formacao} test={10} />
      <Route path="*" component={Error404} test={10} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

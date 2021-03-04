import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/home';
import Formacao from './component/formacao';
import Error404 from './component/error404';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const siteName = 'WebCurriculum';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact={true}
        render={(props) => <Home {...props} title={`${siteName}`} />}
      />
      <Route
        path="/formacao"
        exact={true}
        render={(props) => (
          <Formacao {...props} title={`${siteName} | Formação`} />
        )}
        test={10}
      />
      <Route
        path="*"
        render={(props) => (
          <Error404 {...props} title={`${siteName} | Erro 404`} />
        )}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

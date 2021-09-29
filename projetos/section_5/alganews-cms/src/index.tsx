import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';

/*
const Home = React.lazy( () => import('./views/Home.view'));
const NotFound404 = React.lazy( () => import('./views/NotFound404.view'));
const Contact = React.lazy( () => import('./views/Contact.view'));
const UserView = React.lazy( () => import('./views/User.view'));
const CalcView = React.lazy( () => import('./views/Calc.view'));
*/

import Home from './views/Home.view';
import NotFound404 from './views/NotFound404.view';
import Contact from './views/Contact.view';
import UserView from './views/User.view';
import CalcView from './views/Calc.view';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <NavBar />
        {/*<Suspense fallback={<div>carregando ...</div>}>*/}
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/contato'} exact component={Contact} />
            <Route path={'/usuario/:userId'} component={UserView} />
            <Route path={'/calc/:a/:b'} component={CalcView} />
            <Route component={NotFound404} />
          </Switch>
        {/* </Suspense>*/}
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

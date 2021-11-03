import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Ap from './app/Ap'
import Card from './component/Cart'
import Item from './component/Items'
import App from './app/App'
import {
  BrowserRouter,
Route,
Switch
}from 'react-router-dom'

ReactDOM.render(
<BrowserRouter>
<Switch>
<Route path="/Cart/" component={Card}/>
<Route path="/Items/:id" component={Item}/>
<Route path="/" component={App}/>

</Switch>
</BrowserRouter>,
  document.getElementById('root')
);


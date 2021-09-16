import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';


const routes = function Routes() {
  return (

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/donate' component={Donate}/>
    </Switch>

  )
}

export default routes;

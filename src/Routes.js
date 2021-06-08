import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';


const routes = function Routes() {
  return (

    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>

  )
}

export default routes;

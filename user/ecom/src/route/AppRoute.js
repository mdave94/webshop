import React, { Component,Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TestPage from '../pages/TestPage';
import UserLoginPage from '../pages/UserLoginPage';

class AppRoute extends Component {
  render() {
    return (
        <Fragment>
            <Switch>
            <Route  exact path="/" component={HomePage}/>
                    
              

            <Route exact path="/login" component={UserLoginPage} />
               
            </Switch>

        </Fragment>
    )
  }
}

export default AppRoute

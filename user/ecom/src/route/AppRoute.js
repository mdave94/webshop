import React, { Component,Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TestPage from '../pages/TestPage';

class AppRoute extends Component {
  render() {
    return (
        <Fragment>
            <Switch>
            <Route  exact path="/" >
                    <HomePage/>
              </Route>
                <Route exact path="/test" >
                    <TestPage/>
                </Route>
            </Switch>

        </Fragment>
    )
  }
}

export default AppRoute

import React, { Component,Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TestPage from '../pages/TestPage';

class AppRoute extends Component {
  render() {
    return (
        <Fragment>
            <Switch>
            <Route path="/" >
                    <HomePage/>
              </Route>
                <Route path="/test" >
                    <TestPage/>
                </Route>
            </Switch>

        </Fragment>
    )
  }
}

export default AppRoute

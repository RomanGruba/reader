import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Reader from './Reader';

export default class App extends Component {
  state = {};

  render() {
    return (
      <Switch>
        <Route path="/reader" component={Reader} />} />
        <Redirect
          to={{
            pathname: '/reader',
            search: '?item=1',
          }}
        />
      </Switch>
    );
  }
}

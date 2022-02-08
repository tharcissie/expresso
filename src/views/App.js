import React, { Component } from 'react';
import { HashRouter as Router, Route, browserHistory } from 'react-router-dom';

import Menu from './Menu';
import Landing from './Landing';
import Employee from './Employee';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/menus/:id" component={Menu} />
          <Route path="/employees/:id" component={Employee} />
        </div>
      </Router>
    );
  }
}

export default App;

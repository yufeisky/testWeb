import React from 'react';
import {
  HashRouter as Router,
  Route, Switch, Redirect
} from 'react-router-dom';

import Step1 from '@/page/step1';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => ( <Redirect to="/step1" /> )}/>
        <Route path="/step1" component={Step1} />
        <Route render={() => <h1 style={{ textAlign: 'center', marginTop: '160px', color:'rgba(255, 255, 255, 0.7)' }}>页面不见了</h1>} />
      </Switch>
    </Router>
  );
}

export default App;

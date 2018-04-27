import React from 'react';
import {
  HashRouter as Router,
  Route, Switch, Redirect
} from 'react-router-dom';
import Step1 from '@/page/step1';
import Step2 from '@/page/step2';
import Step3 from '@/page/step3';
import Step4 from '@/page/step4';
import '@a/style/base.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => ( <Redirect to="/step1" /> )}/>
        <Route path="/step1" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
        <Route path="/step4" component={Step4} />
        <Route render={() => <h1 style={{ textAlign: 'center', marginTop: '160px', color:'rgba(255, 255, 255, 0.7)' }}>页面不见了</h1>} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Regras from './components/Regras/Regras';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <>
        <Header />

        <Switch>
          <Route exact path='/regras' component={Regras} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
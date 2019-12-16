import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Regras from './components/Regras/Regras';
import Header from './components/Header/Header';
import Guerra from './components/Guerra/Guerra';
import Profissoes from './components/Profissoes/Profissoes';

function App() {
  return (
    <Router>
      <>
        <Header />

        <Switch>
          <Route exact path='/regras' component={Regras} />
          <Route exact path='/guerra' component={Guerra} />
          <Route exact path='/profissoes' component={Profissoes} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
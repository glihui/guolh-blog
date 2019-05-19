import React from 'react';
import './App.css';
import NavContainser from './containers/Nav';
import { HashRouter, Route, Switch } from "react-router-dom";
import HomeContainser from './containers/Home';
import CategoryContainser from './containers/Catetory';
import DetailsContainer from './containers/Details';

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
        <header className="App-header">
            <NavContainser />
        </header>
        <Switch>
          <Route exact path='/' component={HomeContainser} />
          <Route exact path='/category/:id' component={CategoryContainser} />
          <Route exact path='/category/details/:id' component={DetailsContainer} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

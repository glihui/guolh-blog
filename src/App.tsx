import React from 'react';
import './App.css';
import asyncComponent from "./components/AsyncComponent";
import NavContainser from './containers/Nav';
import { HashRouter, Route, Switch } from "react-router-dom";
// import HomeContainser from './containers/Home';
// import CategoryContainser from './containers/Catetory';
// import DetailsContainer from './containers/Details';


const AsyncHome = asyncComponent(() => import("./containers/Home"));
const AsyncCategory = asyncComponent(() => import("./containers/Catetory"));
const AsyncDetails = asyncComponent(() => import("./containers/Details"));

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
        <header className="App-header">
            <NavContainser />
        </header>
        <Switch>
          <Route exact path='/' component={AsyncHome} />
          <Route exact path='/category/:id' component={AsyncCategory} />
          <Route exact path='/category/details/:id' component={AsyncDetails} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

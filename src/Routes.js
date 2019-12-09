import React from 'react';
import Home from './pages/home/Home';
import Spells from './pages/spells/Spells';
import { BrowserRouter, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact="true" component={Home} />
    <Route path="/spells" exact="true" component={Spells} />
  </BrowserRouter>
);

export default Routes;
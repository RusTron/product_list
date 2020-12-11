import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { Basket } from './components/Basket';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/basket" component={Basket} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

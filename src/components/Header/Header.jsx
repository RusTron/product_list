import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => (
  <header className="App-header">
    <li className="App-title">
      <NavLink
        to="/"
        exact
        activeClassName="App__active"
      >
        <span>Product</span>
        <span className="App__active--decorator" />
      </NavLink>
    </li>
    <li className="App-title">
      <NavLink to="/basket" activeClassName="App__active">
        <span>Basket</span>
        <span className="App__active--decorator" />
      </NavLink>
    </li>
  </header>
);

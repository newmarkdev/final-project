import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';


import {BudgetTool} from './components/BudgetTool';
import {Main} from './components/Main';
import Login from './components/Login';
import user from './reducers/user';

import './App.css';

const reducer = combineReducers({
  user: user.reducer,
});
const store = configureStore({ reducer });


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/auth" component={Login} />
          <Route exact path="/budget-tool" component={BudgetTool} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

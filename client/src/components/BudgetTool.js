import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import {Header} from './Header'
import {Balance} from './Balance'
import {IncomeExpenses} from './IncomeExpenses'
import {TransactionList} from './TransactionList'
import {AddTransaction} from './AddTransaction'

import {GlobalProvider} from '../context/GlobalState'

import '../App.css';

export const BudgetTool = () => {
  const accessToken = useSelector(store => store.user.accessToken);
  const history = useHistory();

  // Darkmode
  const [theme, setTheme] = useState(true);
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
  const appliedTheme = createMuiTheme(theme ? light : dark);

  useEffect(() => {
      if (!accessToken) {
          history.push('/');
      }
  }, [accessToken, history]);

  return (
   
  <ThemeProvider theme={appliedTheme}>
      <Paper style={{width: "100vw", borderRadius: 0, padding: "20px"}}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => setTheme(!theme)}
          >
            {icon}
          </IconButton>
        <GlobalProvider>
          <Header />
          <div className="budget-wrapper">
            <div className="container">
              <Balance />
              <IncomeExpenses />
              <TransactionList />
              <AddTransaction />
            </div> 
          </div>
        </GlobalProvider>
      </Paper>
    </ThemeProvider>
  );
}

export const light = {
  palette: {
    type: "light"
  }
};
export const dark = {
  palette: {
    type: "dark"
  }
};



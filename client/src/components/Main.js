import React from 'react';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
      justifyContent: 'center',
    },
    content: {
        textAlign: "center"
      }
  });

export const Main = () => {
    const classes = useStyles();
  return (
    <>
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <h1>Welcome to MyBudget <span aria-label="emoji">🤓</span></h1>
        <p>Login or Register below to start using the budgeting tool
        <span aria-label="emoji">💰</span></p>
        <p>Already logged in ? Start budgeting <span aria-label="emoji">👇</span></p>
      </CardContent>
      <CardActions className={classes.root}>
        <a href="/auth">
            <Button 
            size="small"                    
            color="secondary" 
            >Register or Login
            </Button>
         </a>
        <a href="/budget-tool">
          <Button 
          size="small">
          Budget Tool
          </Button>
        </a>
      </CardActions>
    </Card>
    </>
  );
}




import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';

import Logout from './Logout'

const useStyles = makeStyles({
    root: {
      justifyContent: 'center'
    }
  });

export const Header = () => {
    const classes = useStyles();
    const accessToken = useSelector(store => store.user.accessToken);
    const history = useHistory();
  
    useEffect(() => {
      console.log('Checking access token', accessToken);
        if (!accessToken) {
            history.push('/');
        }
    }, [accessToken, history]);

    return (
        <CardActions className={classes.root}>
            <a href="/">
                <Button 
            size="small"                    
                    color="default" 
                >Home
                </Button>
            </a>
            <a href="/budget-tool">
                <Button 
            size="small"                    
                    color="default" 
                >Budget
                </Button>
            </a>
            <Logout />
        </CardActions>
    )
}

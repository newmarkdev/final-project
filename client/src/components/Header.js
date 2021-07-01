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
            <Logout />
        </CardActions>
    )
}

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {sign} from '../reducers/user';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Login = () => {
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mode, setMode] = useState(null);

    const accessToken = useSelector(store => store.user.accessToken);
    const errors = useSelector(store => store.user.errors);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (accessToken) {
            history.push('/budget-tool');
        }
    }, [accessToken, history, errors]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(sign(username, password, mode))
    };

    return (
    <>    
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Login or Signup
        </Typography>
        <form className={classes.form} noValidate onSubmit={onFormSubmit}>
            <TextField
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
            />
            <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
            />
        
            <Button
            type="submit"
            onClick={() => setMode('user/login')}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            Login
            </Button>
            <Button
            type="submit"
            onClick={() => setMode('user/signup')}
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            >
            Signup
            </Button>
        </form>
        </div>
        <Box mt={8}>
        </Box>
        </Container>
    </>

    );
};

export default Login;
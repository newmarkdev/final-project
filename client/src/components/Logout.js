import React from 'react';
import { batch, useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';


import user from '../reducers/user';

const Logout = () => {
    const accessToken = useSelector(store => store.user.accessToken);
    const dispatch = useDispatch();

    const onButtonClick = () => {
        batch(() => {
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setAccessToken(null));
        });
    };

    return (
        <div>
            {accessToken && <Button 
            fullWidth
            color="secondary" 
            onClick={onButtonClick}>Logout
            </Button>}
        </div>
    );
};

export default Logout;
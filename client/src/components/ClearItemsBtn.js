import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';
import Button from '@material-ui/core/Button';

export const ClearItemsBtn = () => {
    const {transactions, getTransactions} = useContext(GlobalContext);


const onButtonClick = () => {
        getTransactions();
};

    return (
            <Button 
            size="small"                    
            color="default" 
            onClick={onButtonClick}
            >
            Clear Items
            </Button>
            
    )
}

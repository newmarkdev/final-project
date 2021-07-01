import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {numberWithCommas} from '../utils/format';


export const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h1>Budget Tool</h1>
            <h2>Balance: ${numberWithCommas(total)}</h2>
        </>
    )
}

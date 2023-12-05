import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [currency, setCurrency] = useState('£');
    const { dispatch } = useContext(AppContext);

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const changeCurrency = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    }

    useEffect(() => {
        changeCurrency();
    }, [currency] )

    return (
        <div className="alert alert-success">
            <select id="inputGroupSelect02" class="form-select" onChange={handleChange}>
                <optgroup  label = "Currency">
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound" selected>£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
                </optgroup>
            </select>
        </div>
    )};

export default Currency;

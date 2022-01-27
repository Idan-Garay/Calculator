import React from 'react';
import {ScreenProps} from '../customTypes';

export default function Screen({value = 0, isDecimal = false}: ScreenProps) {

    return (
        <div className="screen">
            <h1>{isDecimal? parseFloat(value.toString()):value}</h1>
        </div>
    );
}
import React from 'react';
import {ScreenProps} from '../customTypes';

export default function Screen({value = 0}: ScreenProps) {
    return (
        <div className="screen">
            <p>Prev calc.</p>
            <h1>{value}</h1>
        </div>
    );
}
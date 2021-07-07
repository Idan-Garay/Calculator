import React from 'react';

interface Props {
    value: Number,
}

export default function Screen({value = 0}: Props) {
    return (
        <div className="screen">
            <h1>{value}</h1>
        </div>
    );
}
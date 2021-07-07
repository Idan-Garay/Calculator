import React from 'react';
// import Screen from './Screen'


interface Props {
    handleClick: (input: number | String) => void;
}

const Table = ({handleClick}: Props) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2} onClick={e => handleClick('clear')}>clear</td>
                        <td onClick={e => handleClick('=')}>=</td>
                        <td onClick={e => handleClick('+')}>+</td>
                    </tr>
                    <tr>
                        <td onClick={e => handleClick(7)}>7</td>
                        <td onClick={e => handleClick(8)}>8</td>
                        <td onClick={e => handleClick(9)}>9</td>
                        <td onClick={e => handleClick('/')}>/</td>
                    </tr>
                    <tr>
                        <td onClick={e => handleClick(4)}>4</td>
                        <td onClick={e => handleClick(5)}>5</td>
                        <td onClick={e => handleClick(6)}>6</td>
                        <td onClick={e => handleClick('x')}>x</td>
                    </tr>
                    <tr>
                        <td onClick={e => handleClick(1)}>1</td>
                        <td onClick={e => handleClick(2)}>2</td>
                        <td onClick={e => handleClick(3)}>3</td>
                        <td onClick={e => handleClick('-')}>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
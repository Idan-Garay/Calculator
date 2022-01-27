import React from 'react';

export interface ArithmeticData {
  n1: number,
  n2: number,
  sign: string,
  isAppend: boolean,
  // history: Array<Array<string | number>>
}

export interface Action {
  type: string,
  payload: string | number,
}

export interface ScreenProps {
  value: number
}

export type CalculatorAction = 
| {type: 'Do Operation' | 'Change Operation', payload: string} 
| {type: 'Change Number', payload: number}
| {type: "Is Append", payload: boolean}
| {type: "Clear"}

export interface TableProps {
  dispatch: React.Dispatch<CalculatorAction>
}
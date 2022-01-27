import React from 'react';

export interface ArithmeticData {
  n1: number,
  n2: number,
  sign: string,
  isAppend: boolean,
  isDecimal: boolean,
  equal: boolean
}

export interface Action {
  type: string,
  payload: string | number,
}

export interface ScreenProps {
  value: number,
  isDecimal: boolean,
}

export type CalculatorAction = 
| {type: 'Do Operation' | 'Change Operation', payload: string} 
| {type: 'Change Number', payload: number}
| {type: "Is Append", payload: boolean}
| {type: "Clear"}
| {type: "Decimal", payload: '.'}

export interface TableProps {
  dispatch: React.Dispatch<CalculatorAction>
}
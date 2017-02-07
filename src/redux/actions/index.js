import { INC_CNTR, DEC_CNTR } from './actionTypes';


export function incrementCounter() {
  return {
    type: INC_CNTR
  };
}

export function decrementCounter() {
  return {
    type: DEC_CNTR
  };
}

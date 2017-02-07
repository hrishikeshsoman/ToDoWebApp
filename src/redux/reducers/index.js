import { INC_CNTR, DEC_CNTR } from '../actions/actionTypes';

const initialState = {counter: 0};

export default function counterReducer(state=initialState, action) {
  switch(action.type) {
    case INC_CNTR:
        return state = Object.assign({}, {counter: state.counter + 1});
    case DEC_CNTR:
        return state = Object.assign({}, {counter: state.counter - 1});
    default:
        return state;
  }
}

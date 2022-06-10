import {ADD_TABLE, GET_TABLE_LIST} from '../actions/types';

const INISIAL_STATE = {
    table: []
}

export default (state= INISIAL_STATE, action) => {
    switch (action.type) {
        case GET_TABLE_LIST:
            return {...state, table: action.payload}
        case ADD_TABLE:
            return {...state, table: state.table.concat(action.payload)}
        default:
            return state;
    }
}
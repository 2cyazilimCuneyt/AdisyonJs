import {ADD_MENU, GET_MENU_LIST} from '../actions/types';

const INISIAL_STATE = {
    menu: []
}

export default (state= INISIAL_STATE, action) => {
    switch (action.type) {
        case GET_MENU_LIST:
            return {...state, menu: action.payload}
        case ADD_MENU:
            return {...state, menu: state.menu.concat(action.payload)}
        default:
            return state;
    }
}
import {ADD_MENU, GET_MENU_LIST,SELECT_MENU} from '../actions/types';

const INISIAL_STATE = {
    menu: [],
    selectedMenu:{},
}

export default (state= INISIAL_STATE, action) => {
    switch (action.type) {
        case GET_MENU_LIST:
            return {...state, menu: action.payload}
        case ADD_MENU:
            return {...state, menu: state.menu.concat(action.payload)}
        case SELECT_MENU:
            return {...state, selectedMenu: action.payload}
        default:
            return state;
    }
}
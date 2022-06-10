import axios from 'axios';
import {ADD_MENU, GET_MENU_LIST, REMOVE_MENU} from './types';

export const getMenuList = () => {
    return (dispatch) => {
        axios.get('https://api.terracesarkoy.com/api/Product/GetMenuList')

        .then(response => {
            dispatch ({
                type: GET_MENU_LIST,
                payload: response.data
            })
        })
    }
}

export const addMenu = (menu) => {
    console.log('1-------------------->', menu);
    return (dispatch) => {
        axios.post('https://api.terracesarkoy.com/api/Product/addmenu', menu)
        .then(response => {
            console.log('ADD_MENU-------------------->', response);
            dispatch ({
                type: ADD_MENU,
                payload: response.data
            })
        })
    }
}

export const removeMenu = () => {
    return (dispatch) => {
        dispatch ({
            type: REMOVE_MENU
        })
    }
}
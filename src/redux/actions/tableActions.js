import axios from 'axios';
import {GET_TABLE_LIST,ADD_TABLE} from './types';

export const getTableList = (id) => {
    return (dispatch) => {
        axios.get('https://api.terracesarkoy.com/api/Admin/GetTableListByRoomId?RoomId=' + id)
        .then(response => {
            dispatch ({
                type: GET_TABLE_LIST,
                payload: response.data
            })
        })
    }
}

export const addTable = (table) => {
    console.log('1------------>', table);
    return (dispatch) => {
        axios.post('https://api.terracesarkoy.com/api/Admin/AddTable', table)
        .then(response => {
            console.log('ADD_TABLE-------------------->', response.data);
            dispatch ({
                type: ADD_TABLE,
                payload: response.data
            })
        })
    }
}
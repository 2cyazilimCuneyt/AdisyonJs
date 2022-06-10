import axios from 'axios';
import {GET_ROOM_LIST,ADD_ROOM} from './types';

export const getRoomList = () => {
    return (dispatch) => {
        axios.get('https://api.terracesarkoy.com/api/Admin/GetRoomList')
        .then(response => {
            dispatch ({
                type: GET_ROOM_LIST,
                payload: response.data
            })
        })
    }
}

export const addRoom = (room,) => {
    console.log('2---------->', room);
    return (dispatch) => {
        axios.post('https://api.terracesarkoy.com/api/Admin/AddRoom', room)
        .then(response => {
            console.log('ADD_ROOM-------------------->', response.data);
            console.log('3---------->', response.data);
            console.log('rooms.push---------->', response.data);
            dispatch ({
                type: ADD_ROOM,
                payload: response.data
            })
        })
    }
}
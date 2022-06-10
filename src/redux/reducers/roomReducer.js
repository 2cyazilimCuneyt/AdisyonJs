import {ADD_ROOM, GET_ROOM_LIST, SELECT_ROOM} from '../actions/types';

const INISIAL_STATE = {
    room: [],
    selectedRoom: {},
}

export default (state= INISIAL_STATE, action) => {
    switch (action.type) {
        case GET_ROOM_LIST:
            return {...state, room: action.payload}
        case ADD_ROOM:
            return {...state, room: state.room.concat(action.payload)}
        case SELECT_ROOM:
            return {...state, selectedRoom: action.payload}
        default:
            return state;
    }
}
import {ADD_ROOM, GET_ROOM_LIST} from '../actions/types';

const INISIAL_STATE = {
    room: []
}

export default (state= INISIAL_STATE, action) => {
    switch (action.type) {
        case GET_ROOM_LIST:
            return {...state, room: action.payload}
        case ADD_ROOM:
            return {...state, room: state.room.concat(action.payload)}
        default:
            return state;
    }
}
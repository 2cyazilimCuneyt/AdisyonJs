import { combineReducers } from 'redux';
import MenuReducer from './menuReducer';
import ProductReducer from './productReducer';
import RoomReducer from './roomReducer';
import TableReducer from './tableReducer';

export default combineReducers({
    menu: MenuReducer,
    product: ProductReducer,
    room: RoomReducer,
    table: TableReducer,
});
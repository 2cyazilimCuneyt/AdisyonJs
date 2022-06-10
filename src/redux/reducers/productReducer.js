import { GET_PRODUCT_LIST, ADD_PRODUCT } from '../actions/types';

const INITIAL_STATE={
    products: []
 }
 
 export default (state = INITIAL_STATE, action) => {
     switch (action.type){
         case  ADD_PRODUCT:
             return {...state, products: state.products.concat(action.payload)}
         case GET_PRODUCT_LIST:
             return {...state, products: action.payload}
         default:
             return state;
     }
     
 }
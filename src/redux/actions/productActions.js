import axios from 'axios';
import {ADD_PRODUCT, GET_PRODUCT_LIST} from './types';

export const getProductList = (id) => {
    return (dispatch) => {
        axios.get('https://api.terracesarkoy.com/api/Product/GetListByMenuId?MenuId=' + id)
        .then(response => {
            dispatch ({
                type: GET_PRODUCT_LIST,
                payload: response.data
            })
        })
    }
}

export const addProduct = (product) => {
    console.log('1--------------->', product);
    return (dispatch) => {
        axios.post('https://api.terracesarkoy.com/api/Product/addproduct', product)
        .then(response => {
            console.log('2--------------->', response.data);
            dispatch ({
                type: ADD_PRODUCT,
                payload: response.data
            })
        })
    }
}
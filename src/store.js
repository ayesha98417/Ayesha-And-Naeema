import {createStore, combineReducers} from 'redux';
import 'productListReducer'

const initialState= {};
const reducer= combineReducers({
    productList= productListReducer,
})
const store= createStore(reducer, initialState);


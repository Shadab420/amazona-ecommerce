import { combineReducers} from 'redux';
import { productsListReducer, productDetailReducer } from './productReducer';

const rootReducer = combineReducers({
    productsList: productsListReducer,
    productDetail: productDetailReducer
})

export default rootReducer;
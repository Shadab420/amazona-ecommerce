import { combineReducers} from 'redux';
import { productsListReducer, productDetailReducer } from './productReducer';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
    productsList: productsListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer
})

export default rootReducer;
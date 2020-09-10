import { combineReducers} from 'redux';
import { productsListReducer } from './productsListReducer';

const rootReducer = combineReducers({
    productsList: productsListReducer
})

export default rootReducer;
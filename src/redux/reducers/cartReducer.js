import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../types/cart";

export const cartReducer = ( state = { cartItems: [] }, action) => {

    switch(action.type) {
        case CART_ADD_ITEM:

            const item = action.payload;
            const index = state.cartItems.indexOf(state.cartItems.find(x => x._id === item._id));

            if(index > -1) {
               
                const items = [...state.cartItems];
               items[index] = item;
               
               return { cartItems: [...items] };
               
            }

            return { cartItems: [...state.cartItems, item ] }
        
        case CART_REMOVE_ITEM:
            
            return {
                cartItems: state.cartItems.filter(item => item._id != action.payload)
            }
           
        default:
            return state;
    }
}
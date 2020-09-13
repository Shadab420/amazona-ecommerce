import React, { useEffect } from 'react'
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

function Cart(props) {

    const productId = props.match.params.id;
    const qty = props.location.search ? props.location.search.split('=')[1] : 1;

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [])

    return (
        <div className="cart">
            <div className="cart-list">
                {
                    cartItems.map(item => {
                        return <h3 key={item._id}></h3>
                    })
                }
            </div>

            <div className="cart-actions">

            </div>
        </div>
    )
}

export default Cart

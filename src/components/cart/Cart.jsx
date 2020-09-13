import React, { useEffect } from 'react'
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart(props) {

    const productId = props.match.params.id;
    const qty = props.location.search ? props.location.search.split('=')[1] : 1;

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();

    useEffect(() => {

        // if productId is not null then add to cart
        if(productId) {
            dispatch(addToCart(productId, qty));
        }
    }, []);

    // remove from cart
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }

    return (
        <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>Shopping Cart</h3>
                        <h3>Price</h3>
                    </li>
                    
                        {
                            cartItems.length === 0 ? <div>Cart is empty!</div>
                            : cartItems.map(item => {
                                return (
                                    <li>
                                        <div className="cart-image">
                                            <img src={item.productImage} alt="Product"/>
                                        </div>
                                        <div className="cart-name">
                                            <Link to={`/product/${item._id}`}>
                                                {item.productName}
                                            </Link>
                                            <div>
                                                Qty:
                                                <select name={qty} id="" onChange={(e) => dispatch(addToCart(item._id, e.target.value))}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                                <button type="button" onClick={()=>removeFromCartHandler(item._id)}>Delete</button>
                                            </div>
                                        </div>
                                        <div className="cart-price">${item.productPrice}</div>
                                    </li>
                                )
                            })
                        }
                </ul>
            </div>

            <div className="cart-actions">
                <h3>
                    Subtotal ({cartItems.reduce((a,c) => a + c.qty, 0)} items)
                    : ${ cartItems.reduce((a,c) => a + c.productPrice * c.qty, 0)}
                </h3>

                <button className="add-to-cart-btn" disabled = {cartItems.length === 0}>
                    Proceed to checkout
                </button>
            </div>
        </div>
    )
}

export default Cart

import React from 'react'
// import products from '../../fakeData/products';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProductDetails } from '../../redux/actions/productActions';
import { useState } from 'react';

const ProductDetail = (props) => {

    const productId = props.match.params.id;

    const productDetail = useSelector(state => state.productDetail);
    const { product, loading, error } = productDetail;

    const [quantity, setQuantity] = useState(1);
    
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(getProductDetails(productId));

        return () => {
            
        }
    }, [])

    const addToCart = () => {
        props.history.push(`/cart/${productId}?qty=${quantity}`);
    }

    return (

        loading ? <div>Loading...</div>
        : error ? <div>{error}</div>:

        <>
            <div className="back-to-list">
                <Link to="/">Back to list</Link>
            </div>

            <div className="details">
                <div className="details-image"><img src={product.productImage} alt="Product image"/></div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Stars ({product.numOfReviews} Reviews)
                        </li>
                        <li>
                            Price: 
                            <strong>${product.productPrice}</strong>
                        </li>
                        <li>
                            Description
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="details-action">
                    <ul>
                        <li>
                            Price: ${product.productPrice}
                        </li>
                        <li>
                            Status: { product.countInStock > 0 ? 'Available' : 'Unavailable'}
                        </li>
                        <li>
                            Qty: 
                            <select name="" id="" value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                                {
                                    
                                    [...Array(product.countInStock).keys()].map(x => 

                                         <option value={x+1} key={x+1}>{x+1}</option>
                                    )
                                }
                            </select>
                        </li>
                        <li>
                            { product.countInStock > 0 &&  <button onClick={()=>addToCart()}>Add to cart</button> }
                            
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProductDetail

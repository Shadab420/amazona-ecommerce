import React from 'react'
import products from '../../fakeData/products';
import { Link } from 'react-router-dom';

const ProductDetail = (props) => {

    const productId = props.match.params.id;
    const product = products.find(p => p._id == productId);

    return (
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
                            Status: {product.status}
                        </li>
                        <li>
                            Qty: 
                            <select name="" id="">
                                <option value="">select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </li>
                        <li>
                            <button>Add to cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProductDetail

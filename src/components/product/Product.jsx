import React from 'react'
import { Link } from 'react-router-dom';

const Product = (props) => {

    const { _id, productName, productImage, productBrand, productPrice, productRating, numOfReviews } = props.product;

    return (
        <>
            <div className="product">
                <Link to={'/product/' + _id }>
                    <img className="product-image" src={productImage} alt="img" />
                </Link>
                <div className="product-name">
                    <Link to={'/product/' + _id }> {productName} </Link>
                </div>
                <div className="product-brand"> {productBrand} </div>
                <div className="product-price">{productPrice}</div>
                <div className="product-rating"> {productRating} ({numOfReviews} reviews)</div>
              </div>
        </>
    )
}

export default Product

import React from 'react'

const Product = (props) => {

    const { productName, productImage, productBrand, productPrice, productRating, numOfReviews } = props.product;

    return (
        <>
            <div className="product">
                <img className="product-image" src={productImage} alt="img" />
                <div className="product-name">
                    <a href="/"> {productName} </a>
                </div>
                <div className="product-brand"> {productBrand} </div>
                <div className="product-price">{productPrice}</div>
                <div className="product-rating"> {productRating} ({numOfReviews} reviews)</div>
              </div>
        </>
    )
}

export default Product

import React from 'react';
import Product from '../product/Product';
import products from '../../fakeData/products';

const Products = () => {
    return (
        <>
            <ul className="products">

                {
                    products.map(product => <li>
                        <Product product={product} />
                    </li>)
                }


            </ul>
            
        </>
    )
}

export default Products

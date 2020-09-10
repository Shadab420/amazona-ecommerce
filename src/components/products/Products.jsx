import React, { useState, useEffect } from 'react';
import Product from '../product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../../redux/actions/productActions';

const Products = () => {

    //mapStateToProps equivelent useSelector() hook
    const productsList = useSelector(state => state.productsList);
    const { products, loading, error } = productsList;

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getProductsList());
        
        return () => {
            
        }
    }, [])

    return (

        loading ? <div>Loading</div>
        :error? <div>{error}</div>:

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

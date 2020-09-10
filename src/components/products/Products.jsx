import React, { useState, useEffect } from 'react';
import Product from '../product/Product';
import axios from 'axios';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get("http://localhost:5000/api/products");
            setProducts(data);
        }

        fetchProducts();
        return () => {
            
        }
    }, [])

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

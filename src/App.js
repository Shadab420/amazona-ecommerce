import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';

import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetail from './components/product/ProductDetail';
import Cart from './components/cart/Cart';



function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">

        <Header/>

        <main className="main">
          <div className="content">

            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/" exact component={Products} />
            <Route path="/cart/:id?" component={Cart} />
            
          </div>
        </main>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

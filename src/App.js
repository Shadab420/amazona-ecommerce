import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';



function App() {
  return (
    <div className="grid-container">

      <Header/>

      <main className="main">
        <div className="content">
          
          <Products/>

        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="grid-container">

      <Header/>

      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src={ require('./assets/images/d1.jpg') } alt="img" />
                <div className="product-name">
                  <a href="/"> Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 star (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img className="product-image" src={ require('./assets/images/d2.jpg') } alt="img" />
                <div className="product-name">
                  <a href="/"> Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 star (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img className="product-image" src={ require('./assets/images/d3.jpg') } alt="img" />
                <div className="product-name">
                  <a href="/"> Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 star (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img className="product-image" src={ require('./assets/images/p1.jpg') } alt="" />
                <div className="product-name">
                  <a href="/"> Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 star (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img className="product-image" src={ require('./assets/images/p2.jpg') } alt="img" />
                <div className="product-name">
                  <a href="/"> Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 star (10 reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img className="product-image" src={ require('./assets/images/p3.jpg') } alt="img" />
                <div className="product-name">
                  <a href="/"> Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 star (10 reviews)</div>
              </div>
            </li>

          </ul>

        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default App;

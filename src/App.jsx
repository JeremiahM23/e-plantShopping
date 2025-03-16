import React, { useState } from 'react';


import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import { useSelector } from 'react-redux';
import { selectTotalItems } from './CartSlice'; // Import the selector

function App() {

  const [showProductList, setShowProductList] = useState(false);

  // Get the total number of items in the cart
  const totalItems = useSelector(selectTotalItems); // This will return 0 if the cart is empty

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>

            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick} />
      </div>

      {/* Cart Icon with Total Item Count */}
      <div className="cart-icon-container">
        <img src="cart-icon.png" alt="Cart" />
        <span className="cart-item-count">{totalItems > 0 ? totalItems : 0}</span> {/* Display 0 if no items */}
      </div>
    </div>
  );
}

export default App;





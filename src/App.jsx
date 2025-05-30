import "./index.css"

function App() {
  return (
    <div>
      <div className="item-card">
        <img className="item-image" src="src/assets/image-product-mobile.jpg" alt="A bottle of CHANEL Paris Gabrielle Essence Eau De Parfum"/>
        <div className="item-info">
        <p className="item-category">Perfume</p>
        <h2>Gabrielle Essence Eau De Parfum</h2>
        <p className="item-desc">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="prices">
        <p className="curr-price">$149.99</p>
        <p className="prev-price">$169.99</p>
        </div>
        <button className="add-cart-btn">
          <img src="src/assets/icon-cart.svg"/>
          Add to Cart</button>
        </div>
      </div>
      {/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Chris Fagan</a>.
      </div> */}
    </div>
  );
}

export default App;

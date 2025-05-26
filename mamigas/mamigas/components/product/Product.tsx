import React from 'react'

function Product() {
  return (
    <div>
      <section className="space-top space-extra-bottom">
        <div className="container">
          {/* <div className="th-sort-bar">
            <div className="row justify-content-between align-items-center">
              <div className="col-md">
                <p className="woocommerce-result-count">
                  Showing 1–12 of 16 results
                </p>
              </div>
              <div className="col-md-auto">
                <form className="woocommerce-ordering" method="get">
                  <select
                    name="orderby"
                    className="orderby"
                    aria-label="Shop order"
                  >
                    <option value="menu_order" selected="selected">
                      Default Sorting
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </form>
              </div>
            </div>
          </div> */}
          <div className="row gy-40">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/product_1_1.jpg"
                    alt="Product Image"
                  />
                  <span className="product-tag">Sale!</span>
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                    <a href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus"></i>
                    </a>
                    <a href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <a href="shop-details.html" className="product-category">
                    Accessories
                  </a>
                  <h3 className="product-title">
                    <a href="shop-details.html">Surgery Hands Gloves</a>
                  </h3>
                  <span className="price">
                    $20.00 - <del>$30.00</del>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/product_1_2.jpg"
                    alt="Product Image"
                  />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                    <a href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus"></i>
                    </a>
                    <a href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <a href="shop-details.html" className="product-category">
                    Medicine
                  </a>
                  <h3 className="product-title">
                    <a href="shop-details.html">D-Ribose Drug Medicine</a>
                  </h3>
                  <span className="price">$39.85</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/product_1_3.jpg"
                    alt="Product Image"
                  />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                    <a href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus"></i>
                    </a>
                    <a href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <a href="shop-details.html" className="product-category">
                    Equipment
                  </a>
                  <h3 className="product-title">
                    <a href="shop-details.html">CAD Dentistry Prosthesis</a>
                  </h3>
                  <span className="price">$96.85</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/product_1_4.jpg"
                    alt="Product Image"
                  />
                  <span className="product-tag">Sale!</span>
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                    <a href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus"></i>
                    </a>
                    <a href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <a href="shop-details.html" className="product-category">
                    Accessories
                  </a>
                  <h3 className="product-title">
                    <a href="shop-details.html">Surgery Safety Mask</a>
                  </h3>
                  <span className="price">
                    $08.85 - <del>$16.99</del>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/product_1_5.jpg"
                    alt="Product Image"
                  />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                    <a href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus"></i>
                    </a>
                    <a href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <a href="shop-details.html" className="product-category">
                    Accessories
                  </a>
                  <h3 className="product-title">
                    <a href="shop-details.html">Infrared Thermometers</a>
                  </h3>
                  <span className="price">$32.85</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/product_1_6.jpg"
                    alt="Product Image"
                  />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                    <a href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus"></i>
                    </a>
                    <a href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <a href="shop-details.html" className="product-category">
                    Equipment
                  </a>
                  <h3 className="product-title">
                    <a href="shop-details.html">Drug Inhaler Nebulizers</a>
                  </h3>
                  <span className="price">$30.85</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/product_1_7.jpg"
                    alt="Product Image"
                  />
                  <span className="product-tag">Sale!</span>
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                    <a href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus"></i>
                    </a>
                    <a href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <a href="shop-details.html" className="product-category">
                    Medicine
                  </a>
                  <h3 className="product-title">
                    <a href="shop-details.html">Paracetamol Drug</a>
                  </h3>
                  <span className="price">
                    $08.85 -<del>$16.99</del>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/product_1_8.jpg"
                    alt="Product Image"
                  />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                    <a href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus"></i>
                    </a>
                    <a href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <a href="shop-details.html" className="product-category">
                    Accessories
                  </a>
                  <h3 className="product-title">
                    <a href="shop-details.html">Blood Pressure Machine</a>
                  </h3>
                  <span className="price">$30.85</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/product_1_9.jpg"
                    alt="Product Image"
                  />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                    <a href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus"></i>
                    </a>
                    <a href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <a href="shop-details.html" className="product-category">
                    Accessories
                  </a>
                  <h3 className="product-title">
                    <a href="shop-details.html">Ciprofloxacin Antibiotics</a>
                  </h3>
                  <span className="price">$32.85</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/product_1_10.jpg"
                    alt="Product Image"
                  />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                    <a href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus"></i>
                    </a>
                    <a href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <a href="shop-details.html" className="product-category">
                    Equipment
                  </a>
                  <h3 className="product-title">
                    <a href="shop-details.html">Surgery Face Mask</a>
                  </h3>
                  <span className="price">$30.85</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/product_1_11.jpg"
                    alt="Product Image"
                  />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                    <a href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus"></i>
                    </a>
                    <a href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <a href="shop-details.html" className="product-category">
                    Medicine
                  </a>
                  <h3 className="product-title">
                    <a href="shop-details.html">Auto Blood Presser Meter</a>
                  </h3>
                  <span className="price">$22.85</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/product_1_12.jpg"
                    alt="Product Image"
                  />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                    <a href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus"></i>
                    </a>
                    <a href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <a href="shop-details.html" className="product-category">
                    Accessories
                  </a>
                  <h3 className="product-title">
                    <a href="shop-details.html">
                      Multivitamin Nutrition Health
                    </a>
                  </h3>
                  <span className="price">$30.85</span>
                </div>
              </div>
            </div>
          </div>
          <div className="th-pagination text-center pt-50">
            <ul>
              <li>
                <a href="blog.html">1</a>
              </li>
              <li>
                <a href="blog.html">2</a>
              </li>
              <li>
                <a href="blog.html">3</a>
              </li>
              <li>
                <a href="blog.html">
                  <i className="far fa-arrow-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product
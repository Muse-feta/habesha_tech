"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

function Cart() {
  const [mounted, setMounted] = useState(false);

  // Ensures rendering only happens on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const { items, updateItemQuantity, removeItem, cartTotal, isEmpty } =
    useCart();

  if (!mounted) {
    return null; // Avoid rendering anything on the server
  }

  if (isEmpty) {
    return (
      <div className="flex items-center justify-center h-64">
        <h4 className="text-xl font-semibold text-gray-600">
          Your cart is empty.
        </h4>
      </div>
    );
  }

  return (
    <div>
      <div className="th-cart-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="woocommerce-notices-wrapper">
            <div className="woocommerce-message">Shipping costs updated.</div>
          </div>
          <form action="#" className="woocommerce-cart-form">
            <table className="cart_table">
              <thead>
                <tr>
                  <th className="cart-col-image">Image</th>
                  <th className="cart-col-productname">Product Name</th>
                  <th className="cart-col-price">Price</th>
                  <th className="cart-col-quantity">Quantity</th>
                  <th className="cart-col-total">Total</th>
                  <th className="cart-col-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => {
                  const quantity = item.quantity ?? 1;

                  return (
                    <tr className="cart_item" key={item.id}>
                      <td data-title="Product">
                        <a
                          className="cart-productimage"
                          href={`/product/${item.slug}`}
                        >
                          <img
                            width="91"
                            height="91"
                            src={item.image}
                            alt={item.name}
                          />
                        </a>
                      </td>
                      <td data-title="Name">
                        <a
                          className="cart-productname"
                          href={`/product/${item.slug}`}
                        >
                          {item.name}
                        </a>
                      </td>
                      <td data-title="Price">
                        <span className="amount">
                          <bdi>${item.price.toFixed(2)}</bdi>
                        </span>
                      </td>
                      <td data-title="Quantity">
                        <div className="quantity">
                          <button
                            type="button"
                            className="quantity-minus qty-btn"
                            onClick={() =>
                              updateItemQuantity(item.id, quantity - 1)
                            }
                            disabled={quantity <= 1}
                          >
                            <i className="far fa-minus"></i>
                          </button>
                          <input
                            type="number"
                            className="qty-input"
                            value={quantity}
                            min="1"
                            max="99"
                            onChange={(e) =>
                              updateItemQuantity(
                                item.id,
                                parseInt(e.target.value) || 1
                              )
                            }
                          />
                          <button
                            type="button"
                            className="quantity-plus qty-btn"
                            onClick={() =>
                              updateItemQuantity(item.id, quantity + 1)
                            }
                          >
                            <i className="far fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td data-title="Total">
                        <span className="amount">
                          <bdi>${(quantity * item.price).toFixed(2)}</bdi>
                        </span>
                      </td>
                      <td data-title="Remove">
                        <button
                          type="button"
                          className="remove"
                          onClick={() => removeItem(item.id)}
                        >
                          <i className="fal fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="cart-total text-end mt-4">
              <h6>Total: ${cartTotal.toFixed(2)}</h6>
            </div>
          </form>
          <div className="woocommerce-form-login-toggle">
            <div className="woocommerce-info">
              Returning customer?
              <a href="#" className="showlogin">
                Click here to login
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form action="#" className="woocommerce-form-login">
                <div className="form-group">
                  <label>Username or email *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username or email"
                  />
                </div>
                <div className="form-group">
                  <label>Password *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <div className="custom-checkbox">
                    <input type="checkbox" id="remembermylogin" />
                    <label htmlFor="remembermylogin">Remember Me</label>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="th-btn">
                    Login
                  </button>
                  <p className="mt-3 mb-0">
                    <a className="text-reset" href="#">
                      Lost your password?
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

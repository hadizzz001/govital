"use client";
import Header from "../_components/Header";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../_components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Get cart items from localStorage and update the state
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);

    // Calculate the total price
    const total = items.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, []);

  const handleDeleteItem = (index) => {
    // Remove item from the cartItems array
    const updatedCartItems = cartItems.filter((_, i) => i !== index);

    // Update state
    setCartItems(updatedCartItems);

    // Update localStorage with the new cartItems
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };






  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = {
      name: e.target.fname.value,
      phone: e.target.phone.value,
      address: e.target.adr.value,
    };

 

    const response = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInfo, cartItems }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Order placed successfully!");
      window.open(result.whatsappLink, "_blank"); // Open WhatsApp URL
    } else {
      alert("Failed to place order: " + result.error);
    }
  };









  return (
    <>
      <link rel="dns-prefetch" href="https://code.jquery.com/" />
      <link rel="dns-prefetch" href="https://cdn.jsdelivr.net/" />
      <link rel="dns-prefetch" href="https://maps.googleapis.com/" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
      <link
        rel="stylesheet"
        id="wp-block-library-css"
        href="../wp/wp-includes/css/dist/block-library/style.min.css@ver=6.1.7.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="classic-theme-styles-css"
        href="../wp/wp-includes/css/classic-themes.min.css@ver=1.css"
        type="text/css"
        media="all"
      />
      <link rel="stylesheet" href="../mystyle.css" type="text/css" media="all" />
      <link
        rel="stylesheet"
        id="theme-style-css"
        href="../app/themes/popcorn-theme/assets/css/popcorn-theme.css@ver=all.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="popcorn_main_font-css"
        href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900&ver=6.1.7"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="moove_gdpr_frontend-css"
        href="../app/plugins/gdpr-cookie-compliance/dist/styles/gdpr-main.css@ver=4.12.3.css"
        type="text/css"
        media="all"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        body {
          font-family: Arial;
          font-size: 17px;
          padding: 0px;
        }
        .button {
          color: #fff;
          background-color: #0b5cad;
        }
        .button:hover {
          background-color: #005891;
        }
        footer {
          background-color: #333;
        }
        .footer-top {
          background-color: #005891;
        }
      `,
        }}
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <Header />
      <div className="container">
        {cartItems.length === 0 ? (
          <h2 style={{ textAlign: "center", margin: "20px 0" }}>No items in cart</h2>
        ) : (
          <>
            <h2 className="section--title">Checkout Form</h2>
            <div className="row">
              <div className="col-50">
                <div className="container">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="fname">Full Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="John Doe" />
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" name="phone" placeholder="76 666 666" />
                        <label htmlFor="adr">Address</label>
                        <input type="text" id="adr" name="address" placeholder="Address Here..." />
                      </div>
                    </div>
                    <input type="submit" value="Checkout now" className="button btn123 p-3 mt-3 mb-3" />
                  </form>

                </div>
              </div>
              <div className="col-50">
                <div className="container">
                  <h4>
                    Cart{" "}
                    <span className="price" style={{ color: "black" }}>
                      <i className="fa fa-shopping-cart" /> <b>{cartItems.length}</b>
                    </span>
                  </h4>
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="cart-item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      {item.img && item.img[0] && (
                        <img
                          src={item.img[0]}
                          alt={item.title}
                          style={{
                            width: "50px",
                            height: "50px",
                            marginRight: "10px",
                          }}
                        />
                      )}
                      <span style={{ flex: "1" }}>{item.title}</span>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <label htmlFor="quantity">Qty:</label>
                        <input
                          type="number"
                          value={item.quantity}
                          readOnly
                          style={{
                            width: "40px",
                            textAlign: "center",
                            margin: "0 5px",
                            border: "1px solid gray",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      <span className="price" style={{ marginLeft: "10px" }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleDeleteItem(index)}
                        style={{
                          marginLeft: "10px",
                          background: "red",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "0",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ fontSize: "20px" }}
                        />
                      </button>
                    </div>
                  ))}
                  <hr />
                  <h1>
                    Total{" "}
                    <span className="price" style={{ color: "black" }}>
                      <b>
                        ${cartItems
                          .reduce(
                            (total, item) => total + item.price * item.quantity,
                            0
                          ) }
                      </b>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="footer-top mt-20">
        TO DISCUSS YOUR NEEDS CALL{" "}
        <a href="tel:+9613502927">71040388</a> |{" "}
        <a href="mailto:services@gmspowergeneration.com">services@gmspowergeneration.com</a>{" "}
      </div>
      <Footer />
    </>



  );
};

export default CheckoutPage;

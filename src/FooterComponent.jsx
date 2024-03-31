import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import gpay from "./images/payment/gpay.png";
import mastercard from "./images/payment/mastercard.jpg";
import paypal from "./images/payment/paypal.png";
import amex from "./images/payment/amex.jpg";
import applepay from "./images/payment/applepay.png";
import pay from "./images/payment/pay.jpg";
import usa from "./images/usapng.png";

function FooterComponent() {
  const currentYear = new Date().getFullYear();
  const cards = [
    { id: 1, src: gpay, alt: "Google Pay" },
    { id: 2, src: mastercard, alt: "Mastercard" },
    { id: 3, src: paypal, alt: "PayPal" },
    { id: 4, src: amex, alt: "American Express" },
    { id: 5, src: applepay, alt: "Apple Pay" },
    { id: 6, src: pay, alt: "Pay" },
  ];

  return (
    <div className="footer">
      <div className="f-div-1">
        <div className="f-b-1">
          <p className="p1">BE THE FIRST TO KNOW</p>
          <p className="p2">Sign up for updates from mettā muse.</p>
          <div className="subscribe">
            <input
              className="sub-field"
              type="text"
              placeholder="Enter your e-mail..."
            />
            <input className="sub-btn" type="button" value="SUBSCRIBE" />
          </div>
        </div>
        <div className="f-b-2">
          <p className="p1">CONTACT US</p>
          <p className="p2">+44 221 133 5360</p>
          <p className="p3">customercare@mettamuse.com</p>
          <p className="p4">CURRENCY</p>
          <div className="currency">
            <img src={usa} alt="USA flag" />
            <p className="text"> ✦ USA</p>
          </div>
          <p className="p5">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <div className="f-div-2">
        <div className="sec-1">
          <h2 className="h">mettā muse</h2>
          {Array.from({ length: 5 }, (_, index) => (
            <p key={index} className="p-text">
              {
                ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us"][
                  index
                ]
              }
            </p>
          ))}
          <p className="p-text">EU Compliances Docs</p>
        </div>
        <div className="sec-2">
          <h2 className="h">QUICK LINKS</h2>
          {Array.from({ length: 7 }, (_, index) => (
            <p key={index} className="p-text">
              {
                [
                  "Orders & Shipping",
                  "Join/Login as a Seller",
                  "Payment & Pricing",
                  "Return & Refunds",
                  "FAQs",
                  "Privacy Policy",
                  "Terms & Conditions",
                ][index]
              }
            </p>
          ))}
        </div>
        <div className="sec-3">
          <h2 className="h">FOLLOW US</h2>
          <FaInstagram className="follow-us" />
          <FaLinkedin className="follow-us" />
          <h2 className="h">mettā muse ACCEPTS</h2>
          <div className="cardbar">
            {cards.map((card) => (
              <div key={card.id} className="cards">
                <img src={card.src} alt={card.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="copywrite">
        <p>Copyright © {currentYear} mettamuse. All rights reserved.</p>
      </div>
    </div>
  );
}

export default FooterComponent;

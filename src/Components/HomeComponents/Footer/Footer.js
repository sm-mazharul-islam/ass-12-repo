import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="footer pt-5 pb-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-auto">
                <Link
                  className="navbar-brand text-light fw-bold fs-1"
                  to="/home"
                >
                  <span className="">S</span>pecial Baike...

                  <span className="color-pink">...</span>
                </Link>
                <h3 className="mt-3 text-secondary">Do You Need Help With Anything?</h3>
                <p className="w-75 foot fs-6 text fs-4">
                  Receive updates, hot deals, tutorials, discounts sent straignt
                  in your inbox every month
                </p>
                <div className="input-group mb-3 w-75 fs-1">
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-4 footerLink">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;

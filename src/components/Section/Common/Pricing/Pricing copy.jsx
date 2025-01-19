"use client";

import Link from "next/link";
import { useState } from "react";
import { Image } from "react-bootstrap";
const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const priceToggole = () => {
    setIsMonthly(!isMonthly);
  };
  return (
    <div className="section zubuz-section-padding3">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Bảng giá</h2>
        </div>
        <div className="pricing-btn">
          <div className="toggle-btn">
            <label>Monthly </label>
            <input
              className="form-check-input btn-toggle price-deck-trigger"
              type="checkbox"
              id="flexSwitchCheckDefault"
              data-pricing-trigger
              data-target="#table-price-value"
              //   checked
              onClick={priceToggole}
            />
            <label>Annually</label>
          </div>
        </div>
        <div
          className="row zubuz-pricing-four-column"
          id="table-price-value"
          data-pricing-dynamic
          data-value-active="monthly"
        >
          <div className="col-xl-3 col-md-6">
            <div className="zubuz-pricing-wrap">
              <div className="zubuz-pricing-header">
                <h5>Website</h5>
              </div>
              <div className="zubuz-pricing-price">
                <h2>$</h2>
                <div
                  className="zubuz-price dynamic-value"
                >
                  {isMonthly ? 0 : 19}
                </div>
                <p
                  className="dynamic-value"
                >
                  /{isMonthly ? "Monthly" : "Yearly"}
                </p>
              </div>
              <div className="zubuz-pricing-description">
                <p>This plan is typically limited in features and usage</p>
              </div>
              <div className="zubuz-pricing-body">
                <p>Free plan includes:</p>
                <ul>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    Basic features
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    Limited users & usage
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    No customer support
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    30 day chat history
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    10 Integrations
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn" href="contact-us">
                Try it for free
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="zubuz-pricing-wrap">
              <div className="zubuz-pricing-header">
                <h5>Thiết kế Logo</h5>
              </div>
              <div className="zubuz-pricing-price">
                <h2>$</h2>
                <div
                  className="zubuz-price dynamic-value"
                >
                  {isMonthly ? 19 : 39}
                </div>
                <p
                  className="dynamic-value"
                >
                  /{isMonthly ? "Monthly" : "Yearly"}
                </p>
              </div>
              <div className="zubuz-pricing-description">
                <p>A simple and affordable plan only for small businesses</p>
              </div>
              <div className="zubuz-pricing-body">
                <p>Basic plan includes:</p>
                <ul>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    Core features
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    Increased limits
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    Priority support
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    Unlimited chat history
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    20 Integrations
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn" href="contact-us">
                Try it for free
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="zubuz-pricing-wrap active">
              <div className="zubuz-pricing-header">
                <h5>Wifi-marketing</h5>
              </div>
              <div className="zubuz-pricing-price">
                <h2>$</h2>
                <div
                  className="zubuz-price dynamic-value"
                >
                  {isMonthly ? 29 : 59}
                </div>
                <p
                  className="dynamic-value"
                >
                  /{isMonthly ? "Monthly" : "Yearly"}
                </p>
              </div>
              <div className="zubuz-pricing-description">
                <p>This plan is geared toward growing businesses</p>
              </div>
              <div className="zubuz-pricing-body">
                <p>Standard plan includes:</p>
                <ul>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    Expanded features
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    Increased users
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    Priority email support
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    Unlimited chat history
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    30 Integrations
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn active" href="contact-us">
                Try it for free
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="zubuz-pricing-wrap">
              <div className="zubuz-pricing-header">
                <h5>Chatbot WeAI</h5>
              </div>
              <div className="zubuz-pricing-price">
                <h2>$</h2>
                <div
                  className="zubuz-price dynamic-value"
                >
                  {isMonthly ? 50 : 99}
                </div>
                <p
                  className="dynamic-value"
                >
                  /{isMonthly ? "Monthly" : "Yearly"}
                </p>
              </div>
              <div className="zubuz-pricing-description">
                <p>Tailored to the unique needs of large enterprises</p>
              </div>
              <div className="zubuz-pricing-body">
                <p>Enterprise plan includes:</p>
                <ul>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    Customized features
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    Scalability & security{" "}
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    Account manager
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    Unlimited chat history
                  </li>
                  <li>
                    <Image src="/images/v3/check.png" alt="" />
                    50 Integrations
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn" href="contact-us">
                Try it for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

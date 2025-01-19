"use client";

import Link from "next/link";
import { useState } from "react";
import PricingCard from "~/components/Ui/Cards/Pricing";
import { Image } from "react-bootstrap";
const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const priceToggole = () => {
    setIsMonthly(!isMonthly);
  };
  return (
    <div className="section zubuz-section-padding3 bg-light position-relative">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Giá tham khảo</h2>
        </div>
        <div className="pricing-btn">
          <label>Tháng</label>
          <div className="toggle-btn">
            <input
              className="form-check-input btn-toggle price-deck-trigger"
              type="checkbox"
              id="flexSwitchCheckDefault"
              data-pricing-trigger
              data-target="#table-price-value"
              onClick={priceToggole}
              checked={isMonthly}
            />
          </div>
          <label>Năm</label>
        </div>
        <div
          className="row"
          id="table-price-value"
          data-pricing-dynamic
          data-value-active="monthly"
        >
          <div className="col-xl-4 col-md-6"></div>
          <div className="col-xl-4 col-md-6">
            <div className="zubuz-pricing-wrap active">
              <div className="zubuz-pricing-header">
                <h5>Chatbot WeAI</h5>
              </div>
              <div className="zubuz-pricing-price">
                <div className="zubuz-price dynamic-value">
                  {isMonthly ? 2 : 24}
                </div>
                <h2>Tr</h2>
                <p className="dynamic-value">
                  VNĐ/{isMonthly ? "tháng" : "năm"}
                </p>
              </div>
              <div className="zubuz-pricing-description">
                <p></p>
              </div>
              <div className="zubuz-pricing-body">
                <ul>
                  <li>
                    <Image src="/images/v2/check-weamis-2.png" alt="" />
                    Tương tác thông minh 24/7
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-2.png" alt="" />
                    Tự động giao tiếp không cần kịch bản
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-2.png" alt="" />
                    Tích hợp đa nền tảng
                  </li>
                  <li >
                    <Image src="/images/v2/check-weamis-2.png" alt="" />
                    Phân tích dữ liệu thông minh
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-2.png" alt="" />
                    Học máy và cải tiến liên tục
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn active" href="connect">
                Bắt đầu ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="zubuz-pricing-shape">
        <Image src="/images/v2/weamis-circle-03.png" alt="" />
      </div>
    </div>
  );
};

export default PricingSection;

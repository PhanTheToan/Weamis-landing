"use client";

import Link from "next/link";
import { Image } from "react-bootstrap";
const PricingSection = () => {
  return (
    <div className="section zubuz-section-padding3">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Bảng giá tham khảo</h2>
        </div>
        <div
          className="row zubuz-pricing-four-column"
          id="table-price-value"
          data-pricing-dynamic
          data-value-active="monthly"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <div className="col-xl-3 col-md-6" style={{ flex: "1 1 25%", boxSizing: "border-box" }}>
            <div className="zubuz-pricing-wrap" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <div className="zubuz-pricing-header">
                <h5>Website</h5>
              </div>
              <div className="zubuz-pricing-price">
                <div className="zubuz-price dynamic-value">5</div>
                <h2>Tr+</h2>
                <p
                  className="dynamic-value"
                >
                  VNĐ
                </p>
              </div>
              <div className="zubuz-pricing-description" style={{ minHeight: "50px" }}>
                <p></p>
              </div>
              <div className="zubuz-pricing-body" style={{ flex: "1" }}>
                <p>Dịch vụ Website:</p>
                <ul>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Thiết kế giao diện tùy chỉnh
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Tối ưu hóa SEO toàn diện
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Hỗ trợ kỹ thuật 24/7
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Tích hợp các công cụ Marketing
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Chức năng bảo mật nâng cao
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn align-btn" href="contact-us">
                Bắt đầu ngay
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-md-6" style={{ flex: "1 1 25%", boxSizing: "border-box" }}>
            <div className="zubuz-pricing-wrap" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <div className="zubuz-pricing-header">
                <h5>Thiết kế Logo</h5>
              </div>
              <div className="zubuz-pricing-price">
                <div className="zubuz-price dynamic-value">1</div>
                <h2>Tr+</h2>
                <p
                  className="dynamic-value"
                >
                  VNĐ
                </p>
              </div>
              <div className="zubuz-pricing-description" style={{ minHeight: "50px" }}></div>
              <div className="zubuz-pricing-body" style={{ flex: "1" }}>
                <p>Thiết kế Logo:</p>
                <ul>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Thiết kế độc quyền
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Nhiều phiên bản & tùy chỉnh
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Định dạng đầu ra đa dạng
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Hỗ trợ nhận diện thương hiệu
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Chỉnh sửa không giới hạn
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn align-btn" href="contact-us">
                Bắt đầu ngay
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-md-6" style={{ flex: "1 1 25%", boxSizing: "border-box" }}>
            <div className="zubuz-pricing-wrap" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <div className="zubuz-pricing-header">
                <h5>Wifi-marketing</h5>
              </div>
              <div className="zubuz-pricing-price">
                <h2 style={{ fontSize: "4.6rem" }}>Liên hệ</h2>
              </div>
              <div className="zubuz-pricing-description" style={{ minHeight: "50px" }}></div>
              <div className="zubuz-pricing-body" style={{ flex: "1" }}>
                <p>Dịch vụ Wifi-marketing:</p>
                <ul>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Cổng đăng nhập tùy chỉnh
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Phân tích dữ liệu khách hàng
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Chiến dịch tiếp thị tự động
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Tích hợp mạng xã hội
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Quản lý người dùng hàng loạt
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn align-btn" href="contact-us">
                Bắt đầu ngay
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-md-6" style={{ flex: "1 1 25%", boxSizing: "border-box" }}>
            <div className="zubuz-pricing-wrap" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <div className="zubuz-pricing-header">
                <h5>Chatbot WeAI</h5>
              </div>
              <div className="zubuz-pricing-price">
                <h2 style={{ fontSize: "4.6rem" }}>Liên hệ</h2>
              </div>
              <div className="zubuz-pricing-description" style={{ minHeight: "50px" }}></div>
              <div className="zubuz-pricing-body" style={{ flex: "1" }}>
                <p>Dịch vụ Chatbot WeAI:</p>
                <ul>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Tương tác thông minh 24/7
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Tự động giao tiếp không cần kịch bản
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Tích hợp đa nền tảng
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Phân tích dữ liệu thông minh
                  </li>
                  <li>
                    <Image src="/images/v2/check-weamis-3.png" alt="" />
                    Học máy và cải tiến liên tục
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn align-btn" href="contact-us">
                Bắt đầu ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

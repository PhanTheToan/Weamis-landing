/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from 'react';
import Link from "next/link";
import axios from 'axios';
import { Image } from 'react-bootstrap';
const HeroSection = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Kiểm tra message có trống không
    if (!message.trim()) {
      alert('Vui lòng nhập tin nhắn');
      return;
    }

    setIsSubmitting(true);
    try {
      const sendEmail = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, email }),
      });
      const response = await fetch('/api/response-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, email }),
      });

      const data = await sendEmail.json();

      if (!response.ok && !sendEmail.ok) {
        throw new Error(data.error || 'Có lỗi xảy ra');
      }

      alert('Gửi tin nhắn thành công!');
      setMessage('');

    } catch (error) {
      console.error('Lỗi:', error);
      alert('Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="zubuz-hero-section">
      <div className="container">
        <div className="zubuz-hero-content center">
          <h1>
            Weamis <br />Technology Solutions
            <span className="zubuz-title-shape">
              <Image src="/weamis/logo-geometry.png" alt="Weamis Pattern" style={{ width: '90%', opacity: 0.3 }} />
            </span>
          </h1>
          <p>
            Chúng tôi cung cấp các giải pháp công nghệ tối ưu, thân thiện và dễ sử dụng, giúp doanh nghiệp của bạn tiếp
            cận và sử dụng các công cụ phần mềm cần thiết một cách hiệu quả.
          </p>
          <div className="zubuz-extara-mt">
            <div className="zubuz-subscribe-three" style={{ maxWidth: '1142px' }}>
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0px', alignItems: 'center' }}>

                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    borderTopLeftRadius: '100px',
                    borderBottomLeftRadius: '100px',
                    borderTopRightRadius: '0',
                    borderBottomRightRadius: '0',
                    maxWidth: '350px',
                    overflow: 'hidden',
                    opacity: isExpanded ? '0' : '100'

                  }}
                />

                <textarea
                  placeholder="Để lại tin nhắn của bạn gửi tới chúng tôi"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    flex: 1,
                    height: isExpanded ? '250px' : '60px',
                    borderTopLeftRadius: isExpanded ? '50px' : '0px',
                    borderBottomLeftRadius: isExpanded ? '50px' : '0px',
                    borderTopRightRadius: '50px',
                    borderBottomRightRadius: '50px',
                    overflow: 'hidden'
                  }}

                />
                <button
                  className="zubuz-default-btn zubuz-subscription-btn three"
                  id="zubuz-subscription-btn"
                  type="submit"
                  style={{
                    top: isExpanded ? '105px' : '5px',
                    opacity: isExpanded ? '0' : '100',

                  }}
                >
                  <span>{isSubmitting ? "Đang gửi" : "connect@weamis.com"}</span>
                </button>
                <div className="zubuz-input-email"
                  style={{ top: isExpanded ? '110px' : '14px', opacity: isExpanded ? '0' : '100' }}


                >
                  <Image src="/images/icon/email2.svg" alt="" />
                </div>
                <div className={`zubuz-input-message `}
                  onMouseEnter={() => {

                    setIsExpanded(true); // Mở rộng textarea khi di chuột vào hình ảnh
                  }}
                  onMouseLeave={() => {

                    setIsExpanded(false); // Khôi phục chiều cao textarea khi bỏ chuột
                  }}
                >
                  <Image src="/images/v2/zoom.png" alt="" />

                </div>
              </form>
            </div>
            <div className="zubuz-icon-list">
              <ul>
                <li>
                  <Image src="/weamis/check-icon-small.png" alt="" style={{ width: '20px' }} /> Cá nhân hóa giải pháp
                </li>
                <li>
                  <Image src="/weamis/check-icon-small.png" alt="" style={{ width: '20px' }} /> Hỗ trợ khách hàng 24/7
                </li>
                <li>
                  <Image src="/weamis/check-icon-small.png" alt="" style={{ width: '20px' }} /> Tự động hoá quy trình
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="zubuz-border-btoom">
          <div className="zubuz-hero-thumb3">
            <Image src="/weamis/hero-section-2.jpeg" alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(0.7px)' }} />
            <div className="zubuz-hero-thumb-card1">
              <Image src="/images/v3/card-v3-1.png" alt="" />
            </div>
            <div className="zubuz-hero-thumb-card2">
              <Image src="/images/v3/card-v3-2.png" alt="" />
            </div>
            <div className="zubuz-hero-thumb-card3">
              <Image src="/images/v3/card-v3-3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

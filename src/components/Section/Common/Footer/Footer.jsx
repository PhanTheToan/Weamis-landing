/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from 'react';
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Image } from 'react-bootstrap';
const Footer = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Kiểm tra message có trống không
    if (!message.trim()) {
      alert('Vui lòng nhập tin nhắn');
      return;
    }

    setIsSubmitting(true);
    try {
      const emailSend = await fetch('/api/message', {
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

      const data = await emailSend.json();

      if (!emailSend.ok && !response.ok) {
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

    <footer className="zubuz-footer-section main-footer white-bg">
      <div className="container">
        <div className="zubuz-footer-top">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              <div className="zubuz-footer-textarea">
                <Link href="">
                  <Image src="/weamis/logo.png" alt="" style={{ height: '50px' }} />
                </Link>
                <p>
                  Weamis là đối tác mới của bạn, cung cấp các chiến lược nâng cao hỗ trợ thúc đẩy công ty, cũng như người bạn đồng hành trong thời kỳ chuyển đổi số.
                </p>
                <div className="zubuz-form-wrap">
                  <form onSubmit={handleSubscribe}>
                    <div className="zubuz-main-form">
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="zubuz-main-form">
                      <textarea
                        type="text"
                        placeholder="Để lại tin nhắn của bạn gửi tới chúng tôi"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ height: '100px' }}
                      />
                    </div>
                    <button
                      id="zubuz-submit-btn" type="submit" disabled={isSubmitting}
                    >
                      <span>{isSubmitting ? 'Đang gửi...' : 'connect@weamis.com'}</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-1"></div>
            <div className="col-xl-2 col-md-6">
              <div className="zubuz-footer-menu extar-margin">
                <div className="zubuz-footer-title">
                  <p>Điều hướng</p>
                </div>
                <ul>
                  <li>
                    <Link href="/">Weamis</Link>
                  </li>
                  <li>
                    <Link href="/weAI">WeAI</Link>
                  </li>
                  <li>
                    <Link href="/Website">Website</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="zubuz-footer-menu extar-margin">
                <div className="zubuz-footer-title">
                  <p>Thông tin liên hệ</p>
                </div>
                <ul>
                  <li>
                    <Link href="">
                      <Image src="/weamis/phone-icon.png" alt="" style={{ marginRight: '10px', width: '7%', height: 'auto' }} />
                      0389791310
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <Image src="/weamis/mail-icon.png" alt="" style={{ marginRight: '10px', width: '7%', height: 'auto' }} />
                      connect@weamis.com
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <Image src="/weamis/location-icon.png" alt="" style={{ marginRight: '10px', width: '7%', height: 'auto' }} />
                      Ha Noi, Viet Nam
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <Image src="/weamis/location-icon.png" alt="" style={{ marginRight: '10px', width: '7%', height: 'auto' }} />
                      Aubiere, France
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="zubuz-footer-bottom">
          <div className="zubuz-social-icon order-md-2">
            <ul>
              <li>
                <a href="https://www.facebook.com/weamis.tech.solutions" target="_blank">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/weamis" target="_blank">
                  <FaLinkedin />
                </a>
              </li>

            </ul>
          </div>
          <div className="zubuz-copywright">
            <p> &copy;Copyright 2024, All Rights Reserved by Weamis Tech Solutions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

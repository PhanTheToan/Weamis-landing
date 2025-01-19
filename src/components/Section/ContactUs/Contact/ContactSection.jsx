"use client"
import Link from "next/link";
import { useState } from "react";
import { FaTwitter, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";


const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Vui lòng nhập email hợp lệ');
      return;
    }

    setIsSubmitting(true);
    try {
      const emailSending = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          service,
          description
        }),
      });
      const response = await fetch('/api/response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          service,
          description
        }),
      });

      if (!emailSending.ok && !response.ok) {
        throw new Error('Network response was not ok');
      }
      alert('Gửi thông tin thành công!');

      // Reset form
      setName('');
      setEmail('');
      setService('');
      setDescription('');

    } catch (error) {
      console.error('Lỗi khi gửi form:', error);
      alert('Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="section zubuz-section-padding2 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="zubuz-default-content m-right">
              <h2>Liên hệ tới Weamis</h2>
              <p>
                Đặt lịch hẹn với đội ngũ của chúng tôi ngay bây giờ! Nếu bạn có bất kỳ câu hỏi nào về việc phát triển doanh nghiệp, hãy liên hệ với chúng tôi và lên lịch một cuộc gọi
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-iconbox-wrap-left d-block">
                  <div className="zubuz-iconbox-data data-small">
                    <span>Địa chỉ:</span>
                    <p>Ha Noi, Viet Nam.<br />
                      Aubiere, France.</p>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left d-block">
                  <div className="zubuz-iconbox-data data-small">
                    <span>Kết nối:</span>
                    <div className="zubuz-social-icon social-box">
                      <ul>

                        <li>
                          <Link href="https://www.facebook.com/weamis.tech.solutions">
                            <FaFacebookF />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/company/weamis">
                            <FaLinkedin />
                          </Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="zubuz-form-wrap">
              <h3>Điền thông tin liên hệ</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="zubuz-main-form">
                      <input
                        type="text"
                        placeholder="Họ và tên*"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="zubuz-main-form">
                      <input
                        type="email"
                        placeholder="Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="zubuz-main-form">
                  <input
                    type="text"
                    placeholder="Dịch vụ đăng kí*"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                  />
                </div>
                <div className="zubuz-main-form">
                  <textarea
                    placeholder="Mô tả yêu cầu chi tiết"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <button id="zubuz-submit-btn" type="submit" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Đang gửi...' : 'Gửi'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default ContactSection;

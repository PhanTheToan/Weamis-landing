import styles from './ContentOne.module.css';
import { Image } from 'react-bootstrap';
const ContentSectionTwo = () => {
  return (
    <div className="section zubuz-section-padding5 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div className={`${styles.shineAndFloat} zubuz-thumb thumb-pr`}>
              <Image src="/images/imageAI/robot6.png" alt="" style={{ marginTop: '50px', height: '500px', objectFit: 'contain' }} />
              <div className="zubuz-thumb-card2">
                {/* <Image src="/images/imageAI/phone.png" alt="" /> */}
              </div>
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="zubuz-default-content">
              <h2>Chatbot tự động & tích hợp Messenger</h2>
              <p>
                Dễ dàng triển khai chatbot để tương tác với khách hàng, quản lý đặt chỗ và cung cấp thông tin nhanh chóng.
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-iconbox-wrap-left">
                  <div className="zubuz-iconbox-icon" style={{ backgroundColor: '#e6c166' }}>
                    <Image src="/images/v1/vantay.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data">
                    <span>Cá nhân hóa dịch vụ</span>
                    <p>
                      Tùy chỉnh chatbot theo nhu cầu cụ thể của doanh nghiệp, từ nhà hàng đến cửa hàng bán lẻ, tạo ra trải nghiệm độc đáo cho khách hàng.
                    </p>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left">
                  <div className="zubuz-iconbox-icon" style={{ backgroundColor: '#e6c166' }}>
                    <Image src="/images/v1/cole-1.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data">
                    <span>Phân tích Dữ Liệu Thông Minh</span>
                    <p>
                      Chúng tôi cung cấp báo cáo và phân tích chi tiết về hành vi khách hàng, giúp doanh nghiệp đưa ra quyết định chiến lược tốt hơn.
                    </p>
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

export default ContentSectionTwo;

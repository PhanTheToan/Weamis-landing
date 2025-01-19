import styles from './ContentOne.module.css';
import { Image } from 'react-bootstrap';
const ContentSectionOne = () => {
  return (
    <div className="section zubuz-section-padding2 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className={`${styles.shineAndFloat} zubuz-thumb thumb-pr`}>
              <Image src="/images/imageAI/robot5.png" alt="" style={{ marginTop: `50px` }} />
              {/* <div className="zubuz-thumb-card">
                <Image src="/images/imageAI/robotThink.png" alt="" style={{height: `200px`} }/>
              </div> */}
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="zubuz-default-content">
              <h2>Nâng cao hiệu quả kinh doanh - WeAI</h2>
              <p >
                WeAI giúp doanh nghiệp tối ưu hóa quy trình làm việc và cải thiện dịch vụ khách hàng.
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-iconbox-wrap-left">
                  <div className="zubuz-iconbox-icon" style={{ backgroundColor: '#e6c166', marginLeft: 20 }}>
                    <Image src="/images/v1/robot-1.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data">
                    <span>Hỗ trợ nhân viên 24/7</span>
                    <p>
                      Giúp giảm tải công việc cho nhân viên, cho phép họ tập trung vào nhiệm vụ quan trọng hơn, đồng thời đảm bảo khách hàng nhận được phản hồi nhanh chóng
                    </p>
                  </div>

                </div>
                <div className="zubuz-iconbox-wrap-left">
                  <div className="zubuz-iconbox-icon" style={{ marginLeft: 20 }}>
                    <Image src="/images/v1/bong-den-2.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data">
                    <span>Tích hợp công nghệ AI tiên tiến</span>
                    <p>
                      Dễ dàng tích hợp vào fanpage, giúp doanh nghiệp nâng cao sự hiện diện trực tuyến và cải thiện trải nghiệm khách hàng một cách hiệu quả
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ContentSectionOne;

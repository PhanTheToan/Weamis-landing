/* eslint-disable react/no-unescaped-entities */
import { Image } from "react-bootstrap";
const ContentSection = () => {
  return (
    <div className="section zubuz-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xl-12">
            <div className="zubuz-v3-thumb">
              <Image src="/weamis/aboutusgroup.jpg" alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              <div className="zubuz-v2-thumb-shape">
                <Image src="/images/v2/shape-line.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-11 mt-5">
            <div className="zubuz-default-content m-left">
              <h2>Giá trị cốt lõi của chúng tôi định hình công việc</h2>
              <p>
                Chúng tôi cam kết đơn giản hóa các quy trình phức tạp, thúc đẩy sự hợp tác và nâng cao thành công của bạn.
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-iconbox-wrap-left mw-100">
                  <div className="zubuz-iconbox-icon none-bg">
                    <Image src="/images/about/icon1.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data data-small">
                    <span>Đổi Mới & Hợp Tác:</span>
                    <p>
                      Chúng tôi khuyến khích sự sáng tạo và cải tiến liên tục, xây dựng một văn hóa đổi mới. Chúng tôi tin vào sức mạnh của làm việc nhóm.
                    </p>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left mw-100">
                  <div className="zubuz-iconbox-icon none-bg">
                    <Image src="images/about/icon2.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data data-small">
                    <span>Chất Lượng & Khách Hàng Là Trung Tâm:</span>
                    <p>
                      Chúng tôi cam kết mang đến giá trị xuất sắc. Chúng tôi duy trì tiêu chuẩn cao nhất về sự trung thực và đạo đức trong mọi việc chúng tôi làm.
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

export default ContentSection;

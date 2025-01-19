import { Image } from "react-bootstrap";
const ContentSection = () => {
  return (
    <div className="section zubuz-section-padding5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="zubuz-v3-thumb">
              <Image src="/weamis/group-1.jpg" alt="" />
              <div className="zubuz-v2-thumb-shape">
                <Image style={{ width: '50%', height: 'auto' }} src="/images/v2/weamis-circle-02.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="zubuz-default-content m-left">
              <h2>Đáp ứng nhu cầu thị trường
              </h2>
              <p>
                Trong bối cảnh thị trường không ngừng biến đổi, khả năng linh hoạt để đáp ứng nhu cầu của khách hàng là yếu tố sống còn đối với các doanh nghiệp khởi nghiệp. Các thách thức chính mà họ phải đối mặt
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-iconbox-wrap-left mw-100">
                  <div className="zubuz-iconbox-icon none-bg">
                    <Image src="/images/v3/icon11.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data data-small">
                    <span>Khó khăn trong tiếp cận công nghệ và tự động hóa</span>
                    <p>
                      Giải pháp linh hoạt của chúng tôi giúp tùy chỉnh theo nhu cầu với chi phí hợp lý, tiết kiệm thời gian và nâng cao hiệu quả.
                    </p>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left mw-100">
                  <div className="zubuz-iconbox-icon none-bg">
                    <Image src="/images/v3/icon10.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data data-small">
                    <span>Tối ưu quản lý nhân sự và hỗ trợ phát triển</span>
                    <p>
                      Phần mềm của chúng tôi giúp giảm bớt khối lượng công việc cho nhân viên, tự động hóa các nhiệm vụ thường xuyên, từ đó cải thiện hiệu suất và giảm chi phí cho các doanh nghiệp mới.
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

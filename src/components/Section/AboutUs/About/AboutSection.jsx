/* eslint-disable react/no-unescaped-entities */
import { Image } from "react-bootstrap";
const AboutSection = () => {
  return (
    <div className="section zubuz-section-padding3">
      <div className="container">
        <div className="zubuz-section-title zubuz-two-column-title">
          <div className="row">
            <div className="col-lg-7">
              <h2>Dịch vụ thiết kế đa dạng, bắt mắt</h2>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <p>
                Chúng tôi cam kết nâng cao trải nghiệm của bạn thông qua công nghệ. Hành trình của chúng tôi được thúc đẩy bởi sự đổi mới và chất lượng. Chúng tôi tin rằng công nghệ không chỉ là công cụ, mà còn là cầu nối giúp bạn dễ dàng tiếp cận thông tin và dịch vụ.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="zubuz-about-thumb">
              <Image src="/images/imageWeb/banconghanoi.com.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="zubuz-about-thumb">
              <Image src="/images/imageWeb/lalot.jpeg" alt="" />
            </div>
            <div className="zubuz-about-thumb">
              <Image src="/images/imageWeb/web7.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="zubuz-about-thumb">
              <Image src="/images/imageWeb/xine.jpeg" alt="" />
            </div>
            <div className="zubuz-about-thumb">
              <Image src="/images/imageWeb/chamgourmet-1.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

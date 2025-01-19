import { Image } from "react-bootstrap";
const CallUsSection = () => {
  return (
    <div className="section dark-bg zubuz-section-padding6 dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <a href="tel:123">
              <div className="zubuz-iconbox-wrap-left text-center-lg rt-mb-24">
                <div className="zubuz-iconbox-icon">
                  <Image src="/images/icon/call2.svg" alt="" />
                </div>
                <div className="zubuz-iconbox-data light">
                  <h3>Số điện thoại</h3>
                  <p>
                    0389791310
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="mailto:name@email.com">
              <div className="zubuz-iconbox-wrap-left text-center-lg rt-mb-24">
                <div className="zubuz-iconbox-icon">
                  <Image src="/images/icon/email3.svg" alt="" />
                </div>
                <div className="zubuz-iconbox-data light">
                  <h3>Email</h3>
                  <p>
                    connect@weamis.com

                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="zubuz-iconbox-wrap-left text-center-lg rt-mb-24">
              <div className="zubuz-iconbox-icon">
                <Image src="/images/icon/map2.svg" alt="" />
              </div>
              <div className="zubuz-iconbox-data light">
                <h3>Địa chỉ</h3>
                <p>
                  Ha Noi, Viet Nam. <br />
                  Aubiere, France.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUsSection;

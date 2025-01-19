"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Image } from "react-bootstrap";
const ContentSectionOne = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("zubuz-counter");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="section zubuz-section-padding2">
      <div id="zubuz-counter"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="zubuz-v2-thumb thumb-mr">
              <Image src="/weamis/handshake.jpg" alt="" />
              <div className="zubuz-v2-thumb-shape">
                <Image src="/images/v2/shape-line.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="zubuz-default-content">
              <h2>Cải thiện dịch vụ khách hàng.</h2>
              <p>
                Weamis cung cấp những giải pháp tối ưu giúp doanh nghiệp nâng cao hiệu quả hoạt động và tự động hóa quy trình. Chúng tôi luôn sẵn sàng đồng hành cùng bạn trong từng bước đi, từ khởi đầu đến khi hoàn thành, với một ngân sách hợp lý. Cam kết của chúng tôi là tìm ra những giải pháp phù hợp nhất để thúc đẩy sự phát triển bền vững cho bạn.
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-counter-wrap">
                  <div className="zubuz-counter-data">
                    <h2 className="zubuz-counter-number">
                      <span data-percentage="99" className="zubuz-counter">
                        {isVisible ? <CountUp end={100} duration={5} /> : 100}
                      </span>
                      %
                    </h2>
                    <p>Khách hàng của chúng tôi hài lòng <br />về dịch vụ weamis cung cấp</p>
                  </div>
                  <div className="zubuz-counter-data">
                    <h2 className="zubuz-counter-number">
                      <span data-percentage="3.5" className="zubuz-counter">
                        {isVisible ? <CountUp end={15} duration={5} /> : 15}
                      </span>
                      +
                    </h2>
                    <p>Dự án phát triển cùng <br />các doanh nghiệp</p>
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

export default ContentSectionOne;

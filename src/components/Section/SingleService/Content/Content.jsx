import { FaCode } from "react-icons/fa6";
import { AiFillMerge } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbSettingsCode } from "react-icons/tb";

import styles from  "./Content.module.css";
const ContentSection = () => {
  return (
    <div className={`${styles['padding__top']} section zubuz-section-padding5 `}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="zubuz-default-content m-right-50">
              <h2>Quy trình thiết kế website chuyên nghiệp</h2>
              <ul className={styles['custom-bullets']}>
                <li>Chúng tôi cung cấp dịch vụ hỗ trợ đa kênh, bao gồm chat trực tuyến, email, điện thoại. Đội ngũ hỗ trợ chuyên nghiệp và tận tâm luôn sẵn sàng giải đáp mọi thắc mắc của bạn.</li>
                <li>Ngoài ra, chúng tôi còn cung cấp kho tài liệu phong phú với các bài viết hướng dẫn, câu hỏi thường gặp, giúp bạn dễ dàng tự tìm kiếm thông tin.</li>
              </ul>
              {/* <p>
              </p>
              <p>
              
              </p> */}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="zubuz-default-content">
              <div className="zubuz-iconbox-wrap-left mw-100">
                <div className="zubuz-iconbox-icon none-bg">
                <AiFillMerge />
                </div>
                <div className="zubuz-iconbox-data data-small">
                  <span>Tiếp nhận yêu cầu:</span>
                  <p>
                      Nắm bắt mong muốn, mục tiêu, yêu cầu về tính năng, phong cách thiết kế...
                  </p>
                </div>
              </div>
              <div className="zubuz-iconbox-wrap-left mw-100">
                <div className="zubuz-iconbox-icon none-bg">
                <HiOutlineLightBulb />
                </div>
                <div className="zubuz-iconbox-data data-small">
                  <span>Lên kế hoạch chi tiết:</span>
                  <p>
                  Phác thảo sơ đồ website, lựa chọn công nghệ, tên miền, hosting...
                  </p>
                </div>
              </div>
              <div className="zubuz-iconbox-wrap-left mw-100">
                <div className="zubuz-iconbox-icon none-bg">
                <FaCode />
                </div>
                <div className="zubuz-iconbox-data data-small">
                  <span>Thiết kế giao diện:</span>
                  <p>
                    Tạo giao diện đẹp mắt, thân thiện, phù hợp với thương hiệu.
                  </p>
                </div>
              </div>
              <div className="zubuz-iconbox-wrap-left mw-100">
                <div className="zubuz-iconbox-icon none-bg">
                <FaArrowTrendUp />
                </div>
                <div className="zubuz-iconbox-data data-small">
                  <span>Phát triển website:</span>
                  <p>
                  Lập trình tính năng, tích hợp nội dung, tối ưu SEO<br></br>Kiểm tra kỹ lưỡng website trên các thiết bị và trình duyệt.
                  </p>
                </div>
              </div>
              <div className="zubuz-iconbox-wrap-left mw-100">
                <div className="zubuz-iconbox-icon none-bg">
                <TbSettingsCode />
                </div>
                <div className="zubuz-iconbox-data data-small">
                  <span> Bàn giao, bảo trì và hỗ trợ:</span>
                  <p>Bàn giao website hoàn chỉnh, hướng dẫn sử dụng. <br></br>Nâng cấp, bảo trì website, hỗ trợ kỹ thuật.
                  </p>
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

import styles from './ContentOne.module.css';
import { Image } from 'react-bootstrap';
const ContentSectionThree = () => {
  return (
    <div className="section zubuz-section-padding2 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className={`${styles.shineAndFloat} zubuz-thumb thumb-pr`}>
              <Image src="/images/imageAI/robot4.png" alt="" style={{ marginTop: `50px` }} />
              {/* <div className="zubuz-thumb-card">
                <Image src="/images/imageAI/robotThink.png" alt="" style={{height: `200px`} }/>
              </div> */}
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="zubuz-default-content">
              <h2 >Founder&apos;s Weamis</h2>
              <p >
                Được dẫn dắt bởi nhà sáng lập - một nghiên cứu sinh chuyên sâu về AI và Large Language Models tại Châu Âu, Weamis là cầu nối đưa công nghệ đỉnh cao từ các phòng lab hàng đầu thế giới về Việt Nam. Chúng tôi không chỉ ứng dụng mà còn liên tục cập nhật và tối ưu các mô hình LLM tiên tiến nhất vào từng giải pháp, giúp doanh nghiệp Việt Nam bắt kịp và vượt trội trong cuộc cách mạng AI toàn cầu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ContentSectionThree;

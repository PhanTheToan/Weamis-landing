import Marquee from "react-fast-marquee";
import styles from "./Brand.module.css";
import { Image } from "react-bootstrap";
const BrandSection = () => {
  return (
    <div className="section dark-bg zubuz-section-padding4">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="zubuz-brand-logo-content">
              <h3>
                Giải pháp công nghệ toàn diện <br></br>
                Đồng hành cùng bạn phát triển <br></br>
                Vững bước trong kỷ nguyên số.
              </h3>
            </div>
          </div>
          <div className="col-lg-7">
            <Marquee speed="30" className="zubuz-brand-slider">
              <div className={`${styles['img-scale']} zubuz-brand-item`}>
                <Image src="/images/v1/b_1.png" alt="" />
              </div>
              <div className={`${styles['img-scale']} zubuz-brand-item`}>
                <Image src="/images/v1/b_2.png" alt="" />
              </div>
              <div className={`${styles['img-scale']} zubuz-brand-item`}>
                <Image src="/images/v1/b_3.png" alt="" />
              </div>
              <div className={`${styles['img-scale']} zubuz-brand-item`}>
                <Image src="/images/v1/b_4.png" alt="" />
              </div>
              <div className={`${styles['img-scale']} zubuz-brand-item`}>
                <Image src="/images/v1/b_5.png" alt="" />
              </div>
              <div className={`${styles['img-scale']} zubuz-brand-item`}>
                <Image src="/images/v1/b_6.png" alt="" />
              </div>
            </Marquee>
            <Marquee
              speed="30"
              direction="right"
              className="zubuz-brand-slider"
              style={{ marginTop: "25px" }}
            >
              <div className={`${styles['img-scale']} zubuz-brand-item`}>
                <Image src="/images/v1/b_1.png" alt="" />
              </div>
              <div className={`${styles['img-scale']} zubuz-brand-item`}>
                <Image src="/images/v1/b_2.png" alt="" />
              </div>
              <div className={`${styles['img-scale']} zubuz-brand-item`}>
                <Image src="/images/v1/b_3.png" alt="" />
              </div>
              <div className={`${styles['img-scale']} zubuz-brand-item`}>
                <Image src="/images/v1/b_4.png" alt="" />
              </div>
              <div className={`${styles['img-scale']} zubuz-brand-item`}>
                <Image src="/images/v1/b_5.png" alt="" />
              </div>
              <div className={`${styles['img-scale']} zubuz-brand-item`}>
                <Image src="/images/v1/b_6.png" alt="" />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
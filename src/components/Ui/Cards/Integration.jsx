import Link from "next/link";
import { Image } from "react-bootstrap";
const IntegrationCard = ({ icon, name, category, description, link }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="zubuz-iconbox-wrap-left d-block iconbox-left-border">
        <div className="zubuz-iconbox-header">
          <div className="zubuz-iconbox-icon">
            <Image src={icon} alt="" />
          </div>
          <div className="zubuz-iconbox-header-data">
            <h4>{name}</h4>
            <p>{category}</p>
          </div>
        </div>
        <div className="zubuz-iconbox-data">
          <p>{description}</p>
          <Link className="zubuz-iconbox-btn" href="">
            <span>Read more</span>
            <Image src="/images/icon/arrow-right2.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCard;

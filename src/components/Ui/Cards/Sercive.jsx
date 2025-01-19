import Link from "next/link";
import { Image } from "react-bootstrap";
const SerciveCard = ({ title, description, icon, link }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="zubuz-iconbox-wrap-left iconbox-left-border">
        <div className="zubuz-iconbox-icon none-bg">
          <Image src={icon} alt="" style={{ width: '60px', height: '60px' }} />
        </div>
        <div className="zubuz-iconbox-data data-small">
          <span>{title}</span>
          <p>{description}</p>
          <Link className="zubuz-iconbox-btn" href={link}>
            <span>Read more</span>
            <Image src="/images/icon/arrow-right2.svg" alt="" style={{ width: '20px', height: '20px' }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SerciveCard;

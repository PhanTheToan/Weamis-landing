import { Image } from "react-bootstrap";
const FeatureCardTwo = ({ title, description, image, icon }) => {
  return (
    <div className="zubuz-iconbox-wrap2">
      <div className="zubuz-iconbox-icon">
        <Image src={icon} alt="" />
      </div>
      <div className="zubuz-iconbox-data">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="zubuz-iconbox-thumb">
        <Image src={image} alt="" />
      </div>
    </div>
  );
};

export default FeatureCardTwo;

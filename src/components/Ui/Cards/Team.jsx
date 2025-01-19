import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Image } from "react-bootstrap";
const TeamCard = ({ name, role, image, twitter, facebook, linkedin }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="zubuz-team-wrap">
        <div className="zubuz-team-thumb">
          <Image src={image} alt={name} />
          <div className="zubuz-team-data">
            <a href="single-team.html">
              <h4>{name}</h4>
            </a>
            <p>{role}</p>
            <div className="zubuz-social-icon social-box small-box position">
              <ul>
                <li>
                  <a href={twitter} target="_blank">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href={facebook} target="_blank">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href={linkedin} target="_blank">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

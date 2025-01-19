/* eslint-disable react/no-unescaped-entities */
import { Image } from "react-bootstrap";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const FooterTwo = () => {
  return (
    <footer className="zubuz-footer-section">
      <div className="container">
        <div className="zubuz-footer-top">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="zubuz-footer-textarea">
                <Link href="/">
                  <Image src="/images/logo/logo-dark.svg" alt="" />
                </Link>
                <p>
                  Chúng tôi là đối tác mới của bạn, cung cấp các giải pháp tiên tiến giúp nâng tầm doanh nghiệp của bạn.
                </p>
                <div className="zubuz-social-icon social-box">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/weamis.tech.solutions" target="_blank">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/weamis" target="_blank">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/" target="_blank">
                        <FaGithub />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="zubuz-footer-menu extar-margin">
                <div className="zubuz-footer-title">
                  <p>Điều hướng</p>
                </div>
                <ul>
                  <li>
                    <Link href="/">Weamis</Link>
                  </li>
                  <li>
                    <Link href="/weAI">WeAI</Link>
                  </li>
                  <li>
                    <Link href="/Website">Website</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="zubuz-footer-menu">
                <div className="zubuz-footer-title">
                  <p>Utility pages</p>
                </div>
                <ul>
                  <li>
                    <Link href="">Instructions</Link>
                  </li>
                  <li>
                    <Link href="">Style guide</Link>
                  </li>
                  <li>
                    <Link href="">Licenses</Link>
                  </li>
                  <li>
                    <Link href="">404 Not found</Link>
                  </li>
                  <li>
                    <Link href="">Password protected</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="zubuz-footer-menu extar-margin">
                <div className="zubuz-footer-title">
                  <p>Resources</p>
                </div>
                <ul>
                  <li>
                    <Link href="">Support</Link>
                  </li>
                  <li>
                    <Link href="">Privacy policy</Link>
                  </li>
                  <li>
                    <Link href="">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="">Strategic finance</Link>
                  </li>
                  <li>
                    <Link href="">Video guide</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="zubuz-footer-bottom center">
          <div className="zubuz-copywright">
            <p> &copy;Copyright 2024, All Rights Reserved by Weamis</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;

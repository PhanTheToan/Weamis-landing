/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const FooterSectionThree = () => {
  return (
    <footer className="zubuz-footer-section dark-bg">
      <div className="container">
        <div className="zubuz-footer-extra-top">
          <div className="row">
            <div className="col-lg-7">
              <div className="zubuz-footer-extra-title">
                <h2>Nâng tầm doanh nghiệp của bạn</h2>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="zubuz-footer-btn">
                <Link className="zubuz-default-btn pill" href="connect">
                  <span>Bắt đầu ngay</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="zubuz-footer-top">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              <div className="zubuz-footer-textarea light">
                <Link href="/">
                  <img src="/images/logo/logo-white-weamis.png" alt="" style={{ height: '50px' }} />
                </Link>
                <p>
                  Chúng tôi là đối tác mới của bạn, cung cấp các chiến lược nâng cao hỗ trợ thúc đẩy công ty của bạn.
                </p>
                <div className="zubuz-social-icon social-box social-box-white">
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
            <div className="col-xl-1"></div>
            <div className="col-xl-3 col-md-6">
              <div className="zubuz-footer-menu light extar-margin">
                <div className="zubuz-footer-title light">
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
            {/* <div className="col-xl-2 col-md-4">
              <div className="zubuz-footer-menu light">
                <div className="zubuz-footer-title light">
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
            </div> */}
        {/* <div className="col-xl-3 col-md-6">
              <div className="zubuz-footer-menu light info extar-margin">
                <div className="zubuz-footer-title light">
                  <p>Thông tin liên hệ</p>
                </div>
                <ul>
                  <li>
                    <Link href="">
                      <img src="/images/icon/call.svg" alt="" />
                      0389791310
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <img src="/images/icon/email.svg" alt="" />
                      connect@weamis.com
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <img src="/images/icon/map.svg" alt="" />
                      Ha Noi, Viet Nam
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <img src="/images/icon/map.svg" alt="" />
                      Aubiere, France
                    </Link>
                  </li>
                </ul>
              </div> */}
        {/* </div>
          </div>
        </div> */}
        {/* <div className="zubuz-footer-bottom center light">
          <div className="zubuz-copywright light">
            <p> &copy;Copyright 2024, All Rights Reserved by Weamis</p>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default FooterSectionThree;

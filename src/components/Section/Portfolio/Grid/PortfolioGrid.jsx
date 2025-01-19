"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import PortfolioFilterNav from "../Components/PortfolioFilterNav";
import { Image } from "react-bootstrap";
const PortfolioGrid = () => {
  const isotopeRef = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    // Check if window is defined (i.e., in the browser environment)
    if (typeof window !== "undefined") {
      // Dynamically import Isotope only in the client-side code
      import("isotope-layout").then((Isotope) => {
        // Initialize Isotope grid
        isotopeRef.current = new Isotope.default(".filter-container", {
          itemSelector: ".filter-item",
          layoutMode: "fitRows",
        });
      });
    }
  }, []);

  useEffect(() => {
    // Check if isotopeRef.current is defined (i.e., Isotope is initialized)
    if (isotopeRef.current) {
      // Arrange items based on filter key
      if (filterKey === "*") isotopeRef.current.arrange({ filter: `*` });
      else isotopeRef.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  // Event handler for filter key change
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  return (
    <div className="section zubuz-section-padding3 overflow-hidden">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Những dự án website ấn tượng</h2>
        </div>
        <PortfolioFilterNav
          filterKey={filterKey}
          handleFilterKeyChange={handleFilterKeyChange}
        />
        <div
          className="zubuz-portfolio-column filter-container"
          id="zubuz-three-column"

        >
          <div className="filter-item wifi landingpage">
            <div className="collection-grid-item zubuz-portfolio-wrap branding wifi">
              <div className="zubuz-portfolio-thumb">
                <Image src="/images/portfolio/p_1.png" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="https://banconghanoi.com/">
                    <h3>Ban Công</h3>
                  </Link>
                  <p>Website</p>
                  <Link
                    className="zubuz-portfolio-icon"
                    href="https://banconghanoi.com/"
                  >
                    <Image src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-item wifi website ai landingpage">
            <div className="collection-grid-item zubuz-portfolio-wrap wifi Website">
              <div className="zubuz-portfolio-thumb">
                <Image src="/images/portfolio/p_2.png" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="https://lalothanoi.com/">
                    <h3>Lá Lốt</h3>
                  </Link>
                  <p>Website</p>
                  <Link
                    className="zubuz-portfolio-icon"
                    href="https://lalothanoi.com/"
                  >
                    <Image src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-item wifi chuyendoiso landingpage saas ecommerce">
            <div className="collection-grid-item zubuz-portfolio-wrap wifi chuyendoiso">
              <div className="zubuz-portfolio-thumb">
                <Image src="/images/portfolio/p_3.png" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="https://meyojapanorder.com/">
                    <h3>MeyoJapanOrder</h3>
                  </Link>
                  <p>Website</p>
                  <Link
                    className="zubuz-portfolio-icon"
                    href="https://meyojapanorder.com/"
                  >
                    <Image src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-item wifi branding chuyendoiso landingpage">
            <div className="collection-grid-item zubuz-portfolio-wrap branding wifi Website chuyendoiso">
              <div className="zubuz-portfolio-thumb">
                <Image src="/images/portfolio/p_4.png" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="https://xinedanang.com/">
                    <h3>Xine</h3>
                  </Link>
                  <p>Website</p>
                  <Link
                    className="zubuz-portfolio-icon"
                    href="https://xinedanang.com/"
                  >
                    <Image src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-item wifi landingpage ecommerce">
            <div className="collection-grid-item zubuz-portfolio-wrap wifi">
              <div className="zubuz-portfolio-thumb">
                <Image src="/images/portfolio/p_5.png" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="https://www.chamgourmet.com/">
                    <h3>Chamgourmet</h3>
                  </Link>
                  <p>Website</p>
                  <Link
                    className="zubuz-portfolio-icon"
                    href="https://www.chamgourmet.com/"
                  >
                    <Image src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;

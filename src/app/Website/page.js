import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer";
import Header from "~/components/Section/Common/Header/Header";
import HomeHeader from "~/components/Section/Common/Header/HomeHeader";
import PortfolioGrid from "~/components/Section/Portfolio/Grid/PortfolioGrid";
import ContentSection from "~/components/Section/SingleService/Content/Content";
import AboutSection from "~/components/Section/AboutUs/About/AboutSection";
import FooterSectionThree from "~/components/Section/Common/Footer-3/FooterThree";

export default function PortfolioGridPage() {
  return (
    <>
      <HomeHeader roundedBtn="true" />
      <PageHeader title={<>Website doanh nghiệp <br />
        <span style={{ fontSize: 61, lineHeight: '0.61em', display: 'block', marginTop: '0.618em' }} >
          Landing Page - SaaS - E-commerce
        </span>
      </>
      }
        image_background="/weamis/bg1-01.png" />
      <ContentSection />
      <AboutSection />
      <PortfolioGrid />
      <FooterSectionThree />
      <Footer />
    </>
  );
}

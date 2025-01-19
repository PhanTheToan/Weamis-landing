'use client'
import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer";
// import Header from "~/components/Section/Common/Header/Header";
import HomeHeader from "~/components/Section/Common/Header/HomeHeader";
import PortfolioGrid from "~/components/Section/Portfolio/Grid/PortfolioGrid";
// import ContentSection from "~/components/Section/SingleService/Content/Content";
import { ContentOne, ContentTwo } from "~/components/Section/Home-1/Content";
import ContentThree from "~/components/Section/Home-1/Content/ContentThree";
import PricingSection from "~/components/Section/Home-2/Pricing/Pricing";
import FooterSectionThree from "~/components/Section/Common/Footer-3/FooterThree";
export default function PortfolioGridPage() {
  return (
    <>
      <HomeHeader roundedBtn="true" />
      <PageHeader title=
        {<>WeAI <br />
          <span style={{ fontSize: 61, lineHeight: '0.61em', display: 'block', marginTop: '0.618em' }}>
            Hành trình đưa bạn tới thành công
          </span></>}
        image_background="/weamis/bg1-01.png" />
      <ContentOne />
      <ContentTwo />
      <ContentThree />
      <PricingSection />
      {/* <PortfolioGrid /> */}
      <FooterSectionThree />
      <Footer />
    </>
  );
}

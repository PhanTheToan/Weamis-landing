'use client'
import ContentSectionTwo from "~/components/Section/Home-3/Content-2/ContentTwo";
import ContentSection from "~/components/Section/Home-3/Content/Content";
import HeroSection from "~/components/Section/Home-3/Hero/Hero";
import IntegrationSection from "~/components/Section/Common/Integration-2/IntegrationTwo";
import StateSection from "~/components/Section/Home-3/State/State";
import ServiceSection from "~/components/Section/Home-3/Service/Service";
import FAQSection from "~/components/Section/Common/FAQ/FAQSection";
import Pricing from "~/components/Section/Common/Pricing";
import HomeHeader from "~/components/Section/Common/Header/HomeHeader";
import Footer from "~/components/Section/Common/Footer";
import FooterSectionThree from "~/components/Section/Common/Footer-3/FooterThree";
import PortfolioGrid from "~/components/Section/Portfolio/Grid/PortfolioGrid";
import BrandSection from "~/components/Section/Home-1/Brand/Brand";
import ContentSectionOne from "~/components/Section/Home-2/Content/ContentOne";

export default function HomeThreePage() {
  return (
    <>
      <HomeHeader roundedBtn="true" />
      <HeroSection />
      <ServiceSection />
      <ContentSection />
      {/* <ContentSectionTwo /> */}
      {/* <StateSection /> */}
      {/* <Pricing /> */}
      <BrandSection />
      {/* <IntegrationSection /> */}
      <ContentSectionOne />
      {/* <PortfolioGrid /> */}
      <FAQSection />
      <FooterSectionThree />
      <Footer />
    </>
  );
}

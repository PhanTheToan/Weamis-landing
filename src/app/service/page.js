import IntegrationSection from "~/components/Section/Common/Integration-2/IntegrationTwo";
import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer";
import ServiceSection from "~/components/Section/Service/Service/Service";
import PricingSection from "~/components/Section/Common/Pricing/Pricing";
import Header from "~/components/Section/Common/Header/Header";
import PortfolioGrid from "~/components/Section/Portfolio/Grid/PortfolioGrid-service";
import TestimonialSection from "~/components/Section/Common/Testimonial/Testimonial";
import HomeHeader from "~/components/Section/Common/Header/HomeHeader";
import FooterSectionThree from "~/components/Section/Common/Footer-3/FooterThree";

export default function ServicePage() {
  return (
    <>
      <HomeHeader roundedBtn="true" />
      <PageHeader title={<>Weamis Services<br />
        <span style={{ fontSize: 61, lineHeight: '0.61em', display: 'block', marginTop: '0.618em' }}>
          Giải pháp công nghệ cho doanh nghiệp
        </span></>}
        image_background="/weamis/bg1-01.png" />
      <ServiceSection />
      {/* <PricingSection /> */}
      <TestimonialSection />
      <PortfolioGrid />
      <PricingSection />
      <FooterSectionThree />
      <Footer />
    </>
  );
}

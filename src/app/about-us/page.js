import AboutSection from "~/components/Section/AboutUs/About/AboutSection";
import ContentSection from "~/components/Section/AboutUs/Content/ContentSection";
import FAQSection from "~/components/Section/Common/FAQ/FAQSection";
import StateSection from "~/components/Section/AboutUs/State/StateSection";
import TeamSection from "~/components/Section/AboutUs/Team/TeamSection";
import Footer from "~/components/Section/Common/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";
import Header from "~/components/Section/Common/Header/Header";
import HomeHeader from "~/components/Section/Common/Header/HomeHeader";
import FooterSectionThree from "~/components/Section/Common/Footer-3/FooterThree";

const AboutPage = () => {
  return (
    <>
      <HomeHeader roundedBtn="true" />
      <PageHeader title={<>Weamis
        <span style={{ fontSize: 61, lineHeight: '0.61em', display: 'block', marginTop: '0.618em' }}>
          Đối tác lý tưởng của bạn
        </span></>} image_background="/weamis/bg1-01.png" />
      <AboutSection />
      {/* <StateSection /> */}
      <TeamSection />
      <ContentSection />
      {/* <FAQSection /> */}
      <FooterSectionThree />

      <Footer />
    </>
  );
};

export default AboutPage;

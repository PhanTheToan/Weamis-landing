import FAQSection from "~/components/Section/Common/FAQ/FAQSection";
import Footer from "~/components/Section/Common/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";
import CallUs from "~/components/Section/ContactUs/CallUs";
import ContactSection from "~/components/Section/ContactUs/Contact/ContactSection";
import HomeHeader from "~/components/Section/Common/Header/HomeHeader";
import FooterSectionThree from "~/components/Section/Common/Footer-3/FooterThree";

const ContactUsPage = () => {
  return (
    <>
      <HomeHeader />
      <PageHeader title=
        {<>Hãy để chúng tôi <br />
          <span style={{ fontSize: 61, lineHeight: '0.61em', display: 'block', marginTop: '0.618em' }}>
            đồng hành cùng bạn !
          </span></>}
        image_background="/weamis/bg1-01.png" />
      <ContactSection />
      <CallUs />
      <FAQSection />
      <FooterSectionThree />
      <Footer />
    </>
  );
};

export default ContactUsPage;

import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import CompanyIntroSection from "./components/CompanyIntroSection/CompanyIntroSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection/WhyChooseUsSection";
import IndustriesSection from "./components/IndustriesSection/IndustriesSection";
import TechnologiesSection from "./components/TechnologiesSection/TechnologiesSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import AwardsSection from "./components/AwardsSection/AwardsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      <Box id="home">
        <HeroSection />
      </Box>
      <CompanyIntroSection />
      <Box id="services">
        <ServicesSection />
      </Box>
      <Box id="why-choose-us">
        <WhyChooseUsSection />
      </Box>
      <Box id="industries">
        <IndustriesSection />
      </Box>
      <Box id="portfolio">
        <AwardsSection />
      </Box>
      <Box id="technologies">
        <TechnologiesSection />
      </Box>
      <Box id="products">
        <ProductsSection />
      </Box>
      <Box id="testimonial">
        <TestimonialsSection />
      </Box>
      <Box id="contact">
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;

import Banner from "@/components/core-ui/banner";
import SiteHeader from "@/components/core-ui/site-header";
import CTASection from "@/components/sections/cta";
import FAQSection from "@/components/sections/faq";
import FeatureSection from "@/components/sections/feature";
import Footer from "@/components/sections/footer";
import IntroSection from "@/components/sections/intro";
import PricingSection from "@/components/sections/pricing";
import TestimoniesSection from "@/components/sections/testimonies";

export default function Home() {
  return (
    <>
      <div className="bg-[#f7f7f8] relative w-full max-w-screen-2xl mx-auto">
        <SiteHeader />
        <Banner />
        <IntroSection />
        <FeatureSection />
      </div>
      <div className="bg-white">
        <div className="w-full max-w-screen-2xl mx-auto">
          <PricingSection />
          <TestimoniesSection />
        </div>
      </div>
      <div className="bg-[#f7f7f8] w-full mx-auto">
        <CTASection />
      </div>
      <div className="bg-white">
        <div className="w-full max-w-screen-xl mx-auto">
          <FAQSection />
        </div>
      </div>
      <Footer />
    </>
  );
}

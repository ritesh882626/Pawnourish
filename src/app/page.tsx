import HeroSection from '@/components/home/HeroSection';
import TrustIndicators from '@/components/home/TrustIndicators';
import BrandShowcase from '@/components/home/BrandShowcase';
import WholesaleAdvantage from '@/components/home/WholesaleAdvantage';
import CataloguePreview from '@/components/home/CataloguePreview';
import DealerEnquirySection from '@/components/home/DealerEnquirySection';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import FAQSection from '@/components/home/FAQSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <BrandShowcase />
      <WholesaleAdvantage />
      <CataloguePreview />
      <HowItWorks />
      <DealerEnquirySection />
      <Testimonials />
      <FAQSection />
    </>
  );
}

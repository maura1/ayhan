import Hero from '@/components/Hero';
import Reviews from '@/components/ReviewsList';
import ServicesList from '@/components/ServicesList';
import Footer from '@/components/Footer';
import Welcome from '@/components/Welcome'; // Import Welcome component
import PriceList from '@/components/PriceList';

export default function HomePage() {  
  return (
    <>
      {/* Wrapper for Hero and Welcome */}
      <div className="relative">
        <Hero />
        <Welcome />
      </div>

      {/* Services Section */}
      <div className="relative z-0">
        <ServicesList />
      </div>

      {/* Other Sections */}
      <Reviews />
      <PriceList/>
      <Footer />
    </>
  );
}

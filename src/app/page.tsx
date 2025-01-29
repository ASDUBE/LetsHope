import FeaturedEvents from '@/components/Featured-Events';
import Footer from '@/components/Footer';
import HeroSection from '@/components/hero-section';
import Team from '@/components/Team';
import TestimonialCards from '@/components/TestimonialCards';
import UpcomingWebinars from '@/components/UpcomingWebinars';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <HeroSection />
      <FeaturedEvents />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <Team />
      <Footer />
    </main>
  );
}

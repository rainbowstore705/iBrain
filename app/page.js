
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MissionAndTestimonial from "../components/MissionAndTestimonial";
import PlanetSpotlight from "../components/PlanetSpotlight";
import CausesSection from "../components/CausesSection";
import TrustedForceSection from "../components/TrustedForceSection";
import DonationBanner from "../components/DonationBanner";
import CharityEventsSection from "../components/CharityEventsSection";
import BlogStoriesSection from "../components/BlogStoriesSection";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";  

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MissionAndTestimonial />
        <PlanetSpotlight />
        <CausesSection />
        <TrustedForceSection />
        <DonationBanner />
        <CharityEventsSection />
        <BlogStoriesSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
import CardSection from "@/components/card-section";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col space-y-12">
      <Navbar />
      <HeroSection />
      <Services />
      <CardSection />
      <Footer />
    </div>
  );
}

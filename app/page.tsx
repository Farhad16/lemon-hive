import CardSection from "@/components/card-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col space-y-6">
      <Navbar />
      <HeroSection />
      <CardSection />
    </div>
  );
}


import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProgramFeatures from "@/components/ProgramFeatures";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-camp-background">
      <Header />
      <Hero />
      <ProgramFeatures />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;


import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import UserSegments from "@/components/UserSegments";
import AppShowcase from "@/components/AppShowcase";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <ProblemSolution />
      <AppShowcase />
      <Features />
      <UserSegments />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;

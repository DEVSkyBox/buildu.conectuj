
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/781e3cca-b3e4-478c-83f1-fc992512fbc7.png" 
            alt="BuildU Logo" 
            className="h-12 w-12 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-white">BuildU</h1>
            <p className="text-xs text-gray-400">Building for Universities</p>
          </div>
        </div>
        <Button 
          onClick={scrollToWaitlist}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
        >
          Join Waitlist
        </Button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-8 mt-20">
        <div className="max-w-4xl mx-auto">
          {/* ConectUJ Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/88a6a47f-c8c3-4135-adf6-6e23eea54408.png" 
              alt="ConectUJ Logo" 
              className="h-20 w-20 mx-auto mb-4"
            />
            <h2 className="text-xl text-purple-400 font-semibold">ConectUJ</h2>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Connecting
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              University
            </span>
            Communities
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The first student-centered digital platform that fosters trusted connections, 
            simplifies campus interactions, and brings the student community together in one unified space.
          </p>

          <div className="mb-12">
            <p className="text-lg text-purple-300 font-medium mb-4">Our Mission</p>
            <p className="text-gray-400 text-lg italic max-w-2xl mx-auto">
              "We build for the Universe, We build for Universities, We build for you"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToWaitlist}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40"
            >
              Join the Revolution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-full"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 mt-20 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-2">5+</h3>
              <p className="text-gray-400">Core Features</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
              <p className="text-gray-400">Student Focused</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-2">∞</h3>
              <p className="text-gray-400">Possibilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
